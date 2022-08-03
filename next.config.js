//import remarkMath from "remark-math";
//import rehypeMathjax from "rehype-mathjax";

const withTM = require('next-transpile-modules')(['three'])
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withTM(withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}))

rewrites: async () => [
  {
    source: "/public/file.html",
    destination: "/pages/api/file.js",
  },
]
