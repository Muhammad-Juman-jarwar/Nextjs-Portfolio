"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      onClick={handleFlip}
      className="w-[450px] h-[280px] rounded-md cursor-pointer "
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full group relative h-full flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="w-full h-full rounded-md absolute inset-0 bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-20 justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full group relative h-full flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="w-full h-full rounded-md absolute inset-0 bg-black opacity-50" />
          <div className="flex flex-col gap-20 py-3 z-30">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
