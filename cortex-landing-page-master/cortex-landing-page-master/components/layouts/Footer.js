import React from "react";

import Social from "../partials/Social";

const Footer = () => {
  return (
    <footer className="bg-primary-blue-darker text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-10 lg:py-16 text-white">
        <div className="grid grid-cols-3">
          <div className="sm:mr-auto sm:col-span-1 col-span-3 flex">
            <div className="sm:mr-auto mx-auto text-center sm:text-left">
              <img
                className="object-cover cursor-pointer"
                src="/assets/images/logo-horizontal.png"
                width={180}
                height={60}
                alt="Logo"
              />

              <p className="mt-4 text-sm">&copy; Atmos Digital - 2021.</p>
              <p className="text-sm">Todos os direitos reservados.</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:col-span-1 col-span-3 flex text-center sm:text-left mx-auto px-4">
            <div className="flex flex-col text-sm">
              <p className="font-bold">SEDE CORTEX ACADEMY</p>
              <p className="mt-4">
                Alameda Xingu, 350 – 20° andar – Conj. 2002
              </p>
              <p className="mb-4">Alphaville – Barueri-SP – CEP 06455-911</p>
              <p className="mt-4">Contato@CortexAcademy.org</p>
              <p>Tel. +55 (11) 97673-4664</p>
            </div>
          </div>
          <div className="mt-4 order-1 sm:mt-0 sm:col-span-1 col-span-3 flex ">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
