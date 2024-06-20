"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardProps } from "@/lib/types";
import { staggeredAnimation } from "@/utils/animations";

const FunctionalityCard: React.FC<CardProps> = ({ item, index }) => {
  return (
    <motion.div
      className="card shadow-xl"
      variants={staggeredAnimation(0.2)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="transition-all duration-300 ease-in-out md:hover:scale-105">
        <figure className="relative h-[auto] w-full border-b-2 shadow-sm">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              priority
              className="h-full w-full rounded-t-lg object-cover"
            />
          </a>
        </figure>
        <div className="bg card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="font-mono">{item.description}</p>
        </div>
        <div className="card-actions mb-6 mt-4 justify-center md:hidden">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            View Website
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FunctionalityCard;
