import React from "react";

const Social = () => {
  return (
    <div className="flex m-auto">
      <a
        href="https://www.linkedin.com/company/cortex-academy/"
        target="_blank"
        className="ml-2 max-w-xs hover:bg-indigo-900 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-haspopup="true"
      >
        <span className="sr-only">LinkedIn</span>
        <img
          className="h-8 w-8 rounded-full"
          src="/assets/images/linkedin.svg"
          width={30}
          height={30}
          alt="LinkedIn"
        />
      </a>

      <a
        href="https://www.facebook.com/CortexAcademy.org"
        target="_blank"
        className="ml-2 max-w-xs hover:bg-indigo-900 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-haspopup="true"
      >
        <span className="sr-only">Facebook</span>
        <img
          className="h-8 w-8 rounded-full"
          src="/assets/images/facebook.svg"
          width={30}
          height={30}
          alt="Facebook"
        />
      </a>

      <a
        href="https://www.instagram.com/cortex_academy/"
        target="_blank"
        className="ml-2 max-w-xs hover:bg-indigo-900 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-haspopup="true"
      >
        <span className="sr-only">Instagram</span>
        <img
          className="h-8 w-8 rounded-full"
          src="/assets/images/instagram.svg"
          width={30}
          height={30}
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default Social;
