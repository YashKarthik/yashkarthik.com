type Project = {
  title: string;
  description: string;
  github: string;
  website?: string
}

export const projects: Project[] = [
  {
    title: "Firechat",
    description: "A proof of concept for using smart contract storage as a database. It's a chat app that stores messages on Ethereum (inside the smart contract). Learnt a lot while building this, currenty working on encryption.",
    github: "https://github.com/yashkarthik/firechat",
    website: "https://firechat.yashkarthik.xyz",
  },
  {
    title: "Casterscan",
    description: "A collaboration between me and dylansteck.com. It's a sort of block explorer for Farcaster. Recently: integration with nf.td.",
    github: "https://github.com/dylsteck/casterscan",
    website: "https://casterscan.com",
  },
  {
    title: "Scribble",
    description: "MS Paint + Stable Diffusion => art. An AI-powered whiteboard where you can draw rough sketches and use Stable Diffusion to generate art out of them. Built with Next.js, embeds Excalidraw.com for whiteboard, and Stable Diffusion ControlNet for guiding the image output. (800+ generations in 5 days)",
    github: "https://github.com/YashKarthik/scribble",
    website: "https://scribble.yashkarthik.xyz",
  },
  {
    title: "Enscan",
    description: "The Ethereum Name Service (ENS) is an on-chain Linktree. But almost none of that data can be queried with complex conditions, like in SQL. Enscan is an indexer that crawls the ENS contracts and indexes the data into a database, enabling developers to interact with the data using SQL. (v1 out, building v2)",
    github: "https://github.com/YashKarthik/enscan",
    website: "https://enscan.yashkarthik.xyz"
  },
  {
    title: "Farcaster Directory",
    description: "A directory of Farcaster accounts and their respective Twitter accounts, making it easier to find your Twitter friends on Farcaster.",
    github: "https://github.com/YashKarthik/farcaster-directory",
    website: "https://directory.yashkarthik.xyz",
  },
  {
    title: "pg-scraper",
    description: "A simple program that generates a scraped RSS feed of Paul Graham's essays. My first app in Go; it was the perfect project to explore Go's concurrency model. It's deployed as a serverless function that generates the feed everytime a new request comes in.",
    github: "https://github.com/YashKarthik/pg-scraper",
    website: "https://yashkarthik.xyz/api/pg-feed",
  },
  {
    title: "Damn Vulnerable DeFi",
    description: "Solutions to the Damn Vulnerable DeFi CTF challenge.",
    github: "https://github.com/YashKarthik/damn-vulnerable-defi-solutions",
  },
  {
    title: "Skimmr",
    description: "A Chrome extension that uses OpenAI's GPT-3 to summarize and explain articles, helping you read articles faster.",
    github: "https://github.com/YashKarthik/skimmr",
    website: "https://skimmr.xyz"
  },
  {
    title: "Ethernaut CTF",
    description: "Solutions to the Ethernaut CTF challenge.",
    github: "https://github.com/YashKarthik/ethernaut-solutions",
  },
  {
    title: "Breathe",
    description: "A web app that sends you alerts when the pollution in your city reaches dangerous level.s",
    github: "https://github.com/YashKarthik/breathe",
  },
  {
    title: "Screenshot Essays",
    description: "A Farcaster \"client\" to read the best screenshot essays posted there.",
    github: "https://github.com/YashKarthik/screenshot-essay-caster",
    website: "https://screenshot-essay-caster.vercel.app/"
  },
  {
    title: "Simple NFT",
    description: "A beginner NFT project built using Solidity and the Brownie framework.",
    github: "https://github.com/YashKarthik/nft-using-mix",
  },
  {
    title: "Friendcaster",
    description: "A web app to visualize your Farcaster interaction circle.",
    github: "https://github.com/YashKarthik/friendcaster",
  }
];
