import React, { memo } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Components/UI";
import Card from "./MainCard";

function MainBoard({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={cases} label="Total de Casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={todayDeaths} label="Mortes Hoje" color="#e95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={todayCases} label="Casos Hoje" color="#f7b829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={deaths} label="Total de Mortos" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={recovered} label="Total de Recuperados" color="#67c887" />
      </Grid>
    </Grid>
  );
}

MainBoard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(MainBoard);
