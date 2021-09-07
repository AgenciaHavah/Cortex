import { useRouter } from "next/router";

const WhatIsTherapy = () => {
  const router = useRouter();

  return (
    <section className="mx-8">
      <div className="grid lg:grid-cols-2 mb-12 max-w-7xl gap-8 mx-auto">
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/terapia-index.jpg"
            alt="terapia"
            className="mx-auto lg:top-0 lg:left-20 md:rounded-lg shadow-lg"
            width={500}
          />
        </div>
        <div className="mt-0 md:mt-0 lg:mx-0 flex flex-col justify-between">
          <h1 className="text-2xl font-medium text-primary mb-4">
            O que é Hipnoterapia
          </h1>
          <p className="text-lg text-gray-800">
            A hipnoterapia (ou hipnose clínica) é uma importante ferramenta
            terapêutica para o tratamento de diversos problemas de saúde
            emocional.
          </p>
          <p className="text-lg text-gray-800">
            É uma ótima ferramenta terapêutica que potencializa os resultados no
            tratamento de doenças e transtornos físicos, emocionais,
            psicológicos, além de hábitos, crenças limitantes e sentimentos
            indesejáveis.
          </p>
          <div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => router.push("/o-que-e-hipnoterapia"), 100);
              }}
              className="mt-4 focus:outline-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary"
            >
              Entenda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTherapy;
