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
    title: "About me",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "feedbacks",
    title: "Feedbcks",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React Framework",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
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
      "Maintained and optimized the company's product page for both B2B and B2C markets, ensuring peak functionality and performance.",
      "Ensuring website functionality and performance by conducting regular maintenance and updates.",
      "Led the ideation, design, and implementation of new content, using analytics and data-driven insights to optimize conversion rates and enhance user experience.",
      "Experience with CMS such as AEM Cloud, Drupal, WordPress, and Shopify for high-profile clients, including Bridgestone, Daikin, Nissan, and Beko, ensuring seamless digital operations and content delivery.",
      "Collaborating with cross-functional teams to identify and implement new website features and functionality.",
      "Project management B2B and BC commerce platform and related specifications (rollouts and tests).",
      "Executes assignments with the use of web applications, scripts, and programming languages such as HTML, CSS and JavaScript.",
    ],
  },
  {
    title: "Sales and Marketing Assistant  Community Manager & Graphic designer",
    company_name: "Laboratorios Marceli",
    company_url:"https://investinelsalvador.gob.sv/directorio/laboratorios-marceli/",
    icon: marceli,
    iconBg: "#E6DEDD",
    date: "March 2017 - September 2019",
    points: [
      "Assist the sales director with partner and end customer sales activity.",
      "Following up sales and business development opportunities.",
      "Updating the Company CRM with all activities.",
      "Assist with the production of marketing materials and literature, such as website content, brochures, blog posts and press releases.",
      "Upload material to the website, social media pages and Intuitive SharePoint.",
      "Assisting other areas of the business such as pre-sales and technical services.",
    ],
  },
  {
    title: "Sales and customer service",
    company_name: "Don Fidel Shop",
    company_url:"",
    icon: donfidelshop,
    iconBg: "#383E56",
    date: "January 2015 - February 2017",
    points: [
      "Answers customers questions, resolves problems, and maintains customer satisfaction by providing problem-solving resources.",
      "Prepare reports and draw insights.",
      "Accomplishes customer service human resource objectives by recruiting, selecting, training, and coaching employees.",
      "Help the business be more customer-focused.",
      "Answers customer's questions about merchandise..",
      "Identify customer needs and recommend solutions.",
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
      "She is a person who is passionate about her goals and her work. Rosa is an excellent example of going the extra mile, responsible, and highly proactive.",
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
