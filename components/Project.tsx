"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ProjectType, StackType } from "@/lib/types";
import { RiStackFill } from "react-icons/ri";

import { IoMdText } from "react-icons/io";
import { projectStack } from "../lib/projectData";
import ProjectDescription from "./ProjectDescription";
import { slideInY, staggeredAnimation } from "../utils/animations";
import StackPreview from "./StackPreview";

const LayoutExample = ({ project }: { project: ProjectType }) => {
  const ref = useRef<HTMLDivElement>(null);

  const projectStacks: StackType[] = project.stackNames.map(
    (name) => projectStack.find((stack) => stack.name === name) as StackType,
  );

  return (
    <motion.div
      ref={ref}
      variants={slideInY}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:gap-8"
    >
      <div className="rounded-lg xl:hover:border-4 xl:hover:shadow-xl">
        <div className="bg card bordered relative shadow-lg transition-all duration-300 ease-in-out xl:hover:-rotate-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative lg:static"
          >
            <figure>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                priority
                className="rounded-t-md border-b-2 shadow-sm"
              />
              {/* div with hover text */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out xl:hover:opacity-100">
                <span className="text-2xl text-white">
                  Click to view website
                </span>
              </div>
            </figure>
          </a>
          {/* card mobile*/}
          <div className="bg card-body mx-auto flex flex-col">
            <div className="block lg:hidden">
              <div className="mb-2 flex gap-3">
                <Image
                  src={project.icon}
                  width={40}
                  height={40}
                  alt={project.title}
                  className="rounded-full p-[2px] ring-1 ring-primary drop-shadow-md"
                  style={{ height: "40px", width: "40px" }}
                />
                <h2 className="card-title text-2xl">{project.title}</h2>
              </div>
              {project.category && (
                <h3 className="mb-4 font-mono text-lg">[{project.category}]</h3>
              )}
            </div>
            {projectStack.length > 0 && (
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="text-4xl">
                  <RiStackFill />
                  <div className="h-2 w-full border-b-4 md:hidden" />
                </div>

                {/* stack section */}
                <ul className="flex flex-wrap gap-3 rounded-lg p-3 md:gap-4">
                  {projectStacks.map((stack, index) => (
                    <li key={index}>
                      <motion.div
                        variants={staggeredAnimation(0.1)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                      >
                        <StackPreview stack={stack} showCaption={true} />
                      </motion.div>
                    </li>
                  ))}
                </ul>
                {/* description */}
                <div className="flex rounded-lg border-t-2 drop-shadow-lg md:hidden">
                  <IoMdText />
                  <ProjectDescription project={project} />
                </div>
              </div>
            )}
            {/* view Website button in mobile view */}
            <div className="card-actions mt-6 justify-center xl:hidden">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="hidden md:flex">
        <ProjectDescription project={project} />
      </div>
    </motion.div>
  );
};

export default LayoutExample;
