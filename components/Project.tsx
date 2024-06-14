"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ProjectType, StackType } from "@/lib/types";
import { RiStackFill } from "react-icons/ri";

import { IoMdText } from "react-icons/io";
import { stackData } from "../lib/projectData";
import ProjectDescription from "./ProjectDescription";
import { slideIn } from "../utils/animations";

const LayoutExample = ({ project }: { project: ProjectType }) => {
  const ref = useRef<HTMLDivElement>(null);

  const projectStacks: StackType[] = project.stackNames.map(
    (name) => stackData.find((stack) => stack.name === name) as StackType,
  );

  return (
    <motion.div
      ref={ref}
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:gap-8"
    >
      <div className="card bordered relative shadow-lg transition-all duration-300 ease-in-out md:hover:scale-105">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
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
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out md:hover:opacity-100">
              <span className="text-lg text-white">Click to view website</span>
            </div>
          </figure>
        </a>
        {/* card */}
        <div className="bg card-body mx-auto flex flex-col">
          <div className="block lg:hidden">
            <h2 className="card-title text-2xl">{project.title}</h2>
            {project.category && (
              <h3 className="mb-4 font-mono text-lg">[{project.category}]</h3>
            )}
          </div>
          {projectStacks.length > 0 && (
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="text-4xl">
                <RiStackFill />
              </div>

              {/* stack section */}
              <div className="flex flex-wrap gap-3 rounded-lg p-3 md:gap-4">
                {projectStacks.map((stack) => (
                  /* image */
                  <figure key={stack.name} className="flex items-center">
                    <i>
                      <Image
                        src={stack.image}
                        alt={stack.name}
                        width={25}
                        height={25}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </i>
                    <figcaption className="ml-1">{stack.name}</figcaption>
                  </figure>
                ))}
              </div>
              {/* description */}
              <div className="flex md:hidden">
                <IoMdText />
                <ProjectDescription project={project} />
              </div>
            </div>
          )}
          {/* view Website button in mobile view */}
          <div className="card-actions mt-6 justify-center md:hidden">
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
      {/* description */}
      <div className="hidden md:flex">
        <ProjectDescription project={project} />
      </div>
    </motion.div>
  );
};

export default LayoutExample;
