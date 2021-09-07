import React, { useContext } from "react";

const CTA = ({ title, action, actionText, alternate }) => {
  return (
    <div className={!alternate ? "bg-gray-100" : "bg-blue-100"}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        {!alternate ? (
          <>
            <h2 className="text-3xl tracking-tight text-gray-900">{title}</h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={action}
                  className="focus:outline-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary"
                >
                  {actionText}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl tracking-tight text-gray-900">{title}</h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-end">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={action}
                  className="focus:outline-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary"
                >
                  {actionText}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CTA;
