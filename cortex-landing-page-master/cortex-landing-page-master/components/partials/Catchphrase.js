import React from "react";

const Catchphrase = ({ quotation }) => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-base text-center font-extrabold tracking-tight text-white">
          {quotation}
        </h2>
      </div>
    </div>
  );
};

export default Catchphrase;
