import React from "react";
import html5 from "../assets/html-svg.svg";
import css3 from "../assets/css-svg.svg";
import javascript from "../assets/javascript-svg.svg";
import reactjs from "../assets/reactjs-svg.svg";
import sass from "../assets/sass-svg.svg";
import tailwind from "../assets/tailwind-svg.svg";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden"
    >
      <div className="bg-gray-200 p-10 text-gray-regular">
        <main className="flex flex-col md-flex-row max-w-screen-xl mx-auto px-4 py-10 bg-white rounded-xl shadow-md md:border-l-4 md:border-blue-regular">
          <div className="flex flex-col md:flex-row md:gap-14 border-b border-gray-300 pb-8">
            <h2 className="font-semibold text-2xl text-start mb-2 whitespace-nowrap">
              Sobre mi
            </h2>
            <div className="flex flex-col gap-2 md:text-xl">
              <p>
                Hace 2 años estudio de manera autodidacta para especializarme
                como desarrolladora web Frontend. Apasionada por la creación e
                implementación de diseños, desde un enfoque estético y
                funcional.
              </p>
              <p>
                Soy responsable y colaborativa, motivada a solucionar los
                problemas que se puedan presentar, adquiriendo nuevas
                habilidades y capacitándome constantemente para fortalecer mi
                trabajo.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 md:text-xl">
            <h2 className="font-semibold text-2xl text-start mb-2">
              Habilidades
            </h2>
            <div className="flex gap-4 flex-wrap items-center">
              <div className="flex gap-1">
                <img src={html5} alt="html" className="w-6 h-6" />
                <span>HTML5</span>
              </div>
              <div className="flex gap-1">
                <img src={css3} alt="html" className="w-6 h-6 " />
                <span>CSS3</span>
              </div>
              <div className="flex gap-1">
                <img src={javascript} alt="html" className="w-6 h-6 " />
                <span>Javascript</span>
              </div>
              <div className="flex gap-1">
                <img src={reactjs} alt="html" className="w-6 h-6 " />
                <span>React.js</span>
              </div>
              <div className="flex gap-1">
                <img src={tailwind} alt="html" className="w-6 h-6 " />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Aboutme;
