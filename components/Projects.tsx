import { projectsData } from "../lib/projectData";
import Project from "./Project";
import { MotionSection } from "@/lib/MotionComponents";
import { slideInY } from "@/utils/animations";

const LayoutExamples = () => {
  return (
    <section>
      <ul className="-mt-12">
        {projectsData.map((project, index) => (
          <li key={index}>
            <MotionSection
              className="mx-auto my-12 max-w-7xl rounded-lg border-t-2 bg-base-300 bg-opacity-10 shadow-lg shadow-primary sm:p-16"
              variants={slideInY}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Project project={project} />
            </MotionSection>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LayoutExamples;
