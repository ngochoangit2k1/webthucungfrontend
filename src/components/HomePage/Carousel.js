import React from "react";
import Pet1 from "../../assets/img/pet1.jpg";
import Pet2 from "../../assets/img/pet2.jpg";
import Pet3 from "../../assets/img/pet3.jpg";

const Carousel = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner carousel-content">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Pet1} className="d-block w-100" alt="Pet1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>CHESTER IS A CHAMPION DOG</h5>
              <p>
                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condim entum a. Aliquam condimentum mattis neque
                sed pretium.
              </p>
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Pet2} className="d-block w-100" alt="Pet2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>OUR STORY FOOD FACTORY</h5>
              <p>
                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condim entum a. Aliquam condimentum mattis neque
                sed pretium .
              </p>
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pet3} className="d-block w-100" alt="Pet3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>OUR STORY NEW ARRIVALS</h5>
              <p>
                Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condim entum a. Aliquam condimentum mattis neque
                sed pretium.
              </p>
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
