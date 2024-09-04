import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,

  drupal,
  aem,
  salesforce,
  mailjet,
  wordpress,

  sprinbok,
  marceli,
  donfidelshop,

  alinamarasca,
  karlaacosta,
  linkeding,

  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Framework",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Mailjet",
    icon: mailjet,
  },
  
  {
    name: "WordPress",
    icon: wordpress,
  },
  
  {
    name: "Salesforce",
    icon: salesforce,
  },
  
  {
    name: "AEM",
    icon: aem,
  },
  
  {
    name: "Drupal",
    icon: drupal,
  },
];

const experiences = [
  {
    title: "Webmaster",
    company_name: "Springbok",
    company_url:"https://springbokagency.com/",
    icon: sprinbok,
    iconBg: "#383E56",
    date: "April 2023 - May 2024",
    points: [
      "Experience in CMS such as AEM, Drupal and wordpress",
      "Maintaining and updating websites and e-commerces shop of client websites",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Sales and Marketing Assistan, Graphic designer & Community Manager",
    company_name: "Laboratorios Marceli",
    company_url:"https://investinelsalvador.gob.sv/directorio/laboratorios-marceli/",
    icon: marceli,
    iconBg: "#E6DEDD",
    date: "March 2017 - September 2019",
    points: [
      "Sales report for salespersons, medical sales representatives and pharmacy pushers",
      "Tracking and reporting KIPs",
      "CRM planning and tracking",
      "Support to sales and marketing manager and CEO",
    ],
  },
  {
    title: "Customer Service Manager",
    company_name: "Don Fidel-Shop",
    company_url:"",
    icon: donfidelshop,
    iconBg: "#383E56",
    date: "January 2015 - February 2017",
    points: [
      "Store sales",
      "Customer service",
      "Give training & coaching to new collegue",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rosa and I met at Hack Your Future Belgium Web-development training. I know her as a dedicated , organized and thorough student. She is also incredibly likeable person, who immediately makes you feel like you have know each other.",
    name: "Alina Marasca",
    designation: "QA Engineer",
    company: "Tobania",
    company_url: "https://www.tobania.be",
    icon_alt:"LinedIn",
    icon_linkeding: linkeding,
    linkedin: "https://www.linkedin.com/in/alinamarasca/",
    image: alinamarasca,
  },
  {
    testimonial:
      "Rosa and I met at Hack Your Future Belgium Web-development training. I know her as a dedicated , organized and thorough student. She is also incredibly likeable person, who immediately makes you feel like you have know each other.",
    name: "Karla Acosta",
    designation: "Channel Coordinator",
    company: "C. Imberton, SA de CV",
    company_url: "https://www.cimberton.com/",
    icon_alt:"LinedIn",
    icon_linkeding: linkeding,
    linkedin: "https://www.linkedin.com/in/karlaacostamarketing/",
    image: karlaacosta,
  },
];

const projects = [
  {
    name: "Modern Web3",
    description:
      "A web application for UI and UX, built in React.js using functional components and emphasizing reusability. The project features a well-organized file and folder structure in React, with a strong foundation in CSS properties to master Flexbox and Grid layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/RosaMoran/modern-x",
  },
  {
    name: "CodeAI",
    description:
      "A web application built with both client-side and server-side components to create an AI chat using the ChatGPT API, where the user can ask questions and the AI provides a prompt in response.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/RosaMoran/codeAI",
  },
  {
    name: "HYF-Connect",
    description:
      "HYF Connect is a platform where all students, alumni, and coaches can gather together, continuing the HYF journey. In this platform, everyone can share their knowledge about coding world, share their profile for new opportunities to grow. Our mission is to connect, to share, and to grow together as one big HackYourFuture Community.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap v5.0",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/HYF-Connect/hyf-connect",
  },
];

export { services, technologies, experiences, testimonials, projects };
