import React, { useState } from 'react';
import { skills } from './data';
import { motion } from 'framer-motion';

function Skills() {
  const [showAll, setShowAll] = useState(true);
  const initialDisplayCount = 4; // Change this to display more or less skills initially
  const displayedSkills = showAll ? skills : skills.slice(0, initialDisplayCount);

  // Animation variants for the skill cards
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  // Animation for the skill images on hover
  const imageVariants = {
    hover: { scale: 1.1, rotateX: 20, rotateY: 20 },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div layout className=" min-h-screen p-6 ">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center">
          <div className="border-t border-white flex-grow mr-3" />
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-white font-bold inline"
          >
            Skills
          </motion.h1>
          <div className="border-t border-white flex-grow ml-3" />
        </div>
      </div>
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedSkills.map((element) => (
          <motion.div 
            key={element.name}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center bg-default text-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            layout
          >
            <motion.img
              src={element.image}
              alt={element.name}
              className="h-20 w-20 object-contain mb-2"
              variants={imageVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-md text-whtie font-semibold">{element.name}</h2>
          </motion.div>
        ))}
      </motion.div>
      {skills.length > initialDisplayCount && (
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="text-default bg-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

export default Skills;
