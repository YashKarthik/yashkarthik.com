type Project = {
  title: string;
  short_desc: string;
  long_desc: string[];
  github?: string;
  website?: string;
  images?: string[];
  videos?: string[];
}

export const projects: Project[] = [
  {
    title: "12V -> 180V Boost Convertor",
    short_desc: "hv!",
    long_desc: [
      "12V to 180V, 50mA boost convertor prototype to light up Soviet era nixie tubes with IN-12 tube pinout.",
    ],
    github: "https://github.com/YashKarthik/bifrost",
    images: ["/blog-assets/nixie-hvdc-pcb.png", "/blog-assets/nixie-hvdc-3d-top.png"]
  },
  {
    title: "Bifrost",
    short_desc: "first time high speed!",
    long_desc: [
      "USB-C to DisplaPort dongle from scratch.",
    ],
    github: "https://github.com/YashKarthik/bifrost",
    images: ["/blog-assets/dongle-pcb.png", "/blog-assets/dongle-pcb-3d.png"]
  },
  {
    title: "Where is my ION??",
    short_desc: "please use all doors",
    long_desc: [
      "A live transit map for the Region of Waterloo, on an PCB!",
    ],
    github: "https://github.com/YashKarthik/where_is_my_ion",
    images: ["/blog-assets/ion-pcb.png", "/blog-assets/ion-pcb-3d-full.png", "/blog-assets/ion-pcb-3d-uw.png"]
  },
  {
    title: "ykmalloc",
    short_desc: "y(ash)k(arthik's)malloc implementation",
    long_desc: [
      "basic impl of malloc (using sbrk) and free with basic block coalescing.",
    ],
    github: "https://github.com/YashKarthik/ykmalloc",
    images: ["/blog-assets/ykmalloc.png"]
  },
  {
    title: "Lily58",
    short_desc: "thock thock",
    long_desc: [
      "Built a split keyboard. JWK T1 tactiles, nice!nano controllers.",
    ],
    github: "https://github.com/YashKarthik/lily58-zmk",
    images: ["/blog-assets/lily58-complete.jpg", "/blog-assets/lily58-switches.jpg", "/blog-assets/lily58-solder.jpg"]
  },
  {
    title: "Icecube",
    short_desc: "matmul accelerator",
    long_desc: [
      "3x3 matrix multiplication (uint8) on iCE40UP5K FPGA. Consumes ascii characters over uart.",
    ],
    videos: ["/blog-assets/blinker.mp4"],
    github: "https://github.com/YashKarthik/icecube",
  },
  {
    title: "Aldis",
    short_desc: "blink blink",
    long_desc: [
      "Morse code blinker on iCE40UP5K FPGA. Consumes ascii characters over uart.",
    ],
    videos: ["/blog-assets/blinker.mp4"],
    github: "https://github.com/YashKarthik/uart-icesugar",
  },
  {
    title: "UART on FPGA",
    short_desc: "bit bit",
    long_desc: [
      "Implemented uart on ice40 fpga. Used in my morse code blinker.",
    ],
    github: "https://github.com/YashKarthik/morse",
    website: "https://x.com/_yashkarthik/status/1814555594851766448",
    images: ["/blog-assets/fpga.jpeg"]
  },
  {
    title: "Breadboard ALU",
    short_desc: "flip flop flip flop",
    long_desc: [
      "It can do addition and subtraction!",
    ],
    website: "https://youtu.be/xQFHZhmiJuA?t=6276",
    images: ["/blog-assets/alu.jpg", "/blog-assets/osc.jpg"]
  },
  {
    title: "Tinyrenderer",
    short_desc: "On my reinventing the wheel arc.",
    long_desc: [
      "I saw two game devs arguing about 3D rendering on Twitter - I didn't understand anything. Call it fate; while scrolling YT shorts I saw a short video explaining the basics of raytracing.",
      "I still don't understand how any of this works, so that's why I'm building this (a rasterization engine) to learn how 3D rendering works."
    ],
    github: "https://github.com/yashkarthik/tinyrenderer",
    images: ["/blog-assets/tinyrenderer-3.png", "/blog-assets/tinyrenderer-2.png", "/blog-assets/tinyrenderer-1.png", "/blog-assets/tinyrenderer-0.jpg"]
  },
  {
    title: "Adunari",
    short_desc: "C is a high level language",
    long_desc: [ "An assembler for the Hack platform (nand2tetris)." ],
    github: "https://github.com/YashKarthik/adunari",
  },
  {
    title: "Curly",
    short_desc: "A minimal clone of cURL using Sockets.",
    long_desc: [ "I learn languages best when I use them. After reading the C Bible and doing AoC over the summer I decided rebuild what the OGs at Bell made. I've cloned cURL, cat, tree.",],
    github: "https://github.com/yashkarthik/curly",
    images: ["/blog-assets/curly.png"]
  },
  {
    title: "ECE.engineering",
    short_desc: "fire domain name, no?",
    long_desc: [
      "A webring for ECE students at Waterloo. Figma wizard.",
    ],
    website: "https://ece.engineering",
    github: "https://github.com/roozbehali/ece_webring",
    images: ["/blog-assets/ece.png"]
  },
  {
    title: "Resonant.love",
    short_desc: "Friend filtered matchmaking.",
    long_desc: [
      "Your friends fill out a form for you and we use GPT-4 magic to match people!",
    ],
    website: "https://twitter.com/ansonyuu/status/1755307905383879133",
    github: "",
    images: ["/blog-assets/resonant-banner.jpeg"]
  },
  {
    title: "Tiviem",
    short_desc: "To understand how the wheel works, you must first reinvent it.",
    long_desc: [
      "(/ti:vi:em/) Tiviem is a rudimentary implementation of the Ethereum Virtual Machine in Typescript. The EVM is a stack-based computer responsible for executing the smart contracts on Ethereum.",
      "It was a crazy, random idea out of nowhere. I had been writing a lot of toy contrats in Yul (Ethereum assembly) to expose myself to Ethereum's internals when I the idea struck me. It was ambitious, wayy above my skill level that time, but also really, really interesting.",
      "I just had to build it!"
    ],
    github: "https://github.com/yashkarthik/tiviem",
    images: ["/blog-assets/tiviem-0.jpg", "/blog-assets/tiviem-1.png", "/blog-assets/tiviem-2.png"]
  },
  {
    title: "Firechat",
    short_desc: "A proof of concept for using smart contract storage as a database.",
    long_desc: [
      "Ethereum smart contracts have a persistent storage location. So why not treat contract storage as a DB and store messages in the smart contract iself!",
      "Reading and writing to contract storage is *really* expensive, hence why it's just a proof of concept.",
    ],
    github: "https://github.com/yashkarthik/firechat",
    website: "https://firechat.yashkarthik.xyz",
    images: ["./blog-assets/firechat-0.png"]
  },
  {
    title: "Scribble",
    short_desc: "MS Paint + stable diffusion",
    long_desc: [
      "Draw rough sketches on an digital whiteboard and use Stable Diffusion to generate art out of them",
      "Built with Next.js, embeds Excalidraw as a React component for the whiteboard, and uses Stable Diffusion ControlNet on Replicate for generating the image (800+ generations in 5 days).",
    ],
    github: "https://github.com/YashKarthik/scribble",
    website: "https://scribble.yashkarthik.xyz",
    images: ["./blog-assets/scribble-0.png"]
  },
  {
    title: "Enscan",
    short_desc: "An indexer for ENS Contracts",
    long_desc: [
      "The Ethereum Name Service (ENS) is an on-chain Linktree. But almost none of that data can be queried with complex conditions, like in SQL. Enscan is an indexer that crawls the ENS contracts and indexes the data into a database, enabling developers to interact with the ENS data using SQL.",
    ],
    github: "https://github.com/YashKarthik/enscan",
    website: "https://enscan.yashkarthik.xyz"
  },
  {
    title: "Casterscan",
    short_desc: "A blockexplorer for Farcaster",
    long_desc: [ "A collaboration between me and dylansteck.com. It's a sort of block explorer for Farcaster. Recently: integration with nf.td.",],
    github: "https://github.com/dylsteck/casterscan",
    website: "https://casterscan.com",
  },
  {
    title: "Farcaster Directory",
    short_desc: "Farcaster <-> Twitter",
    long_desc: [ "A directory of Farcaster accounts and their respective Twitter accounts, making it easier to find your Twitter friends on Farcaster.",],
    github: "https://github.com/YashKarthik/farcaster-directory",
    website: "https://directory.yashkarthik.xyz",
  },
  {
    title: "pg-scraper",
    short_desc: "Really simple syndication, is really simple.",
    long_desc: [ "A simple program that generates a scraped RSS feed of Paul Graham's essays. My first project in Go; it was the perfect project to explore Go's concurrency model. It's deployed as a serverless function that generates the feed everytime a new request comes in.",],
    github: "https://github.com/YashKarthik/pg-scraper",
    website: "https://yashkarthik.xyz/api/pg-feed",
  },
  {
    title: "Skimmr",
    short_desc: "Browser extensions are hard to build.",
    long_desc: [ "A Chrome extension that uses OpenAI's GPT-3 to summarize and explain articles, helping you read articles faster.",],
    github: "https://github.com/YashKarthik/skimmr",
    website: "https://skimmr.xyz"
  },
  {
    title: "Ethereum CTFs",
    short_desc: "Capture the Flag.",
    long_desc: [ "Solutions to the Ethernaut and Damn Vulnerable Defi challenges.",],
    github: "https://github.com/YashKarthik/ethernaut-solutions",
  },
  {
    title: "Breathe",
    short_desc: "Yet another abandoned project.",
    long_desc: [ "A web app that sends you alerts when the pollution in your city reaches dangerous level.s",],
    github: "https://github.com/YashKarthik/breathe",
  },
  {
    title: "Screenshot Essays",
    short_desc: "Can't believe this is still live after so many API changes.",
    long_desc: [ "A Farcaster \"client\" to read the best screenshot essays posted there.",],
    github: "https://github.com/YashKarthik/screenshot-essay-caster",
    website: "https://screenshot-essay-caster.vercel.app/"
  },
  {
    title: "Simple NFT",
    short_desc: "Right-click and save go brrr.",
    long_desc: [ "A beginner NFT project built using Solidity and the Brownie framework.",],
    github: "https://github.com/YashKarthik/nft-using-mix",
  },
  {
    title: "Friendcaster",
    short_desc: "Friends on Farcaster.",
    long_desc: [ "A web app to visualize your Farcaster interaction circle.",],
    github: "https://github.com/YashKarthik/friendcaster",
  }
];
