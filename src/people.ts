type People = {
  name: string;
  uni: string;
  howIKnowThem: string;
  whatDoTheyDo: string;
  links: link[];
}

type link = {
  name: string;
  url: string;
}

export const people: People[] = [
  {
    name: "Rishi Kothari",
    uni: "UWaterloo SYDE '29",
    howIKnowThem: "hack club, twitter, uwstartups",
    whatDoTheyDo: "Startup things, working on Arterial (taking gap year) last I checked.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/rishiosaur"
      },
      {
        name: "Arterial",
        url: "https://www.arterial.design/"
      },
    ]
  },
  {
    name: "Ivan Yevenko",
    uni: "UWaterloo TRON '25",
    howIKnowThem: "twitter, uwstartups, ai-agent hackathon",
    whatDoTheyDo: "Builds cool stuff with LLMs.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/ivan_yevenko/"
      },
      {
        name: "globe.engineer",
        url: "https://globe.engineer/"
      },
    ]
  },
  {
    name: "Fayd",
    uni: "UWaterloo SE '28",
    howIKnowThem: "hack club",
    whatDoTheyDo: "Hackathons!!! Taking gap year to do them lol.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/faisal_sayed05"
      },
    ]
  },
  {
    name: "Sam Poder",
    uni: "UC Berkeley '27",
    howIKnowThem: "hack club",
    whatDoTheyDo: "Hackathons!!!",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/sam_poder"
      },
    ]
  },
  {
    name: "Sohil",
    uni: "UWaterloo SYDE '28",
    howIKnowThem: "hack club, uwstartups",
    whatDoTheyDo: "Startup: Nowadays; organizes events.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/SohilAthare"
      },
    ]
  },
  {
    name: "Matt Stokes",
    uni: "UWaterloo TRON '28",
    howIKnowThem: "twitter, sju, uwstartups",
    whatDoTheyDo: "Works on prosthetics; S4, so going on coop soon.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/ratherstoked"
      },
    ]
  },
  {
    name: "Brayden Petersen",
    uni: "UWaterloo SYDE",
    howIKnowThem: "uwstartups",
    whatDoTheyDo: "Loves walkable cities.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/b_ptrsn"
      },
    ]
  },
  {
    name: "Claire Wang",
    uni: "MIT EECS",
    howIKnowThem: "hack club",
    whatDoTheyDo: "Loves walkable cities.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/clairebookworm1"
      },
    ]
  },
  {
    name: "Rajan Agarwal",
    uni: "UWaterloo SE '28",
    howIKnowThem: "hack club, uwstartups",
    whatDoTheyDo: "builds lots of cool stuff",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/_rajanagarwal"
      },
    ]
  },
  {
    name: "Anson Yu",
    uni: "UWaterloo SYDE '25",
    howIKnowThem: "uwstartups, awesome website",
    whatDoTheyDo: "builds lots of cool stuff, recently: raytracinginoneweekend",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/ansonyuu/"
      },
      {
        name: "ansonyu.me",
        url: "https://ansonyu.me/"
      },
    ]
  },
  {
    name: "Calder White",
    uni: "UWaterloo CS '25",
    howIKnowThem: "Socratica",
    whatDoTheyDo: "building grt (quant), loves rust, prev built 3d engine, ",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/calder_white/"
      },
    ]
  },
  {
    name: "HudZah",
    uni: "UWaterloo Math '26",
    howIKnowThem: "Socratica, AI Agent Hackathon",
    whatDoTheyDo: "growing plants hydroponically, does ai stuff, does socratica stuff. Fun to talk to, asks great questions.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/hud_zah"
      },
      {
        name: "hudzah.com",
        url: "https://www.hudzah.com/"
      },
    ]
  },
  {
    name: "Julian Baxendale",
    uni: "UWaterloo Mech '28",
    howIKnowThem: "SJU",
    whatDoTheyDo: "\"aesthetic and functional design\", convinced him to come to Socratica. Asks good questions.",
    links: []
  },
  {
    name: "Rooz",
    uni: "UWaterloo CE '28",
    howIKnowThem: "my class",
    whatDoTheyDo: "does lots of fullstack, watonomous, hackathons",
    links: [
      {
        name: "roozbehali.com/",
        url: "https://roozbehali.com/"
      },
    ]
  },
  {
    name: "Steven Gong",
    uni: "UWaterloo SE '26",
    howIKnowThem: "Found on Twitter, Rooz said hella chill.",
    whatDoTheyDo: "super into robotics, watonomous, \"deep-tech\". Built, researched cool stuff. Ideas match.",
    links: [
      {
        name: "stevengong.co",
        url: "https://stevengong.co/",
      },
    ]
  },
  {
    name: "James Lin",
    uni: "McMaster CS (dropped out)",
    howIKnowThem: "Found on Twitter, Brian Machado said cool guy.",
    whatDoTheyDo: "Building a hacker house for biotech in SF.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/jlinbio",
      },
    ]
  },
  {
    name: "Brian Machado",
    uni: "UWaterloo TRON '25",
    howIKnowThem: "AI Agent hackathon.",
    whatDoTheyDo: "Building tools for engineering using LLMs, prev built robots n stuff. Cracked af.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/sincethestudy",
      },
    ]
  },
  {
    name: "Clayton Haight",
    uni: "UWaterloo TRON '24",
    howIKnowThem: "Through Brian+Ivan",
    whatDoTheyDo: "Robotics, building smth like Mobile Aloha (stanford) for their capstone project.",
    links: [
      {
        name: "clayhaight.com",
        url: "https://clayhaight.com/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/clayhaight",
      },
    ]
  },
  {
    name: "Ethan Childerhose",
    uni: "UWaterloo TRON '24",
    howIKnowThem: "Through Brian+Ivan+Clayton",
    whatDoTheyDo: "Robotics, building smth like Mobile Aloha (stanford) for their capstone project.",
    links: [
      {
        name: "twitter",
        url: "https://twitter.com/BigCrete",
      },
    ]
  },
  {
    name: "James Hill-Khurana",
    uni: "UWaterloo Phil+CogSci (dropped out)",
    howIKnowThem: "Twitter",
    whatDoTheyDo: "Working on SFCompute, been doing startupsn and interesting things for a while.",
    links: [
      {
        name: "jameshk.com",
        url: "https://jameshk.com/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/jtvhk",
      },
    ]
  },
  {
    name: "Sunnie Kapar",
    uni: "UWaterloo CE '28",
    howIKnowThem: "my class",
    whatDoTheyDo: "Superb designer, fun guy.",
    links: [
      {
        name: "sunniekapar.com",
        url: "https://www.sunniekapar.com/",
      }
    ]
  },
  {
    name: "Krish Patel",
    uni: "UWaterloo CE '28",
    howIKnowThem: "my class",
    whatDoTheyDo: "Fun+smart guy. Interesting vibes. Curious. Firmware.",
    links: [ ]
  },
  {
    name: "Guhan Iyer",
    uni: "UWaterloo CE '28",
    howIKnowThem: "my class",
    whatDoTheyDo: "Does Firmware. Builds stuff. Interesting guy.",
    links: [ ]
  },
  {
    name: "Rahul Kumar",
    uni: "UWaterloo CE '28",
    howIKnowThem: "my class",
    whatDoTheyDo: "Does lots of diff stuff; AI, Three.js, full-stack, competetive-prog god.",
    links: [ ]
  }
];
