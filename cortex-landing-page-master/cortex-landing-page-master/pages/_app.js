import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import * as gtag from "../lib/gtag";

import "../styles/index.css";
import "../styles/embla.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ModalProvider from "../config/contexts/ModalContext";

// The handler to smoothly scroll to the element into view
// Example from: https://codesandbox.io/s/answert-nextjs-framer-motion-scroll-to-id-bkd3d
const handExitComplete = () => {
  if (typeof window !== "undefined") {
    const hashId = window.location.hash;

    if (hashId) {
      const element = document.querySelector(hashId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  // Google analytics tag
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ModalProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ModalProvider>
  );
}

export default MyApp;
