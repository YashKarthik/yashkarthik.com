import rss from '@astrojs/rss';
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"

export async function get(context:any) {
  const blog = await getCollection('blog');
  return rss({
    // `<title>` field in output xml
    title: "Yash Karthik",
    // `<description>` field in output xml
    description: "Essays by Yash Karthik on programming, physics and culture",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => {
      return {
        link: `/writing/${post.slug}/`,
        title: post.data.title,
        pubDate: new Date(post.data.started),
        description: post.data.description,
        //content: sanitizeHtml(renderedHTML),
      }
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
