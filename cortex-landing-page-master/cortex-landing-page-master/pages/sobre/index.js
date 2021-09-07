import { useContext } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AboutUsBanner from "../../components/partials/AboutUsBanner";
import CTA from "../../components/partials/CTA";
import GeneralSection from "../../components/partials/GeneralSection";
import Catchphrase from "../../components/partials/Catchphrase";
import WhoAmI from "../../components/partials/WhoAmI";
import Contact from "../../components/partials/Contact";
import MissionAndValue from "../../components/partials/MissionAndValue";
import { ModalContext } from "../../config/contexts/ModalContext";
import MainLayout from "../../layouts/MainLayout";

const PLATFORM_URL = "https://cortex-platform.netlify.app/";

const AboutUs = () => {
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <MainLayout>
      <Head>
        <title>Sobre nós | Cortex Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />
      <AboutUsBanner />

      <GeneralSection
        paragraph={
          <>
            A <span className="font-bold">CORTEX ACADEMY</span> Nasceu com o
            propósito de formar e desenvolver profissionais através da
            utilização e divulgação dos ensinamentos da ciência por trás de
            diferentes abordagens terapêuticas que buscam a saúde e o
            desenvolvimento humano. Dessa forma, fomentar a aplicação da hipnose
            e hipnoterapia, assim como seus preceitos derivados das
            neurociências, para potencializar resultados. <br />
            <br />
            Temos como foco se aprofundar no funcionamento da mente humana, e no
            sistema neurológico de nosso cérebro, e como otimiza-lo, utilizando
            a ferramenta da hipnose como instrumento.
          </>
        }
      />

      <Catchphrase
        quotation={
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Autoconhecimento e ferramentas para ajudar Pessoas em uma única
            formação
          </span>
        }
      />

      <WhoAmI />

      <Catchphrase
        quotation={
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Formação completa em Hipnoterapia em uma imersão que vai transformar
            sua forma de pensar
          </span>
        }
      />

      <MissionAndValue />

      <CTA
        alternate
        title={
          <>
            <span className="block text-secondary font-extrabold sm:text-4xl text-right">
              Localize seu hipnoterapeuta!
            </span>
            <span className="block text-xl font-bold text-right">
              Conheça a nossa plataforma de hipnoterapeutas e encontre o mais
              próximo de você!
            </span>
          </>
        }
        actionText="Quero conhecer!"
        action={() => {
          var win = window.open(PLATFORM_URL, "_blank");
          win.focus();
        }}
      />

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

      <Contact />
    </MainLayout>
  );
};

export default AboutUs;
