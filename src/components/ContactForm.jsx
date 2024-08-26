import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import contactImg from "../assets/contactimg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xldrzdez");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden contact-form"
    >
      <div className="background absolute inset-0 z-0">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main className="flex flex-col md:max-w-screen-2xl md:mx-auto mt-2 py-16 px-10 text-gray-regular">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-10">
          {state.succeeded ? (
            <div className="flex flex-col items-center animate-fadeIn">
              <h2 className="text-3xl text-blue-regular font-semibold">
                ¡Gracias por tu mensaje!
              </h2>
              <p className="text-xl text-gray-700">
                Me pondré en contacto contigo lo antes posible.
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xldrzdez"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full md:max-w-md"
            >
              <h1 className="text-4xl font-semibold">Contáctame</h1>
              <input
                className="placeholder-blue-regular p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
                required
              />
              <ValidationError
                prefix="Nombre"
                field="nombre"
                errors={state.errors}
              />
              <input
                className="placeholder-blue-regular p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                className="placeholder-blue-regular h-40 p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
                required
              ></textarea>
              <ValidationError
                prefix="Mensaje"
                field="mensaje"
                errors={state.errors}
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex flex-row items-center justify-center gap-2 w-full text-sm md:text-lg border-none cursor-pointer rounded-md bg-blue-regular text-white py-2 mt-2 hover:shadow-md transition-transform duration-200 ease-in-out active:scale-95"
                >
                  <div className="relative overflow-hidden group">
                    <span className="invisible">Enviar Mensaje</span>
                    <span className="text-white absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                      Enviar Mensaje
                    </span>
                    <span className="text-white absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                      Enviar Mensaje
                    </span>
                  </div>
                </button>
              </div>
            </form>
          )}
          <img src={contactImg} alt="contact" className="w-full md:w-1/2" />
        </div>
      </main>
    </motion.div>
  );
};

export default ContactForm;
