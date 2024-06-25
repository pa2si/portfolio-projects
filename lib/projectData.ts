import { ProjectType } from "@/lib/types";
import { StackType } from "@/lib/types";

export const projectsData: ProjectType[] = [
  {
    title: "Salsa Calendar",
    category: "Full-Stack Web App",
    image: "/salsa-calendar.jpg",
    url: "https://salsa-calendar-preview.vercel.app",
    icon: "/calendar-icon.png",
    stackNames: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer-Motion",
      "DaisyUi",
      "NextUI",
      "Zod",
      "React Query",
      "Prisma",
      "shadcn/ui",
      "Clerk",
      "Edge Store",
      "Google Maps Javascript API",
    ],
    description:
      "This web app provides an easy overview of salsa events with month, week, or day views. Registered and logged-in users can add, update, and delete their own events, which are visible to all visitors, whether signed in or not. Authorization is managed using the Clerk library. The project uses Next.js server actions for backend communication. A complex form, with both front-end and back-end validation, sends the form data to a Prisma database. The Google Maps JavaScript API is utilized for auto-complete to help fill out the form. For image hosting and uploading, with back-end validation, Edge Store is used. The web app is designed to scale easily. Please note that the current focus is not yet on design. [in ongoing development!]",
  },
  {
    title: "Tortuga Storytelling",
    category: "Full-Stack Website",
    image: "/tortuga.png",
    url: "https://tortugastorytelling.de/",
    icon: "/tortuga-storytelling-icon.jpg",
    stackNames: [
      "Next.js",
      "Javascript",
      "CSS",
      "Tailwind",
      "Framer-Motion",
      "Storyblock",
    ],
    description:
      "A custom website for a client in Berlin, Germany. The client envisioned a unique design to showcase both upcoming and past events. She desired a playful yet straightforward look that truly represented her personality. Despite exploring various modern design suggestions, we embraced her original concept, resulting in a final product that perfectly matches her vision. The website is SEO optimized and utilizes Storyblok as its CMS for managing image and text content. It supports multiple locales, offering content in English, German, and Spanish. ",
  },
  {
    title: "Mercancia",
    image: "/mercancia.jpg",
    url: "https://mercancia-nancy.vercel.app",
    icon: "/mercancia-icon.svg",
    stackNames: [
      "Next.js",
      "TypeScript",
      "Javascript",
      "CSS",
      "Tailwind",
      "Framer-Motion",
      "DaisyUi",
    ],
    description:
      "A project for a client in Colombia. The client needed an easy way to showcase products for sale. The target audience is primarily older individuals who are not very familiar with technology. The solution allows users to view products easily on their mobile phones and then directly contact the vendor to discuss further details. <br> It is responsive and uses daisyUI components such as Footer, Menus and theme settings. ",
  },

  {
    title: "erdkugel GmbH",
    image: "/erdkugel.jpg",
    url: "https://www.erdkugel.net/",
    icon: "/erdkugel-icon.webp",
    stackNames: ["Next.js", "Javascript", "CSS", "Tailwind", "Framer-Motion"],
    description:
      "A contact site for a client who is in the process of setting up their company. Detailed services, images, and additional information are still to come. The tech stack is straightforward, and Framer Motion is used for simple animations. To avoid the use of cookies, the client opted against a direct Google Maps integration, preferring instead to include a link to Google Maps. ",
  },
  {
    title: "Backroads Layout Example",
    image: "/backroads.jpg",
    url: "https://pa2si-backroads-app.netlify.app//",
    icon: "/backroads-icon.jpg",
    stackNames: ["React.js", "CSS", "Framer-Motion"],
    description:
      "This is a frontend project demonstrating a simple user interface for a travel company using React.js and Vite. The goal is to showcase basic UI elements and functionalities created with React components.",
  },
];

export const projectStack: StackType[] = [
  {
    name: "Next.js",
    image: "/nextjs-icon-svgrepo-com.svg",
  },
  {
    name: "TypeScript",
    image: "/typescript.svg",
  },
  {
    name: "Javascript",
    image: "/javascript-svgrepo-com.svg",
  },
  {
    name: "CSS",
    image: "/css-3-svgrepo-com.svg",
  },
  {
    name: "Tailwind",
    image: "/tailwind-svgrepo-com.svg",
  },
  {
    name: "Framer-Motion",
    image: "/framer-motion.svg",
  },
  {
    name: "Zod",
    image: "/zod.dark.svg",
  },
  {
    name: "DaisyUi",
    image: "/daisyUi-favicon-192.png",
  },
  {
    name: "React Query",
    image: "/react-query-seeklogo.svg",
  },
  {
    name: "Prisma",
    image: "/prisma.svg",
  },
  {
    name: "NextUI",
    image: "/nextUI.png",
  },
  {
    name: "shadcn/ui",
    image: "/shadcn.png",
  },
  {
    name: "Clerk",
    image: "/clerk.com.svg",
  },
  {
    name: "Storyblock",
    image: "/storyblok-icon-seeklogo.svg",
  },
  {
    name: "Edge Store",
    image: "/edgestore.png",
  },
  {
    name: "Google Maps Javascript API",
    image: "/Google__G__logo.svg.png",
  },
  {
    name: "React.js",
    image: "/react_logo.svg",
  },
];
