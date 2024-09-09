import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="project-container"
    >
      <footer className="border-t-2 border-gray-200 text-center p-4 text-gray-regular dark:bg-dark-one dark:text-white dark:border-dark-two">
        <p>&copy; 2024 Jazmín Boada</p>
      </footer>
    </motion.section>
  );
};

export default Footer;
