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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (targetSection && location.pathname === "/") {
      scrollToSection(targetSection);
      setTargetSection(null);
    }
  }, [location.pathname, targetSection]);

  useEffect(() => {
    // Cierra el menú cuando la ubicación cambia
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (section) => {
    if (window.location.pathname !== "/") {
      setTargetSection(section);
      navigate("/");
    } else {
      scrollToSection(section);
      setIsMenuOpen(false); // Cierra el menú después de la navegación
    }
  };

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 text-gray-regular">
      <div className="relative">
        {/* Overlay borroso */}
        <div
          className={`fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
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

            <section
              className={`md:hidden fixed top-0 right-0 mt-16 w-full bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${
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
  );
};

export default Header;
