import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Fab from "../components/elements/FAB";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Modal from "../components/layouts/Modal";
import Contact from "../components/partials/Contact";
import CTA from "../components/partials/CTA";
import { ModalContext } from "../config/contexts/ModalContext";

const PLATFORM_URL = "https://cortex-platform.netlify.app/";

const WhatIsTherapyPage = () => {
  const router = useRouter();

  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <div className="w-full" id="o-que-e-hipnoterapia">
      <Head>
        <title>O que é Hipnoterapia | Cortex Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header useScrolled />
      <main
        className="mt-36 mx-8 mb-12"
        style={{ minHeight: "calc(100vh - 420px)" }}
      >
        <div className="flex justify-center items-center flex-col rounded-lg shadow-xl max-w-3xl mx-auto px-8">
          <h1 className="text-3xl text-primary font-medium mt-12">
            O que é Hipnoterapia
          </h1>
          <h2 className="text-xl text-primary mt-4">
            Conheça nossa especialidade!
          </h2>
          <div className="my-12 text-lg text-gray-800">
            <p>
              A hipnoterapia (ou hipnose clínica) é uma importante ferramenta
              terapêutica para o tratamento de diversos problemas de saúde
              emocional. ​É uma ótima ferramenta terapêutica que potencializa os
              resultados no tratamento de doenças e transtornos físicos,
              emocionais, psicológicos, além de hábitos, crenças limitantes e
              sentimentos indesejáveis. ​
            </p>
            <br />
            <p>
              Em outras palavras, é uma terapia que utiliza a hipnose para
              reensinar a mente, tratando emoções que são armazenamos ao longo
              da vida e modificando padrões de comportamentos condicionados que
              nos sabotam ou adoecem. Por isso, a hipnoterapia tem sido uma
              forte aliada para muitos profissionais - médicos, terapeutas ou
              facilitadores - que buscam auxiliar as pessoas em seu
              autoconhecimento, desenvolvimento pessoal e saúde mental. ⠀Essa
              abordagem terapêutica é muito utilizada em casos como: depressão,
              ansiedade, síndrome do pânico, medos, fobias, vícios, compulsões,
              disfunções sexuais, timidez, baixa autoestima, crenças limitantes
              e tudo aquilo que seja de origem emocional. ⠀
            </p>
            <br />
            <p>
              O mais interessante é que o problema costuma ser resolvido com até
              3 sessões em cerca de 90% dos casos. Através da hipnose,
              conseguimos acessar memórias e ressignificar programações que
              foram criadas na infância por exemplo e desenvolvidas ao longo de
              sua vida, gerando algum tipo de distúrbio emocional. Qualquer
              sintoma ou comportamento indesejado de origem emocional pode ser
              trabalhado através da utilização da hipnose como ferramenta
              terapêutica. ⠀ Hoje a hipnoterapia é uma prática muito comum em
              países europeus e se tornou muito reconhecida também no Brasil,
              tanto que em 2018 o Ministério da Saúde a incluiu no SUS.
            </p>

            <div>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => router.push("/treinamentos"), 100);
                }}
                className="mt-4 focus:outline-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary"
              >
                Saber mais
              </button>
            </div>
          </div>
        </div>
      </main>

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

export default WhatIsTherapyPage;
