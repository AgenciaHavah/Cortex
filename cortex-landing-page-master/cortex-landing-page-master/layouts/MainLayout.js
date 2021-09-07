import React from "react";
import { motion } from "framer-motion";

import Header from "../components/layouts/Header";
import Modal from "../components/layouts/Modal";
import Footer from "../components/layouts/Footer";
import Fab from "../components/elements/FAB";

const MainLayout = ({ children }) => {
  return (
    <motion.div className="w-full">
      <Modal />
      {/* <SnackBar /> */}
      <Header />
      <main>{children}</main>
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
    </motion.div>
  );
};

export default MainLayout;
