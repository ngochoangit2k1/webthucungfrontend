import React from "react";
import Line from "../../assets/img/title.svg";

const Title = (props) => {
  return (
    <div className="container" id="title">
      <h2 className="title-dog">{props.title}</h2>
      <img src={Line} alt="Line" className="title-line" />
    </div>
  );
};

export default Title;
