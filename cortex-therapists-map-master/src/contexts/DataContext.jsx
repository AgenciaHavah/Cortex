import { createContext, useState, useEffect } from "react";

import api from "../services/api";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [filterOptions, setFilterOptions] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!isLogged) return;

    if (!filterOptions) return;

    const fetchData = async () => {
      try {
        const { data: therapistData } = await api.get("/therapist");

        const locationFilteredData = therapistData.filter(
          ({ location: { code } }) => filterOptions.state === code
        );

        setData(locationFilteredData);
        setFilteredData(locationFilteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [isLogged, filterOptions]);

  const filterData = (value) => {
    const newFilteredData = data.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(newFilteredData);
  };

  const providerValue = {
    data,
    filteredData,
    filterData,
    filterOptions,
    setFilterOptions,
    isLogged,
    setIsLogged,
  };

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
