package handler

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strings"
	"sync"
	"time"

	"github.com/gorilla/feeds"
	"golang.org/x/net/html"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Fetching essays archive")
    res, err := http.Get("http://paulgraham.com/articles.html")
    if err != nil {
        fmt.Fprint(w, "Could not fetch essays from paulgraham.com")
        log.Fatal("Couldn't GET: \n", err)
    }
    defer res.Body.Close()

    if res.StatusCode != http.StatusOK {
        fmt.Fprint(w, "Could not fetch essays from paulgraham.com")
        log.Fatal("res.Status not OK:\n", res.Status)
    }

    fmt.Println("Parsing archive page html")
    document, err := html.Parse(res.Body)
    if err != nil {
        fmt.Fprint(w, "Could not parse paulgraham.com")
        log.Fatal("Couldn't read body: \n", err)
    }

    fmt.Println("Generating list of essays")
    articleLinks := getArticleLinks(document)

    var articles []Article
    articlesChan := make(chan Article)
    failedArticlesChan := make(chan string)

    fmt.Println("Fetching and parsing essays")
    var wg sync.WaitGroup
    for i, articleLink := range articleLinks {
        wg.Add(1)
        go func(articleLink string, articlesChan chan Article, i int) {
            defer wg.Done()
            article, err := getArticle(articleLink)
            if err != nil {
                fmt.Println("🟡", articleLink)
                failedArticlesChan <- articleLink
                // not returning cuz this still returns an article, with default date,
                // which we handle in next line
            }
            defaultArticle := Article{}
            if article == defaultArticle { return }
            articlesChan <- article
        }(articleLink, articlesChan, i)
    }

    var wg2 sync.WaitGroup

    wg2.Add(1)
    go func() {
        defer wg2.Done()
        fmt.Println("Fetched and parsed all essays")
        wg.Wait()
        close(articlesChan)
        close(failedArticlesChan)
    }()

    wg2.Add(1)
    go func() {
        defer wg2.Done()
        for article := range articlesChan {
            defaultArticle := Article{}
            if article == defaultArticle { continue }
            articles = append(articles, article)
        }
    }()


    var failedArticles []string
    wg2.Add(1)
    go func() {
        defer wg2.Done()
        for failedArticle := range failedArticlesChan {
            if failedArticle == "" { continue }
            failedArticles = append(failedArticles, failedArticle)
        }
    }()

    wg2.Wait()
    fmt.Println("🟩", articles)
    fmt.Println("🟥", failedArticles)

    feed := &feeds.Feed{
        Title: "Essays by Paul Graham",
        Link: &feeds.Link{Href: "http://paulgraham.com/articles.html"},
        Description: "Scraped feed of paulgraham.com provided by yashkarthik.xyz",
        Author: &feeds.Author{Name: "Paul Graham"},
        Created: time.Now(),
    }

    fmt.Println("Generating RSS feed")
    for _, feedItem := range articles {
        feed.Items = append(feed.Items, &feeds.Item{
            Title: feedItem.title,
            Link: &feeds.Link{Href: "http://paulgraham.com/"+feedItem.link},
            Description: "Essay by Paul Graham on " + feedItem.title,
            Created: feedItem.date,
        })
    }

    rss, err := feed.ToRss()
    if err != nil {
        fmt.Fprint(w, "Could not generate RSS feed.")
        log.Fatal("Couldn't generate feed.")
    }

    fmt.Println("RSS feed:\n", rss)
    fmt.Fprint(w, rss)
}

func getArticleLinks(node *html.Node) []string {
    var links []string

    if node.Type == html.ElementNode && node.Data == "a" {
        for _, attribute := range node.Attr {
            link, err := parseAnchorTag(attribute)
            if err != nil {}
            links = append(links, link)
        }
    }

    for child := node.FirstChild; child != nil; child = child.NextSibling {
        childLinks := getArticleLinks(child)
        links = append(links, childLinks...)
    }

    return links
}

func parseAnchorTag(tag html.Attribute) (string, error) {
    if tag.Key != "href" {
        return "", errors.New("Expected Anchor Tag, but received something else.")
    }

    /** On PG's website internal links have only their route name
        => <a href="getideas.com">...</a> == paulgraham.com/getideas.html
        Also don't scrape rss.html and index.html
        All other links on page are not inside <a></a>; they are inside <area></area> represting a sidebar.
    */
    if strings.Contains(tag.Val, "/") || tag.Val == "rss.html" || tag.Val == "index.html" {
        return "", errors.New("Not article link.")
    }
    return tag.Val, nil
}


type Article struct {
    link    string
    title   string
    date    time.Time
}

func getArticle(articleUrl string) (Article, error) {
    if articleUrl == "" {
        return Article{}, errors.New("Empty articleUrl")
    }

    res, err := http.Get("http://paulgraham.com/" + articleUrl)
    if err != nil {
        log.Println("❌ Could not get article:", err.Error())
        return Article{}, err
    }
    defer res.Body.Close()

    if res.StatusCode != http.StatusOK {
        log.Println("❌ res.Status not OK:\n", res.Status)
        return Article{}, err
    }

    articleNode, err := html.Parse(res.Body)
    if err != nil {
        log.Println("❌ Couldn't read body: \n", articleUrl, "\n", err)
        return Article{}, err
    }

    title, err := getArticleTitle(articleNode)
    if err != nil {
        log.Println("❌ No title." + articleUrl)
        return Article{}, err
    }

    date, err := getArticleDate(articleNode)
    if err != nil {
        log.Println("❌ No date: " + articleUrl + "\n" + err.Error())
        return Article{
            link: articleUrl,
            title: title,
            date: time.Now(),
        }, err
    }

    return Article{
        link: articleUrl,
        date: date,
        title: title,
    }, nil
}


func getArticleDate(articleNode *html.Node) (time.Time, error) {
    dateLayout := "January 2006"

    if articleNode.Type == html.ElementNode && (articleNode.Data == "font" || articleNode.Data == "p") {
        for node := articleNode.FirstChild; node != nil; node = node.NextSibling {
            if node.Type == html.TextNode {
                if matched, _ := regexp.MatchString(`^\w+ \d{4}$`, node.Data); matched {
                    t, err := time.Parse(dateLayout, node.Data)
                    if err != nil {
                        fmt.Println(err.Error())
                        return time.Time{}, errors.New("Could not get date" + err.Error())
                    }
                    return t, nil
                } else if matched, _ := regexp.MatchString(`^\n\w+ \d{4}$`, node.Data); matched {
                    t, err := time.Parse(dateLayout, node.Data[1:])
                    if err != nil {
                        fmt.Println(err.Error())
                        return time.Time{}, errors.New("Could not get date" + err.Error())
                    }
                    return t, nil
                } else {
                    break
                }
            }
        }
    }

    for child := articleNode.FirstChild; child != nil; child = child.NextSibling {
        date, err := getArticleDate(child)
        if err == nil {
            return date, nil
        }
    }

    return time.Time{}, errors.New("Could not get date")
}

func getArticleTitle(articleNode *html.Node) (string, error) {
    if articleNode.Type == html.ElementNode && articleNode.Data == "img" {
        for _, attribute := range articleNode.Attr {
            if attribute.Key == "alt" {
                return attribute.Val, nil
            }
        }
    }

    for child := articleNode.FirstChild; child != nil; child = child.NextSibling {
        title, err := getArticleTitle(child)
        if err == nil {
            return title, err
        }
    }

    return "", errors.New("Could not get title.")
}

