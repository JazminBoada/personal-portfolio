import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import handShake from "../assets/handshake.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="background absolute inset-0 z-0">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <main className="max-w-screen-xl mx-auto px-4 md:py-10 py-20 text-gray-regular flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between relative z-10">
          <section className="mt-10 space-y-5 flex flex-col justify-center items-center md:items-start md:text-left">
            <h2 className="flex flex-row items-center md:text-xl sm:text-lg">
              ¡Hola! Mi nombre es Jazmín
              <img src={handShake} className="ml-2 mb-1 w-6 h-6" />
            </h2>
            <h1 className="md:text-8xl ml-[-6px] text-6xl font-semibold text-center md:text-left">
              <span className="text-blue-regular">Front</span>end <br />
              Developer
            </h1>
            <p className="md:text-2xl text-xl text-center md:text-left">
              Soy desarrolladora web Frontend, con residencia{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              en Buenos Aires, Argentina.
            </p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4 md:justify-start">
              <Link to="/contact-form">
                <button className="border border-blue-regular p-2 rounded-full text-blue-regular shadow-md hover:shadow-md hover:shadow-blue-regular transform transition-all duration-300">
                  Contáctame
                </button>
              </Link>

              <a
                href="/cv-jazmin-boada.pdf"
                download="CV_Jazmin_Boada.pdf"
                className="flex flex-row border border-gray-regular p-2 rounded-full text-gray-regular shadow-md hover:shadow-md hover:shadow-gray-regular transform transition-all duration-300"
              >
                Descargar CV
                <LuArrowDownToLine className="ml-2 w-5 h-5" />
              </a>
            </div>
          </section>

          <div className="relative flex flex-col items-center gap-4 md:mt-14 md:items-start">
            <img
              src={profileImage}
              alt="profile"
              className="lg:w-72 lg:h-72 md:w-56 md:h-56 w-40 h-40"
            />
            <div className="hidden md:flex flex-row items-center justify-center gap-8 p-8 text-white">
              <a
                href="https://github.com/JazminBoada"
                target="_black"
                rel="noopener noreferrer"
                className="bg-gray-regular p-2 rounded-full hover:bg-blue-regular hover:scale-110 transform transition-all duration-300 shadow-lg"
              >
                <LuGithub size={27} />
              </a>
              <a
                href="https://www.linkedin.com/in/jazmin-boada-b99b21306/"
                target="_black"
                rel="noopener noreferrer"
                className="bg-gray-regular p-2 rounded-full hover:bg-blue-regular hover:scale-110 transform transition-all duration-300 shadow-lg"
              >
                <LuLinkedin size={27} />
              </a>
              <a
                href="https://www.linkedin.com/in/jazmin-boada-b99b21306/"
                target="_black"
                rel="noopener noreferrer"
                className="bg-gray-regular p-2 rounded-full hover:bg-blue-regular hover:scale-110 transform transition-all duration-300 shadow-lg"
              >
                <LuMail size={27} />
              </a>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Hero;
