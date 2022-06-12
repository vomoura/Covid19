import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card as CardUI } from "../Components/UI/Card";
import { formatNumber } from "../Components/Layout/number"
import { LabelStyled, ValueStyled, CardContentStyled } from "./MainCardStyle";

function MainCard({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{formatNumber(value)}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
}

MainCard.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.number.isRequired,
  ]),
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default memo(MainCard);
