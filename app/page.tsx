import About from "../components/About";
import Hero from "../components/Hero";
import Intermediate from "../components/Intermediate";
import ReasonsToChooseMe from "../components/ReasonsToChooseMe";
import Functionalities from "../components/Functionalities";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { menuLinks } from "@/lib/navbarData";

export default function Home() {
  // Original menuLinks object destructuring
  const originalMenuLinks = menuLinks;

  // Preprocess to remove '#' from each ID in the menuLinks object
  const processedMenuLinks = Object.fromEntries(
    Object.entries(originalMenuLinks).map(([key, value]) => [
      key,
      value.replace("#", ""),
    ]),
  );

  // Destructure the processed menuLinks object to get the IDs without '#'
  const { reasonsToChooseMeId, projectsId, functionalitiesId, contactId } =
    processedMenuLinks;

  return (
    <main>
      <Hero />
      <About />
      <Intermediate text="Why give me work?" id={reasonsToChooseMeId} />
      <ReasonsToChooseMe />
      <Intermediate text="Explore some of my projects" id={projectsId} />
      <Projects />

      <Intermediate
        text="Discover general functionalities for web apps using React.js"
        id={functionalitiesId}
      />
      <Functionalities />

      <Intermediate text="Let's get in contact!" id={contactId} />
      <Contact />
    </main>
  );
}
