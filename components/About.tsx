"use client";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { MotionDiv } from "@/lib/MotionComponents";
import { aboutDescription } from "@/lib/aboutData";
import { aboutStack } from "@/lib/aboutData";
import StackPreview from "./StackPreview";
import { slideInY, staggeredAnimation } from "@/utils/animations";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="base-100 flex min-h-[35rem] items-center justify-center pt-12 lg:-mb-12"
      id="about"
    >
      <MotionDiv
        className="bg mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-lg shadow-xl md:grid-cols-2"
        variants={slideInY}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Image container */}
        <div className="relative h-[200px] w-full sm:h-[400px] md:h-auto">
          <Image
            src="/profile.jpg"
            alt="Profile image of Pascal Morgan"
            width={500}
            height={500}
            priority
            className="h-full w-full rounded-l-lg object-cover"
          />
        </div>

        {/* Text container */}
        <div className="space-y-6 p-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary">
              About Pascal Morgan
            </h2>
            <p className="mt-4 border-b pb-2 text-lg lg:border-none lg:pb-0">
              {aboutDescription.description}
            </p>
            <ul className="flex flex-wrap gap-3 rounded-lg p-3 md:gap-4">
              {aboutStack.map((stack, index) => (
                <li key={index}>
                  <motion.div
                    variants={staggeredAnimation(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <StackPreview stack={stack} showCaption={false} />
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="text-3xl text-primary">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default About;
