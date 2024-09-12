import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGithub, BsArrowUpRightSquareFill } from "react-icons/bs";

const Button = ({ title, icon }) => {
  return (
    <button className="flex items-center justify-center min-h-5 border border-blue-btn text-blue-btn rounded-full py-1 px-2 text-brown text-xs md:text-sm shadow-sm hover:bg-blue-btn hover:text-white transform transition-all duration-300 ">
      {icon && <span className="mr-1 text-lg">{icon}</span>}
      {title}
    </button>
  );
};

const ProjectsCards = ({
  image,
  title,
  buttons,
  text,
  appLink,
  sourceLink,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-screen-md mx-auto overflow-hidden mb-4 flex flex-col items-center bg-white p-4 drop-shadow-md rounded-md md:flex-row md:space-x-4 hover:drop-shadow-xl transform transition-all duration-300 dark:bg-dark-one dark:text-white"
    >
      <img className="w-96 md:w-72" src={image} alt={title} />
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl text-center pb-2">{title}</h2>
          <div className="flex flex-row items-center justify-center flex-wrap gap-2 pb-4">
            {buttons.map((button, index) => (
              <Button key={index} icon={button.icon} title={button.title} />
            ))}
          </div>
          <p className="text-justify">{text}</p>
        </div>
        <div className="flex ml-auto pt-2 gap-2">
          <a
            href={appLink}
            className="text-blue-btn underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-1 w-7 h-7 hover:text-gray-700 transform transition-all duration-300" />
          </a>

          <a
            href={sourceLink}
            className="text-blue-btn underline inline-flex items-center "
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsArrowUpRightSquareFill className="mr-1 w-7 h-7 hover:text-gray-700 transform transition-all duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCards;
