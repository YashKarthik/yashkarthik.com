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
    whatDoTheyDo: "builds lots of cool stuff",
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
];
