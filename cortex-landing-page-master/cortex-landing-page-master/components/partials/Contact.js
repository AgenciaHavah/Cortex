import React from "react";

import Form from "../layouts/Form";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-secondary">
      <div className="my-6 mx-auto max-w-7xl px-4 sm:my-10 sm:px-6 md:my-12 lg:my-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-center text-white">
            Entre em contato
          </p>

          <div className="flex flex-col max-w-5xl mx-auto mt-10 shadow-md rounded-md bg-white p-6">
            <Form controlId="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
