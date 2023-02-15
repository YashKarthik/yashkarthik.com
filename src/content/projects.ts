type Project = {
  title: string;
  description: string;
  github: string;
  website?: string
}

export const projects: Project[] = [
  {
    title: "Farcaster Directory",
    description: "A directory of Farcaster accounts, making it easier to find your Twitter friends on Farcaster.",
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
    description: "A Chrome extension that uses OpenAI's GPT-3 to help you read articles faster.",
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
    description: "Get alerts when the pollution in your area reaches dangerous levels.",
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
