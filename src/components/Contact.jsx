import React from "react";
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsGeoAltFill,
} from "react-icons/bs";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
      <div className="bg-white text-gray-regular">
        <main className="max-w-screen-md mx-auto px-4 py-10 flex flex-col items-center ">
          <h1 className="text-4xl font-semibold mb-10 text-center">Contacto</h1>

          <section className="w-full flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:space-x-16 pb-4 md:border-b border-blue-regular">
            <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <BsGeoAltFill className="w-6 h-6 mt-3 text-blue-regular md:self-start" />
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-semibold">Dirección</h2>
                <p>San Miguel, Buenos Aires</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <BsFillEnvelopeFill className="w-6 h-6 mt-3 text-blue-regular md:self-start" />
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-semibold">Correo Electrónico</h2>
                <p>boadajazmin@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <BsFillTelephoneFill className="w-6 h-6 mt-3 text-blue-regular md:self-start" />
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-semibold">Teléfono</h2>
                <p>+54 112255-2864</p>
              </div>
            </div>
          </section>
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
              href="https://github.com/JazminBoada"
              target="_black"
              rel="noopener noreferrer"
              className="bg-gray-regular p-2 rounded-full hover:bg-blue-regular hover:scale-110 transform transition-all duration-300 shadow-lg"
            >
              <LuMail size={27} />
            </a>
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default Contact;
