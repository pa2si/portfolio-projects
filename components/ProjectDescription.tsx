import { MotionDiv } from "@/lib/MotionComponents";
import { ProjectType } from "@/lib/types";
22;
import Image from "next/image";
import { useState } from "react";

const ProjectDescription = ({ project }: { project: ProjectType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg mt-0 rounded-lg bg-gray-100 p-4 shadow-lg">
      <div
        className={`hidden items-center gap-3 lg:block xl:flex ${project.category ? "mb-1 lg:mb-4" : "mb-4"}`}
      >
        <div className="flex gap-3 xl:grid xl:grid-flow-col">
          <h2 className="card-title text-2xl xl:order-2">{project.title}</h2>
          <Image
            src={project.icon}
            width={40}
            height={40}
            alt={project.title}
            className="rounded-full p-1 ring-1 ring-primary drop-shadow-md xl:order-1"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
        {project.category && (
          <h3 className="font-mono text-lg xl:mt-[2px]">
            [{project.category}]
          </h3>
        )}
      </div>
      <MotionDiv
        initial={false}
        animate={{ height: expanded ? "auto" : "90px" }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden font-mono leading-8 ${
          expanded ? "" : "line-clamp-3 lg:line-clamp-none"
        }`}
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></MotionDiv>
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
