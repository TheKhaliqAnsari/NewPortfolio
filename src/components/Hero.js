import React from "react";
import { motion } from "framer-motion";

function Hero() {
  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Bomb drop animation variant for the name
  const bombDropVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  // Animation variant for the image
  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Animation variant for the resume button
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.8, // Ensuring it appears after the text
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center min-h-screen  from-black to-khaliq-green-1000 mt-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="text-white max-w-lg ml-10 mt-20"
      >
        <motion.h4 variants={textVariants}>Hi, My name is</motion.h4>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={bombDropVariants}
          className="text-3xl md:text-5xl font-bold mt-2"
        >
          Khaliq Ansari
        </motion.h2>
        <motion.p variants={textVariants} className="mt-4 text-base md:text-lg">
          I have built many industry-grade projects from scratch and am armed
          with many technological skills useful for tech projects. Check out my
          projects below. :)
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/your_file_id/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          className="inline-block px-6 py-2 border-2 font-bold border-white bg-khaliq-green-1000 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-khaliq-green-1000 focus:ring-opacity-50 mt-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-khaliq-green-1000"
        >
          View Resume
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="mt-8 md:mt-0"
      >
        <img
          src="hero-image.svg"
          alt="Khaliq Ansari"
          className="w-full h-screen md:max-w-md lg:max-w-lg"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
