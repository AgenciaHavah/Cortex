import React from "react";

const GeneralSection = ({ title, subtitle, paragraph }) => {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="my-6 mx-auto max-w-7xl px-4 sm:my-10 sm:px-6 md:my-12 lg:my-16 lg:px-8">
        <div className="max-w-7xl mx-auto lg:text-center">
          <h2 className="text-2xl text-secondary font-semibold tracking-wide uppercase">
            Fundamentos
          </h2>
          {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fundamentos
          </p> */}
          <div className="mt-2 text-left">
            <h1 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 my-2">
              Missão
            </h1>
            <div className="text-justify">
              Formar e desenvolver indivíduos e grupos através da utilização,
              divulgação e ensinamentos da ciência por trás de diferentes
              abordagens terapêuticas que buscam a saúde e o desenvolvimento
              humano. Dessa forma, fomentar a aplicação da hipnose e
              hipnoterapia, assim como seus preceitos derivados das
              neurociências, para potencializar resultados.
            </div>
          </div>
          <div className="mt-2 text-left">
            <h1 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 my-2">
              Visão
            </h1>
            <div className="text-justify">
              Ser referência nacional na divulgação e criação de conteúdo e
              formação de profissionais responsáveis pelo desenvolvimento humano
              de forma profissional e amparados pelo respaldo científico. Assim,
              ajudar a criar um mundo saudável e equilibrado utilizando a
              hipnose e outras técnicas de desenvolvimento pessoal como
              ferramentas potencializadoras.
            </div>
          </div>
          <div className="mt-2 text-left">
            <h1 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 my-2">
              Valores
            </h1>
            <div className="text-justify">
              <span className="font-bold">Credibilidade:</span> todo o
              conhecimento transmitido tem bases fortes e sólidas na ciência.
              <br />
              <span className="font-bold">Confiança:</span> temos os melhores
              profissionais para garantirem a melhor experiência de nossos
              alunos e clientes.
              <br />
              <span className="font-bold">Família:</span> nossos alunos e
              clientes não adquirem um produto somente; eles entram para a
              família Cortex, uma comunidade única onde todos se ajudam e se
              sentem acolhidos. <br />
              <span className="font-bold">Excelência:</span> temos o
              comprometimento de oferecer os melhores conteúdos; o que há de
              mais novo e inovador será contemplado, sempre visando proporcionar
              a melhor experiência possível aos alunos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSection;
