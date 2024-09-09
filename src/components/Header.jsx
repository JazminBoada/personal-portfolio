import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LuUser2,
  LuLayoutDashboard,
  LuRocket,
  LuText,
  LuX,
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else document.querySelector("html").classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    if (targetSection && location.pathname === "/") {
      scrollToSection(targetSection);
      setTargetSection(null);
    }
  }, [location.pathname, targetSection]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (section) => {
    if (window.location.pathname !== "/") {
      setTargetSection(section);
      navigate("/");
    } else {
      scrollToSection(section);
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 text-gray-regular"
    >
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 text-gray-regular dark:bg-dark-one dark:text-white">
        <div className="relative">
          {/* Overlay borroso */}
          <div
            className={`fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 dark:bg-dark-one dark:bg-opacity-50 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          ></div>

          <div className="container mx-auto md:p-4 p-2 relative z-50">
            <div className="flex flex-row md:justify-between items-center">
              <div
                className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer"
                onClick={() => handleNavigation("Inicio")}
              >
                <span>Jazmin Boada</span>
              </div>

              <ul className="hidden md:flex flex-col md:flex-row space-x-4">
                <li
                  className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer"
                  onClick={() => handleNavigation("sobremi")}
                >
                  <span className="flex items-center">
                    <LuUser2 className="w-5 h-5 mr-2" />
                    Sobre mi
                  </span>
                </li>
                <li
                  className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer"
                  onClick={() => handleNavigation("habilidades")}
                >
                  <span className="flex items-center">
                    <LuRocket className="w-5 h-5 mr-2" />
                    Habilidades
                  </span>
                </li>
                <li
                  className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer"
                  onClick={() => handleNavigation("proyectos")}
                >
                  <span className="flex items-center">
                    <LuLayoutDashboard className="w-5 h-5 mr-2" />
                    Proyectos
                  </span>
                </li>
              </ul>

              <div className="md:hidden ml-auto text-2xl relative">
                <button
                  onClick={toggleMenu}
                  className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300"
                >
                  <span
                    className={`absolute transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <LuText />
                  </span>
                  <span
                    className={`absolute transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <LuX />
                  </span>
                </button>
              </div>

              {/* Boton de dark */}
              <div className="pt-2">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                    onClick={handleChangeTheme}
                  />

                  {/* Icono del Sol */}
                  <svg
                    className="swap-off h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* Icono de la Luna */}
                  <svg
                    className="swap-on h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <section
                className={`md:hidden fixed top-0 right-0 mt-16 w-full bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out dark:bg-dark-one ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ zIndex: 50 }}
              >
                <ul className="flex flex-col">
                  <li
                    className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300"
                    onClick={() => handleNavigation("sobremi")}
                  >
                    <span className="flex items-center space-x-2 ">
                      <LuUser2 className="w-5 h-5" />
                      <span>Sobre mi</span>
                    </span>
                  </li>
                  <li
                    className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300"
                    onClick={() => handleNavigation("habilidades")}
                  >
                    <span className="flex items-center space-x-2">
                      <LuRocket className="w-5 h-5" />
                      <span>Habilidades</span>
                    </span>
                  </li>
                  <li
                    className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300"
                    onClick={() => handleNavigation("proyectos")}
                  >
                    <span className="flex items-center space-x-2">
                      <LuLayoutDashboard className="w-5 h-5" />
                      <span>Proyectos</span>
                    </span>
                  </li>
                </ul>
                <div className="flex flex-row items-center justify-center gap-8 px-8 pt-4 pb-8 text-white">
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
              </section>
            </div>
          </div>
        </div>
      </header>
    </motion.header>
  );
};

export default Header;
