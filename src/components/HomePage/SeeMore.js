import React from "react";

const SeeMore = (props) => {
  return (
    <div className="container" id="seemore">
      <button
        onClick={props.onClick}
        type="button"
        className="btn btn-primary seemore-btn"
      >
        Xem Thêm
      </button>
    </div>
  );
};

export default SeeMore;
