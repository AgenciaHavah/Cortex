import React from "react";

import Ewerton from "../../public/assets/images/EWERTON.png";
import Bruno from "../../public/assets/images/BRUNO_TRICARICO.png";
import Fabio from "../../public/assets/images/FABIO.png";
import Benedito from "../../public/assets/images/BENEDITO.png";

const Description = ({ image, name, instagram, linkedin, description }) => (
  <>
    <img
      className="rounded-md w-36 h-44 object-cover mx-auto lg:mx-0 lg:mr-auto bg-bottom"
      src={image}
      alt="Foto"
    />
    <div className="px-4 flex flex-col">
      <p className="mt-4 lg:mt-0 text-center lg:text-left text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl">
        {name}
      </p>

      <div className="flex my-3 mx-auto lg:ml-0 ">
        <a
          href={instagram}
          target="_blank"
          style={{ padding: 2 }}
          className="ml-2 m-auto max-w-xs hover:bg-indigo-900 bg-gray-800 rounded-full flex items-center text-sm outline-none"
          aria-haspopup="true"
        >
          <span className="sr-only">Instagram</span>
          <img
            className="h-8 w-8 rounded-full"
            src="/assets/images/instagram.svg"
            width={24}
            height={24}
            alt="Instagram"
          />
        </a>

        <a
          href={linkedin}
          target="_blank"
          style={{ padding: 2 }}
          className="ml-2 m-auto max-w-xs hover:bg-indigo-900 bg-gray-800 rounded-full flex items-center text-sm outline-none"
          aria-haspopup="true"
        >
          <span className="sr-only">LinkedIn</span>
          <img
            className="h-8 w-8 rounded-full"
            src="/assets/images/linkedin.svg"
            width={24}
            height={24}
            alt="LinkedIn"
          />
        </a>
      </div>

      <p className="mt-2 max-w-2xl text-base text-gray-500 text-left">
        {description}
      </p>
    </div>
  </>
);

const WhoAmI = () => {
  return (
    <section id="team" className="relative bg-white overflow-hidden">
      <div className="my-6 mx-auto max-w-7xl px-4 sm:my-10 sm:px-6 md:my-12 lg:my-16 lg:px-8">
        <p className="text-3xl leading-8 font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
          Nossa Equipe
        </p>
        <div className="grid grid-cols-2 gap-6 sm:gab-8 md:gap-10 mt-10">
          <div className="col-span-2 sm:col-span-1 lg:flex">
            <Description
              image={Ewerton}
              name="Ewertton Gonzaga"
              linkedin="https://www.linkedin.com/in/ewerttongonzaga/"
              instagram="https://www.instagram.com/ewerttongonzaga/"
              description="Professor de Economia e Finan??as na Funda????o Getulio Vargas, para os
                cursos de MBA em Gest??o Financeira, Controladoria e Auditoria, e
                Professor para P??s-Gradua????o em Administra????o de Empresas. Foi s??cio co-fundador do Instituto Quasar para forma????o de hipnoterapeutas.
                ?? s??cio fundador da CORTEX ACADEMY, nova refer??ncia brasileira em neuroci??ncia aplicada e desenvolvimento humano."
            />
          </div>

          <div className="col-span-2 sm:col-span-1 lg:flex">
            <Description
              image={Benedito}
              name="Dr. Benedito Amorim"
              instagram="https://www.instagram.com/drbeneamorim/"
              linkedin="https://www.linkedin.com/in/benedito-amorim-19011a12/"
              description="M??dico Neurocirurgi??o formado pela Unesp. Visiting Fellow na Cleveland Clinic ??? neuromodula????o e tratamento da dor e dist??rbios do movimento. Neurocirurgi??o do Grupo da Dor do Hospital Israelita Albert Einstein e Centro Integrado para Tratamento da Dor. S??cio co-fundador da CORTEX ACADEMY, e instrutor para Tratamento de Dor com uso da Hipnoterapia."
            />
          </div>

          <div className="col-span-2 sm:col-span-1 lg:flex">
            <Description
              image={Fabio}
              name="Fabio La Selva"
              instagram="https://www.instagram.com/fabiolaselva/"
              linkedin="https://www.linkedin.com/in/fabio-la-selva-98316728/"
              description="Formado em Publicidade e Comunica????o Social e p??s-graduado no CEAG pela FGV. P??s-graduado em Business Management pela University of Sydney, Australia. Master Practitioner em Programa????o Neurolingu??stica e s??cio co-fundador e instrutor da CORTEX ACADEMY"
            />
          </div>

          <div className="col-span-2 sm:col-span-1 lg:flex">
            <Description
              image={Bruno}
              name="Bruno Tricarico"
              instagram="https://www.instagram.com/brunotricarico/"
              linkedin="https://www.linkedin.com/in/bruno-tricarico-756b7a78/"
              description="Cirurgi??o Dentista formado pela UnB. Com 17 anos de experi??ncia no uso da hipnose, Bruno foi o primeiro brasileiro formado por Gerald Kein nos USA  e Ex. Instrutor pela sua institui????o. Entre diversas outras forma????es nacionais e internacionais. Foi s??cio co-fundador do Instituto Quasar e respons??vel pelo seu conte??do cl??nico. ?? s??cio Fundador, instrutor e respons??vel t??cnico-cient??fico da CORTEX ACADEMY."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
