type Project = {
  title: string;
  description: string;
  github: string;
  website?: string
}

export const projects: Project[] = [
  {
    title: "Enscan",
    description: "The Ethereum Name Service (ENS) is an on-chain Linktree. But almost none of that data can be queried with complex conditions, like in SQL. Enscan is an indexer that crawls the ENS contracts and indexes the data into a database, enabling developers to interact with the data using SQL. (currently building)",
    github: "https://github.com/YashKarthik/enscan",
  },
  {
    title: "Farcaster Directory",
    description: "A directory of Farcaster accounts and their respective Twitter accounts, making it easier to find your Twitter friends on Farcaster.",
    github: "https://github.com/YashKarthik/farcaster-directory",
    website: "https://directory.yashkarthik.xyz",
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
