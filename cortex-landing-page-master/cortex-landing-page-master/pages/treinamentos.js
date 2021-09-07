import { useContext, useEffect, useState } from "react";
import cn from "classnames";
import Loader from "react-loader-spinner";

import Fab from "../components/elements/FAB";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Modal from "../components/layouts/Modal";
import { ModalContext } from "../config/contexts/ModalContext";
import api from "../services/api";
import Head from "next/head";

const Courses = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const loadCourses = async () => {
    await api
      .get("/course")
      .then(({ data }) => setCourses(data))
      .catch((error) => console.error(error));

    setLoadingCourses(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="w-full" id="treinamentos">
      <Head>
        <title>Treinamentos | Cortex Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header useScrolled />
      <main className="mt-36" style={{ minHeight: "calc(100vh - 420px)" }}>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl text-primary font-medium">
            Treinamentos Cortex
          </h1>
          <h2 className="text-xl text-primary">
            Conheça nosso próximos cursos e participe!
          </h2>

          <div className="my-12">
            {loadingCourses ? (
              <Loader
                type="BallTriangle"
                color="#000047"
                height={80}
                width={80}
                timeout={10000}
              />
            ) : courses.length !== 0 ? (
              <div
                className={cn(
                  courses.length <= 2
                    ? `grid grid-cols-${courses.length - 1} md:grid-cols-${
                        courses.length
                      } lg:grid-cols-${courses.length} gap-4`
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                )}
              >
                {courses.map(({ id, title, promotionURL }) => (
                  <a className="embla__slide cursor-pointer" key={id}>
                    <div className="embla__slide__inner">
                      <img
                        onClick={() => setIsModalOpen(true)}
                        className="embla__slide__img"
                        src={promotionURL}
                        alt={title}
                      />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center align-center text-center">
                <h1>Nenhum curso com inscrições abertas no momento :(</h1>
                <h2>
                  Entre em contato e te avisaremos assim que a proxima turma
                  estiver disponível!
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 max-w-sm mx-auto focus:outline-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary"
                >
                  Quero participar!
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Fab
        to="https://api.whatsapp.com/send?phone=5511976734664&text=Ol%C3%A1%20CORTEX,%20quero%20ser%20um%20Hipnoterapeuta"
        className="p-4 flex items-center shadow-lg bg-whatsapp fixed bottom-10 right-10 rounded-full cursor-pointer"
      >
        <img
          src="/assets/images/whatsapp.svg"
          width={30}
          height={30}
          alt="WhatsApp"
        />
      </Fab>
      <Fab
        to="http://t.me/cortexacademy"
        className="flex items-center shadow-lg fixed bottom-28 right-10 rounded-full cursor-pointer"
      >
        <img
          src="/assets/images/telegram.svg"
          width={62}
          height={62}
          alt="Telegram"
        />
      </Fab>
    </div>
  );
};

export default Courses;
