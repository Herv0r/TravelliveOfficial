import React, { useState } from "react";
import Logo from '../../Logo/Logo2.svg';
import Modal from "./Login";
import { Transition } from "@headlessui/react";

const Header = () => {
  const navigation = [
    { name: "Ofertas", href: "#ofertas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contacto", href: "/contact" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Travellive</span>
              <img
                className="h-5 w-auto"
                src={ Logo }
                alt="Travellive"
              />
            </a>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 text-gray-900 hover:text-secondary3 "
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900"
              onClick={handleOpenModal}
            >
              Log in
            </a>
            {showModal && <Modal onClose={handleCloseModal} />}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-0 lg:px-8 bg-white bg-img-bg5 bg-fixed bg-cover bg-bottom imagenFondo">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-Raleway tracking-tight text-secondary2 sm:text-6xl">
              Vive la experiencia de tu vida
            </h1>
            <p className="font-Nunito mt-6 pt-4 text-lg leading-8 text-primary3">
              Elige tu destino, nosotros nos encargamos del resto
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-secondary3 px-3.5 py-2.5 text-sm font-semibold text-primary3 shadow-sm hover:bg-secondary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary1"
                onClick={handleOpenModal}
              >
                Comenzar Aventura
              </a>
              <a
                href="#nosotros"
                className="text-sm font-semibold leading-6 text-primary3"
              >
                Quienes somos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
