import React, { memo, useState, useCallback, useEffect } from "react";
import Api from "../Api";
import MainBoard from "./MainBoard";
import MainPanel from "./MainCardPanel";
import { ContainerStyled } from "./MainStyle";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({target}) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <MainPanel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <MainBoard data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
