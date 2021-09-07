import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const Courses = ({ setIsModalOpen, courses }) => {
  const [width, setWidth] = useState();
  const [slideOptions, setSlideOptions] = useState();

  const [sliderRef] = useKeenSlider(slideOptions);

  useEffect(() => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  }, []);

  useEffect(() => {
    const updateScreen = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  useEffect(() => {
    if (width < 425) {
      return setSlideOptions({
        slidesPerView: 1,
        mode: "free",
        spacing: 15,
        loop: false,
      });
    }

    if (width < 720) {
      return setSlideOptions({
        slidesPerView: 2,
        mode: "free",
        spacing: 15,
        loop: false,
      });
    }

    if (width < 1200) {
      return setSlideOptions({
        slidesPerView: 3,
        mode: "free",
        spacing: 15,
        loop: false,
      });
    }

    return setSlideOptions({
      slidesPerView: 4,
      mode: "free",
      spacing: 15,
      loop: false,
    });
  }, [width]);

  return (
    courses &&
    courses.length !== 0 && (
      <section id="next-courses" className="relative bg-white overflow-hidden">
        <div className="mt-6 mx-auto sm:mt-6 md:mt-8 lg:mt-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="my-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Próximas turmas
            </h1>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Inscreva-se em nossos cursos exclusivos:
            </p>

            <div
              ref={sliderRef}
              className="keen-slider mt-4 lg:mb-4"
              style={{ maxHeight: "320px" }}
            >
              {courses.map(({ id, title, promotionURL }) => (
                <div
                  className="keen-slider__slide cursor-pointer flex justify-center align-center"
                  style={{ maxHeight: "320px", maxWidth: "320px" }}
                  key={id}
                >
                  <img
                    style={{ maxHeight: "320px", maxWidth: "320px" }}
                    onClick={() => setIsModalOpen(true)}
                    src={promotionURL}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Courses;
