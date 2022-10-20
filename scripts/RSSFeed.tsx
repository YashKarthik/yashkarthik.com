import fs from "fs";
import { Feed } from "feed";
import { dataForRss } from "./Metadata";

export const generateRssFeed = async () => {

  const posts = await dataForRss()
    .then(p => p.props.sortedData);

  const siteURL = 'https://www.yashkarthik.xyz';
  const date = new Date();
  const author = {
    name: "yashkarthik.eth",
    link: "https://twitter.com/_yashKarthik",
  };

  const feed = new Feed({

    title: "yashKarthik",
    description: "Essays by yashKarthik on web3, programming, and physics",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/thelatenightbuilders.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All text licensed under the Creative Commons Attribution 4.0 International License`,
    updated: date,
    generator: "https://github.com/jpmonette/feed",
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
      atom: `${siteURL}/atom.xml`,
    },

    author,
  });

  posts.forEach(async (post) => {

    const url = `${siteURL}/archive/${post.shortName}`;

    //const file = await import(`../pages/archive/${post.shortName}.mdx`);
    //const content = renderToString(<file.default />);
    //console.log(content);

    feed.addItem({

      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),

    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
};
