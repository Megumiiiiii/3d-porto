import {
  mobile,
  backend,
  creator,
  web,
  deinfra,
  nibiru,
  ar,
  cess,
  sarco,
  ctc,
  sarcophagus,
  tangle,
  findora,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Copy Paste Master",
    icon: web,
  },
  {
    title: "Rhythm Game Player",
    icon: mobile,
  },
  {
    title: "Validator",
    icon: backend,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Ar.io",
    icon: ar,
  },
  {
    name: "Sarcophagus",
    icon: sarco,
  },
  {
    name: "Cess",
    icon: cess,
  },
  {
    name: "Tangle",
    icon: tangle,
  },
  {
    name: "Creditcoin",
    icon: ctc,
  },
  {
    name: "Nibiru",
    icon: nibiru,
  },
  {
    name: "Deinfra",
    icon: deinfra,
  },
  
];

const experiences = [
  {
    title: "Moderator",
    company_name: "Findora",
    icon: findora,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Moderating global and local official community.",
      "Become a Validator for a year.",
      "Moderating 3 projects on Findora chain.",
    ],
  },
  {
    title: "Pharaoh",
    company_name: "Sarcophagus",
    icon: sarcophagus,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Moderating global and local official community.",
      "Operating Archeologist.",
    ],
  },
];

export { services, technologies, experiences };
