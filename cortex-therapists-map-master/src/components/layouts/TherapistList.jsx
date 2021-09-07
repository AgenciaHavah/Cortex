import { useContext } from "react";
import { List } from "@material-ui/core";

import loader from "../../assets/images/loader.svg";
import logo from "../../assets/images/logo-horizontal.png";

import { DataContext } from "../../contexts/DataContext";

import SearchBox from "../elements/SearchBox";
import Therapist from "../elements/Therapist";

const TherapistList = () => {
  const { filteredData, filterData } = useContext(DataContext);

  return (
    <section className="list-section">
      <div className="search-section elevation">
        <header style={{ marginBottom: 3 }}>
          <img src={logo} alt="logo" height={52} />
        </header>

        <SearchBox onChange={filterData} />
      </div>

      <List className="list">
        {filteredData ? (
          filteredData.length ? (
            filteredData.map((therapist, i) => (
              <div key={therapist.id} className="list-item">
                <Therapist index={i} data={therapist} />
              </div>
            ))
          ) : (
            <div className="loader-container">
              <p>Nenhum registro encontrado</p>
            </div>
          )
        ) : (
          <div className="loader-container">
            <img src={loader} alt="loader" />
          </div>
        )}
      </List>
    </section>
  );
};

export default TherapistList;
