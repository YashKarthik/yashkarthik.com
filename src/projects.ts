type Project = {
  title: string;
  short_desc: string;
  long_desc: string;
  github: string;
  website?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "Curly",
    short_desc: "A minimal clone of cURL using Sockets.",
    long_desc: "I've been learning C these past few weeks and what better way than to rewrite Unix utilities.",
    github: "https://github.com/yashkarthik/curly",
    images: ["/blog-assets/curly.png"]
  },
  {
    title: "Tiviem",
    short_desc: "(/ti:vi:em/) A rudimentary implementation of the Ethereum Virtual Machine in Typescript.",
    long_desc: "Implements all opcodes defined in Shanghai hardfork. I built this to learn about assembly and stack machines. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    github: "https://github.com/yashkarthik/tiviem",
    images: ["/blog-assets/tiviem-0.jpg", "/blog-assets/tiviem-1.png", "/blog-assets/tiviem-2"]
  },
  {
    title: "Firechat",
    short_desc: "A proof of concept for using smart contract storage as a database.",
    long_desc: "It's a chat app that stores messages on Ethereum (inside the smart contract). Learnt a lot while building this, currenty working on encryption.",
    github: "https://github.com/yashkarthik/firechat",
    website: "https://firechat.yashkarthik.xyz",
    images: ["./blog-assets/firechat-0.png"]
  },
  {
    title: "Casterscan",
    short_desc: "A blockexplorer for Farcaster",
    long_desc: "A collaboration between me and dylansteck.com. It's a sort of block explorer for Farcaster. Recently: integration with nf.td.",
    github: "https://github.com/dylsteck/casterscan",
    website: "https://casterscan.com",
  },
  {
    title: "Scribble",
    short_desc: "MS Paint + stable diffusion",
    long_desc: "An AI-powered whiteboard where you can draw rough sketches and use Stable Diffusion to generate art out of them. Built with Next.js, embeds Excalidraw.com for whiteboard, and Stable Diffusion ControlNet for guiding the image output. (800+ generations in 5 days)",
    github: "https://github.com/YashKarthik/scribble",
    website: "https://scribble.yashkarthik.xyz",
    images: ["./blog-assets/scribble-0.png"]
  },
  {
    title: "Enscan",
    short_desc: "Index the ENS Contracts",
    long_desc: "The Ethereum Name Service (ENS) is an on-chain Linktree. But almost none of that data can be queried with complex conditions, like in SQL. Enscan is an indexer that crawls the ENS contracts and indexes the data into a database, enabling developers to interact with the data using SQL. (v1 out, building v2)",
    github: "https://github.com/YashKarthik/enscan",
    website: "https://enscan.yashkarthik.xyz"
  },
  {
    title: "Farcaster Directory",
    short_desc: "lorem",
    long_desc: "A directory of Farcaster accounts and their respective Twitter accounts, making it easier to find your Twitter friends on Farcaster.",
    github: "https://github.com/YashKarthik/farcaster-directory",
    website: "https://directory.yashkarthik.xyz",
  },
  {
    title: "pg-scraper",
    short_desc: "lorem",
    long_desc: "A simple program that generates a scraped RSS feed of Paul Graham's essays. My first app in Go; it was the perfect project to explore Go's concurrency model. It's deployed as a serverless function that generates the feed everytime a new request comes in.",
    github: "https://github.com/YashKarthik/pg-scraper",
    website: "https://yashkarthik.xyz/api/pg-feed",
  },
  {
    title: "Skimmr",
    short_desc: "lorem",
    long_desc: "A Chrome extension that uses OpenAI's GPT-3 to summarize and explain articles, helping you read articles faster.",
    github: "https://github.com/YashKarthik/skimmr",
    website: "https://skimmr.xyz"
  },
  {
    title: "Ethernaut CTF",
    short_desc: "lorem",
    long_desc: "Solutions to the Ethernaut CTF challenge.",
    github: "https://github.com/YashKarthik/ethernaut-solutions",
  },
  {
    title: "Breathe",
    short_desc: "lorem",
    long_desc: "A web app that sends you alerts when the pollution in your city reaches dangerous level.s",
    github: "https://github.com/YashKarthik/breathe",
  },
  {
    title: "Screenshot Essays",
    short_desc: "lorem",
    long_desc: "A Farcaster \"client\" to read the best screenshot essays posted there.",
    github: "https://github.com/YashKarthik/screenshot-essay-caster",
    website: "https://screenshot-essay-caster.vercel.app/"
  },
  {
    title: "Simple NFT",
    short_desc: "lorem",
    long_desc: "A beginner NFT project built using Solidity and the Brownie framework.",
    github: "https://github.com/YashKarthik/nft-using-mix",
  },
  {
    title: "Friendcaster",
    short_desc: "lorem",
    long_desc: "A web app to visualize your Farcaster interaction circle.",
    github: "https://github.com/YashKarthik/friendcaster",
  }
];
