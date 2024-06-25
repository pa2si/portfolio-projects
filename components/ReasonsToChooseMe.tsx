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
import { staggeredAnimation } from "@/utils/animations";

const ReasonsToChooseMe = () => {
  const [visibleReasonsCount, setVisibleReasonsCount] = useState(3);

  const showMoreReasons = () => {
    setVisibleReasonsCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="mx-auto -mb-12 -mt-8 max-w-7xl">
      <div
        className="p-4 sm:p-8"
        style={{
          backgroundImage: "/coding-3-12.svg",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="mb-4 text-2xl font-semibold">Find here 10 reasons...</h2>
        <ul className="space-y-6">
          {reasonsData.slice(0, visibleReasonsCount).map((reason, index) => (
            <li key={index}>
              <motion.div
                className="bg card bordered shadow-sm shadow-primary"
                variants={staggeredAnimation(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="card-body px-2 py-1">
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
            </li>
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
        </ul>
      </div>
    </section>
  );
};

export default ReasonsToChooseMe;
