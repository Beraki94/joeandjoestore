import React from "react";
import "./PageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
};

export default PageHeader;
