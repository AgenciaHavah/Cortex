import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";

import { ModalContext } from "../../contexts/ModalContext";

const Therapist = ({ index, data }) => {
  const { name, street, number, complement, city, state, postalCode } = data;

  const { setModalData } = useContext(ModalContext);

  return (
    <ListItem
      onClick={() => setModalData({ show: true, data })}
      button
      alignItems="flex-start"
      className="therapist-container elevation bg-indigo-600"
    >
      <div className="therapist-name">{name}</div>
      <h5>Endereço:</h5>
      <div className="therapist-address">{`${street}, ${number}${
        complement ? ` - ${complement}` : ""
      }, ${city} - ${state}`}</div>
      <div>{`CEP: ${postalCode}`}</div>
    </ListItem>
  );
};

export default Therapist;
