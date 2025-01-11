"use client";

import React from "react";
import PropTypes from "prop-types";
import "./SectionHeader.css";

const SectionHeader = ({ title, subtitle, align = "center" }) => {
  return (
    <div className={`section-header section-header--${align}`}>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["center", "left"]),
};

export default SectionHeader;
