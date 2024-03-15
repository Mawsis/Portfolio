import evenUp from "@/assets/projects/event-up.png";
import confia from "@/assets/projects/confia.png";
import stockManager from "@/assets/projects/stock-manager.png";
import primeTime from "@/assets/projects/prime-time.png";

import linkedin from "@/assets/socials/linkedin.svg";
import github from "@/assets/socials/github.svg";
import twitter from "@/assets/socials/twitter.svg";

import upwork from "@/assets/logos/upwork.png";
import djezzyLogo from "@/assets/logos/djezzy-logo.svg";
import airAlgerie from "@/assets/logos/air-algerie-logo.jpg";

import microclub from "@/assets/community/MicroClub.jpg";
import innobyte from "@/assets/community/InnoByte.jpg";
import hackiwha from "@/assets/community/Hackiwha.jpg";

export const projects = [
  {
    title: "Event Up",
    link: "https://github.com/Mawsis/EventUp",
    thumbnail: evenUp,
  },
  {
    title: "Hotel Management System",
    link: "https://github.com/Mawsis/confia-intern",
    thumbnail: confia,
  },

  {
    title: "Stock Manageement System",
    link: "#",
    thumbnail: stockManager,
  },
  {
    title: "Prime Time",
    link: "https://github.com/Mawsis/Prime-Time",
    thumbnail: primeTime,
  },
];

export const navitems = [
  {
    link: "https://www.linkedin.com/in/wassim-khouas-b61157283/",
    icon: linkedin,
    alt: "linkedin",
  },
  {
    link: "https://github.com/Mawsis",
    icon: github,
    alt: "github",
  },
  {
    link: "https://www.twitter.com",
    icon: twitter,
    alt: "twitter",
  },
];

export const workData = [
  {
    logo: upwork,
    link: "https://www.upwork.com/freelancers/~01bb32460b5a741afa",
    post: "Full Stack Developer",
    company: "Upwork",
    responsabilites: [
      "Backend developement using PHP, Laravel, Django",
      "Frontend developement using React, Tailwind, Bootstrap",
    ],
  },
  {
    logo: airAlgerie,
    link: "https://airalgerie.dz",
    post: "Full Stack Developer Intern",
    company: "Air Algerie",
    responsabilites: [
      "Design and Development of an Application for Time Management and Personnel Attendance Tracking",
    ],
  },
  {
    logo: djezzyLogo,
    link: "https://www.djezzy.dz",
    post: "Data Analyst Intern",
    company: "Djezzy",
    responsabilites: [
      "Studied the concepts and principles of data warehousing, including data storage, extraction, transformation, and loading (ETL) processes, explored the fundamentals of business intelligence and its role in decision-making and data visualization.",
      "Prepared documentation and reports summarizing key learnings and insights from the internship experience.",
    ],
  },
];

export const technologies = [
  "PHP, Laravel",
  "SQL, SQLite, MySQL",
  "HTML, JS, TS",
  "React",
  "CSS (Tailwind, Bootstrap)",
  "Node, Express",
  "Docker",
  "GoLang (Learning)",
];

export const communityData = [
  {
    title: "Hackiwha Hackathon",
    date: "2nd Mar, 2023",
    description:
      "First place in the national Hackathon 'Hackiwha' organizeed by MicroClub about the medical field.",
    img: hackiwha,
  },
  {
    title: "InnoByte Hackathon",
    date: "16th Dec, 2023",
    description:
      "Participated in the InnoByte Hackathon organized by ByteCraft club Estin.",
    img: innobyte,
  },
  {
    title: "Micro Club Member",
    date: "Dec, 2022",
    description: "I am a member of the IT department in Micro Club of USTHB.",
    img: microclub,
  },
];
export const feedbacks = [
  {
    feedback: "Wassim  is an outstanding collaborator, with whom I have had the opportunity to work on multiple projects that were all executed seamlessly. Additionally, his expertise and professionalism have greatly contributed to our success.",
    name: "Younes Ferradji",
    post: "Full Stack Developer @KBnet, Web Developement Instructor",
  },
];
