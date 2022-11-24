import React from "react";
import { Link } from "react-router-dom";

const Information = (props) => {
  return (
    <div className="col-xl-4 col-md-4 col-sm-12">
      <div className="card" id="information">
        <img
          src={props.image}
          className="card-img-top information-img"
          alt={props.title}
        />
        <div className="card-body" id="information-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.des}</p>
          <Link to="/go" className="btn btn-primary">
            Xem Thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
