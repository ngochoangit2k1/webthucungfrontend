import React from "react";

const Bonus = (props) => {
  return (
    <div className="col-xl-3 col-md-6 col-12">
      <div className="bonus-container">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-6">
            <img src={props.img} alt="rocket" />
          </div>
          <div className="col-xl-6 col-md-6 col-6">
            <h1>{props.title}</h1>
            <p>{props.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
