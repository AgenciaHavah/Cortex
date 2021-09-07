import { useContext } from "react";
import TherapistList from "../components/layouts/TherapistList";
import Map from "../components/layouts/Map";
import Modal from "../components/layouts/Modal";
import "../styles.css";

import { DeviceContext } from "../contexts/DeviceContext";

const Dashboard = () => {
  const { isMobile } = useContext(DeviceContext);

  return (
    <>
      <section>
        <TherapistList />
      </section>
      <section className="map">{!isMobile && <Map />}</section>
      <Modal />
    </>
  );
};

export default Dashboard;
