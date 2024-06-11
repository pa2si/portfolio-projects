"use client";

import { useState } from "react";
import reasonsData from "@/lib/reasonsData";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ReasonsToChooseMe = () => {
  const [visibleReasonsCount, setVisibleReasonsCount] = useState(3);

  const showMoreReasons = () => {
    setVisibleReasonsCount((prevCount) => prevCount + 3);
  };

  const slideIn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const staggeredAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div className="p-4 sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Find here just a few reasons...
        </h2>
        <div className="space-y-6">
          {reasonsData.slice(0, visibleReasonsCount).map((reason, index) => (
            <motion.div
              key={index}
              className="bg card bordered shadow-sm shadow-primary"
              variants={index < 3 ? slideIn : staggeredAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="card-body p-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <h3 className="card-title">{reason.title}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[1rem] leading-7">
                        {reason.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
          <div className="flex justify-center">
            {visibleReasonsCount < reasonsData.length && (
              <button
                onClick={showMoreReasons}
                className="btn btn-primary mt-4"
              >
                More reasons
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToChooseMe;
