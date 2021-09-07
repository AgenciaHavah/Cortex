import { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";
import Tooltip from "@material-ui/core/Tooltip";

import { ModalContext } from "../../contexts/ModalContext";

import Therapist from "./Therapist";

const HtmlTooltip = withStyles((theme) => ({
  arrow: {
    color: "#f5f5f9",
  },
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const Marker = ({ data }) => {
  const { setModalData } = useContext(ModalContext);

  return (
    <div className="marker" onClick={() => setModalData({ show: true, data })}>
      <HtmlTooltip
        title={
          <>
            <Therapist index={0} data={data} />
          </>
        }
        placement="top"
        arrow
      >
        <RoomIcon fontSize="large" className="color-indigo-600" />
      </HtmlTooltip>
    </div>
  );
};

export default Marker;
