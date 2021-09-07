import React from "react";

const Features = () => {
  return (
    <section id="courses" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
            Treinamentos em Hipnose Clínica
          </h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Treinamentos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Acreditamos que mesmo em momentos de dificuldades, as pessoas que
            desejam e possuem os recursos adequados, conseguem reverter sua
            condição alcançando uma vida emocional saudável e equilibrada.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/assets/images/brain.svg"
                    width={24}
                    height={24}
                    alt="brain"
                  />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Hipnose - Mudando a percepção e a realidade
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Entenda o que é e como a hipnose acontece dentro do seu
                  cérebro, aprenda a criar e conduzir o estado hipnótico de
                  forma rápida, segura e eficaz; utilizando a linguagem para
                  alterar a percepção da realidade.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/assets/images/atom.svg"
                    width={24}
                    height={24}
                    alt="atom"
                  />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Hipnoterapia e a ciência por trás da mudança
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Aprenda como conduzir e gerar resultados rápidos utilizando o
                  conceito de terapias breves – pesquisados desde 1985. Um
                  treinamento único, teórico/prático/vivencial, que mudará a
                  forma como você percebe e cria a sua realidade. Saiba como
                  utilizar a hipnoterapia para influenciar na forma como mente e
                  cérebro funcionam para trazer equilíbrio e saúde física e
                  mental.
                </dd>
              </div>
            </div>

            {/* <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Cortex VR
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Falta texto do Bruno.
                </dd>
              </div>
            </div> */}

            {/* <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Mobile notifications
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </div> */}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
