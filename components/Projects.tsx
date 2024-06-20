import { projectsData } from "../lib/projectData";
import Project from "./Project";
import { MotionSection } from "@/lib/MotionComponents";
import { slideInY } from "@/utils/animations";

const LayoutExamples = () => {
  return (
    <MotionSection
      className="mx-auto my-8 max-w-7xl rounded-lg border-t-2 bg-base-300 bg-opacity-10 shadow-lg shadow-primary sm:p-16"
      variants={slideInY}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <ul className="flex flex-col gap-12">
        {projectsData.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </MotionSection>
  );
};
export default LayoutExamples;
