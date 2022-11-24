import React from "react";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";

const Banner = () => {
  return (
    <div className="container" id="banner">
      <div className="row">
        <div className="col-xl-6 col-md-6 col-sm-12 banner-col">
          <img src={Banner1} alt="Banner1" className="banner-img" />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 banner-col">
          <img src={Banner2} alt="Banner1" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
