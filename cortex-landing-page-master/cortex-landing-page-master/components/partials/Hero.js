import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const [width, setWidth] = useState(0);
  const router = useRouter();

  const updateDimensions = () => {
    setWidth(document.body.innerWidth);
  };

  useEffect(() => {
    setWidth(document.body.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const scrollTo = (id, path) => {
    const yOffset = -100;
    const element = document.querySelector(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      return window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: width }} id="hero">
      <div className="relative overflow-hidden inline-block w-full h-screen">
        <div className="absolute lg:text-left px-8 lg:px-16 lg:ml-36 xl:ml-48 max-w-2xl w-full h-full flex items-center">
          <h1 className="text-3xl tracking-wide text-gray-200 sm:text-5xl lg:text-5xl">
            <span className="block xl:inline select-none">
              Aprenda sobre a ciência envolvida no tratamento da saúde mental
              com uso da <span className="text-blue-600">hipnose</span> em
              processos de terapia
            </span>
          </h1>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute min-w-full min-h-full object-cover"
          style={{ zIndex: "-1", filter: "brightness(40%)" }}
        >
          <source
            src="/assets/videos/video_hero_cortex.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute bottom-11 w-8 h-16 flex justify-center w-full">
          <a>
            <span onClick={() => scrollTo("#about")} className="icon-scroll" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
