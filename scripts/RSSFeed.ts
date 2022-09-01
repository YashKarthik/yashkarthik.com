import fs from "fs";
import { Feed } from "feed";
import { metaData } from "./Metadata";

export const generateRssFeed = async () => {

  const posts = await metaData()
    .then(p => p.props.sortedData);

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
    image: `${siteURL}/thelatenightbuilders.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All text licensed under the Creative Commons Attribution 4.0 International License`,
    updated: date,
    generator: "https://github.com/jpmonette/feed",
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
      atom: `${siteURL}/feed.xml`,
    },

    author,
  });

  posts.forEach(async (post) => {

    const url = `${siteURL}/archive/${post.shortName}`;
    feed.addItem({

      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: `Will be fixed soon, for now head to: ${url}`,
      author: [author],
      contributor: [author],
      date: new Date(post.date),

    });
  });

  fs.writeFileSync("./public/feed.xml", feed.rss2());
};
