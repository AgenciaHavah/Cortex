import React from "react";

const Testimonials = () => {
  return (
    <section className="text-center">
      <h1 className="my-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Depoimentos
      </h1>

      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Veja alguns depoimentos de nossos alunos:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 lg:mb-4 max-w-7xl mx-auto">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/bHSqn1_nXLA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/P2UjbXKT_FE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/esS4aIObglU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/PBBWNitn0W4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/2H71xLkciSw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dSwcrQZFnII"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Testimonials;
