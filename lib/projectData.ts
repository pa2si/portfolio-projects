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
      "Development of a web app to overview salsa events with monthly, weekly, and daily views. Registered users can add, update, and delete their own events, visible to all visitors. Authorization is handled via the Clerk library. Utilizes Next.js server actions for backend communication. Features a complex form with frontend and backend validation that sends data to a Prisma database. Incorporates the Google Maps JavaScript API for auto-complete and Edge Store for image hosting and upload with backend validation. The web app is scalable, and the design is currently practical. [Ongoing development!]",
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
      "Project for a client in Berlin, Germany: Development of a customised, SEO-optimised website for the presentation of events. Unique, playful design according to the client's specifications. Use of Storyblok as CMS to manage image and text content. Multilingual support in English, German and Spanish.",
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
      "Development of a responsive website for showcasing daily use products. Utilizes daisyUI components for the footer, menus, and theme settings. The UI is specifically designed to facilitate ease of use for older generations, enabling easy product viewing and direct contact with the seller via mobile phones",
  },

  {
    title: "erdkugel GmbH",
    image: "/erdkugel.jpg",
    url: "https://www.erdkugel.net/",
    icon: "/erdkugel-icon.webp",
    stackNames: ["Next.js", "Javascript", "CSS", "Tailwind", "Framer-Motion"],
    description:
      "Project for a company founder: Development of a contact page with Framer Motion for simple animations. Due to a lack of details on services and images, a minimalist technical stack was chosen. Instead of integrating Google Maps, a link to Google Maps was used to avoid cookies.",
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
