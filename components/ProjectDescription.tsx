import { ProjectType } from "@/lib/types";
import { useState } from "react";

const ProjectDescription = ({ project }: { project: ProjectType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg mt-0 rounded-lg bg-gray-100 p-4 shadow-lg">
      <div
        className={`hidden items-center gap-3 lg:block xl:flex ${project.category ? "mb-1 lg:mb-4" : "mb-4"}`}
      >
        <h2 className={`card-title text-2xl`}>{project.title}</h2>
        {project.category && (
          <h3 className="font-mono text-lg xl:mt-[2px]">
            [{project.category}]
          </h3>
        )}
      </div>
      <p
        className={`font-mono leading-8 ${
          expanded ? "" : "line-clamp-3 lg:line-clamp-none"
        }`}
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></p>
      {project.description.length > 100 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 block text-blue-500 underline lg:hidden"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};
export default ProjectDescription;
