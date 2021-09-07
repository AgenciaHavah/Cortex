import React from "react";

const GeneralSection = ({ title, subtitle, paragraph }) => {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="my-6 mx-auto max-w-7xl px-4 sm:my-10 sm:px-6 md:my-12 lg:my-16 lg:px-8">
        <div className="max-w-7xl mx-auto lg:text-center">
          <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
            {subtitle}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {paragraph}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSection;
