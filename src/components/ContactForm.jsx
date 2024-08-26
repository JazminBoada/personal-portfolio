import React from "react";
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsLinkedin,
} from "react-icons/bs";
import contactImg from "../assets/contactimg.png";

const ContactForm = () => {
  return (
    <div className="relative overflow-hidden contact-form">
      <div className="background absolute inset-0 z-0">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main className="flex flex-col md:max-w-screen-2xl md:mx-auto mt-2 py-16 px-10 text-gray-regular">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-10">
          <form action="" className="flex flex-col gap-4 w-full md:max-w-md">
            <h1 className=" text-4xl font-semibold">Contáctame</h1>
            <input
              className="placeholder-blue-regular p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
              name="nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="placeholder-blue-regular p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
              name="email"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="placeholder-blue-regular h-40 p-2 outline-none overflow-hidden rounded-md shadow-sm border border-blue-regular focus:border-b-4 transform transition-all duration-100"
              name="mensaje"
              type="text"
              placeholder="Mensaje"
            ></textarea>

            <div className="flex justify-center">
              <button className="flex flex-row items-center justify-center gap-2 w-full text-sm md:text-lg border-none cursor-pointer rounded-md bg-blue-regular text-white py-2 mt-2 hover:shadow-md transition-all duration-300 shadow-md">
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

          <img src={contactImg} alt="contact" className="w-full md:w-1/2" />
        </div>
      </main>
    </div>
  );
};

export default ContactForm;
