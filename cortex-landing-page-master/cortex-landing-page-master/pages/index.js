import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../components/partials/Hero";
import CTA from "../components/partials/CTA";
import GeneralSection from "../components/partials/GeneralSection";
import Courses from "../components/partials/Courses";
import Catchphrase from "../components/partials/Catchphrase";
import Contact from "../components/partials/Contact";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../config/contexts/ModalContext";
import Testimonials from "../components/partials/Testimonials";
import api from "../services/api";
import MainLayout from "../layouts/MainLayout";
import WhatIsTherapy from "../components/partials/WhatIsTherapy";

const PLATFORM_URL = "https://cortex-platform.netlify.app/";

const Home = () => {
  const router = useRouter();
  const { setIsModalOpen } = useContext(ModalContext);

  const [courses, setCourses] = useState();

  const loadCourses = async () => {
    await api
      .get("/course")
      .then(({ data }) => setCourses(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Cortex Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />

      <Hero />

      <GeneralSection
        title="Quem somos"
        subtitle="Conheça a CORTEX"
        paragraph={
          <>
            A <span className="font-bold">CORTEX ACADEMY</span> tem como
            propósito levar a Hipnose e a hipnose clínica para o próximo nível,
            além do 'Como' praticá-la, que a maioria dos institutos já se
            propõem, nós queremos ir a um passo além!
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  router.push("/sobre");
                }}
                className="focus:outline-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary md:py-4 md:text-lg md:px-10 max-w-xs"
              >
                Conheça por completo ➔
              </button>
            </div>
          </>
        }
      />

      <WhatIsTherapy />

      <Catchphrase
        quotation={
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Nova referência brasileira em neurociência aplicada à hipnoterapia e
            desenvolvimento humano!
          </span>
        }
      />

      {/* <Features /> */}

      <CTA
        alternate
        title={
          <>
            <span className="block text-secondary font-extrabold sm:text-4xl text-right sm:text-left">
              Localize seu hipnoterapeuta!
            </span>
            <span className="block text-xl font-bold text-right sm:text-left">
              Conheça a nossa plataforma de hipnoterapeutas e encontre o mais
              próximo de você!
            </span>
          </>
        }
        actionText="Quero conhecer!"
        action={() => {
          const win = window.open(PLATFORM_URL, "_blank");
          win.focus();
        }}
      />

      {courses && <Courses setIsModalOpen={setIsModalOpen} courses={courses} />}

      <Catchphrase
        quotation={
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Instrutores qualificados para sua melhor formação em uma nova
            carreira profissional
          </span>
        }
      />

      <Testimonials />

      <CTA
        title={
          <>
            <span className="block text-secondary font-extrabold sm:text-4xl">
              Junte-se a nós!
            </span>
            <span className="block text-xl font-bold">
              Aprenda Hipnoterapia com grandes referências do Brasil.
            </span>
          </>
        }
        actionText="Quero saber mais!"
        action={() => setIsModalOpen(true)}
      />
      {/* <GeneralSection
        title="O que você vai aprender"
        subtitle="Conteúdo programático dos Treinamentos"
        paragraph="Falta do texto do Bruno."
      />

      <Catchphrase
        quotation={
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Aplicamos nosso conhecimento em prol da saúde emocional das pessoas
          </span>
        }
      /> */}
      <Contact />
    </MainLayout>
  );
};

export default Home;
