import { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext();

const MOBILE_WIDTH = 760;

const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.screen.width <= MOBILE_WIDTH);
    });

    return () => window.removeEventListener("resize");
  }, []);

  const providerValue = {
    isMobile,
  };

  return (
    <DeviceContext.Provider value={providerValue}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
