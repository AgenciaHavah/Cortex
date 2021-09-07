import { useState, useContext, useEffect } from "react";
import api from "./services/api";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";

import { DataContext } from "./contexts/DataContext";
import { DeviceContext } from "./contexts/DeviceContext";

const App = () => {
  const [locations, setLocations] = useState([]);

  const { isLogged } = useContext(DataContext);
  const { isMobile } = useContext(DeviceContext);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data } = await api.get("/therapist/country");

      setLocations(data);
    };

    fetchLocations();
  }, []);

  return (
    <main className={`app ${isMobile && "mobile"}`}>
      {isLogged ? <Dashboard /> : <Home locations={locations} />}
    </main>
  );
};

export default App;
