import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <h5 className={`${classes.section__subtitle} mb-3`}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.subtitle}
      </a>
    </h5>
  );
};

export default SectionSubtitle;
