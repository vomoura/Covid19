import React, { memo } from "react";
import PropTypes from 'prop-types'
import RefreshIcon from "../Assets/img/refresh.svg";
import { Card, Typography, Button, Select, MenuItem } from "../Components/UI";
import COUNTRIES from "../Components/Constants/Countries";
import { CardPanelContentStyled, ItemStyled } from "./MainCardStyle";

const navigatorHasShare = navigator.share;

function MainCardPanel({ updateAt, onChange, data, country, getCovidData }) {
  
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;
  
  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `${country} - Dados atualizados em ${updateAt} - Casos hoje: ${todayCases}. Mortes hoje: ${todayDeaths}. Total de Casos: ${cases}. Total de Mortos: ${deaths}. Total de Recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados da Covid19 - ${country}`,
      text: textCovid19,
      url: "https://covid19dio.netlify.app/",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="p">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="secondary">Atualizado em: {updateAt}</Typography>
          <img src={RefreshIcon} alt="Atualizar" onClick={() => getCovidData(country)} className="cursor" />
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

MainCardPanel.propTypes = {
  data: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default memo(MainCardPanel);
