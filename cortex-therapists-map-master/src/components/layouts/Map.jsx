import { useContext } from "react";
import GoogleMapReact from "google-map-react";

import { DataContext } from "../../contexts/DataContext";

import Marker from "../elements/Marker";

const Map = () => {
  const { filteredData } = useContext(DataContext);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAE_zOeTIjrU4bmJqyjNRE7Stq291o0I-E" }}
      defaultCenter={{
        lat: -13.702797,
        lng: -46.6977874,
      }}
      defaultZoom={4}
    >
      {filteredData
        ? filteredData.map(({ coordinates, ...therapist }) => {
            const [lat, lng] = coordinates.split(",");

            return (
              <Marker
                key={therapist.id}
                lat={Number(lat.trim())}
                lng={Number(lng.trim())}
                data={therapist}
              />
            );
          })
        : null}
    </GoogleMapReact>
  );
};

export default Map;
