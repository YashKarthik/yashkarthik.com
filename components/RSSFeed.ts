import fs from "fs";
import { Feed } from "feed";
import { metaData } from "./Metadata";

const generateRssFeed = async () => {

  const posts = await metaData()
    .then(junk => junk.props.sortedData);
  const siteURL = 'https://www.yashkarthik.xyz';
  const date = new Date();
  const author = {
    name: "yashkarthik.eth",
    link: "https://twitter.com/_yashKarthik",
  };

  const feed = new Feed({

    title: "yashKarthik",
    description: "Essays by yashKarthik on web3, programmig, and physics",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/public/ogImage.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, yashKarthik`,
    updated: date,
    generator: "https://github.com/jpmonette/feed",
    feedLinks: {
      rss2: `{siteURL}/rss/feed.xml`,
    },

    author,
  });

  posts.forEach((post) => {

    const url = `https://www.yashkarthik.xyz/archive/${post.shortName}`;
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

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
};

export default generateRssFeed;
