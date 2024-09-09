import React from "react";
import ProjectsCards from "./layouts/ProjectsCards";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Projects = () => {
  return (
    <section className="project-container">
      <div className="bg-gray-200 p-10 text-gray-regular  bg-[linear-gradient(156deg,rgba(229,231,235,1)_41%,rgba(177,176,252,1)_100%)]  dark:bg-[linear-gradient(156deg,rgba(43,43,43,1)_41%,rgba(83,80,254,1)_100%)]">
        <main className="flex flex-col">
          <h1 className="sm:text-6xl text-4xl xl:pl-16 font-semibold mb-10 dark:text-white">
            Proyectos
          </h1>
          <section className="flex flex-wrap gap-4 justify-center">
            <ProjectsCards
              image={img1}
              title="Login Web App"
              subtitle="HTML5 | CSS3 | JAVASCRIPT"
              text="Diseño de formulario responsivo de registro, utilizando animaciones brindadas por CSS3 y Javascript para llevar a cabo el cambio de registro de inicio de sesión para registrarse por primera vez al sitio ficticio."
              sourceLink="https://login-design-app.netlify.app/"
              appLink="https://github.com/JazminBoada/login-page"
            />

            <ProjectsCards
              image={img3}
              title="Todo List App"
              subtitle="HTML5 | CSS3 | JAVASCRIPT"
              text="Creador de listas de tareas, se puede añadir, marcar y eliminar las tareas dadas, realizado con Javascript y el diseño por CSS3. "
              sourceLink="https://todolist-design-app.netlify.app//"
              appLink="https://github.com/JazminBoada/todo-list"
            />
            <ProjectsCards
              image={img4}
              title="Shop Landing Page"
              subtitle="HTML5 | TAILWIND | REACT.JS"
              text="Sitio web realizado con React.js y librerias como icons, scroll, slick y framer motion. Diseñado con TailwindCSS, desde la perspectiva desktop first."
              sourceLink="https://handmadegaia-landingpage.netlify.app/"
              appLink="https://github.com/JazminBoada/shop-landing-page"
            />
            <ProjectsCards
              image={img5}
              title="Weather App"
              subtitle="HTML5 | CSS3 | REACT.JS"
              text="Aplicación web sobre el pronostico del tiempo. Desarrollado con React.js y utilizando la API de Open Weather para tener los detalles en tiempo real sobre el clima, la humedad y el viento de diferentes partes del mundo."
              sourceLink="https://jsreact-weather-app.netlify.app/"
              appLink="https://github.com/JazminBoada/weather-app"
            />
            <ProjectsCards
              image={img6}
              title="Translator App"
              subtitle="HTML5 | CSS3 | JAVASCRIPT"
              text="Aplicación web de traductor. Desarrollado con Javascript para sus distintas funciones, interccambio de paises, copiado de texto y altavoz. Utilizando la API traslator from MyMemory, brindando el listado de paises a seleccionar."
              sourceLink="https://traslator-app.netlify.app/"
              appLink="https://github.com/JazminBoada/traslator-app"
            />
          </section>
        </main>
      </div>
    </section>
  );
};

export default Projects;
