"use client";

import { motion } from "framer-motion";
import functionalitiesData from "../lib/functionalitiesData";
import FunctionalityCard from "./FunctionalityCard";
import { slideIn } from "../utils/animations";

const Functionalities: React.FC = () => {
  return (
    <motion.section
      className="relative mx-auto my-8 max-w-7xl rounded-lg border-t-2 bg-base-300 bg-opacity-10 p-4 shadow-lg shadow-primary"
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-3">
        {functionalitiesData.slice(0, 3).map((item, index) => (
          <FunctionalityCard key={index} item={item} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Functionalities;
