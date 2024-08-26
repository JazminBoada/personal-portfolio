import React from "react";

import { BsGithub, BsArrowUpRightSquareFill } from "react-icons/bs";

const ProjectsCards = ({
  image,
  title,
  subtitle,
  text,
  appLink,
  sourceLink,
}) => {
  return (
    <div className="w-full max-w-screen-md mx-auto overflow-hidden mb-4 flex flex-col items-center bg-white p-4 drop-shadow-md rounded-md md:flex-row md:space-x-4 hover:drop-shadow-xl transform transition-all duration-300">
      <img className="w-80" src={image} alt={title} />
      <div className="flex flex-col flex-grow justify-between w-full">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl text-center">{title}</h2>
          <h3 className="text-center">{subtitle}</h3>
          <p className="text-justify">{text}</p>
        </div>

        <div className="flex items-center justify-end pt-2 gap-2">
          <a
            href={appLink}
            className="text-gray-700 underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-1 w-7 h-7 hover:text-blue-regular transform transition-all duration-300" />
          </a>

          <a
            href={sourceLink}
            className="text-gray-700 underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsArrowUpRightSquareFill className="mr-1 w-7 h-7  hover:text-blue-regular transform transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
