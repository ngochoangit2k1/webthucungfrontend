import React from "react";
import CardProductCat from "./CardProductCat";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CatPage.css";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function DogPage(props) {
  const [cardProductCat, setcardProductCat] = useState([]);
  const [cardProductPK, setcardProductPK] = useState([]);

  useEffect(() => {
    axios
      .get(`https://web-thu-cung.herokuapp.com/pet/dogs`)
      .then((data) => setcardProductCat(data.data))
      .catch((err) => console.log(err + "call api error"));
  }, []);

  useEffect(() => {
    axios
      .get(`https://web-thu-cung.herokuapp.com/pet/product-Phu-Kien`)
      .then((data) => setcardProductPK(data.data))
      .catch((err) => console.log(err + "call api error"));
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="container-fluid all__home__page"
        style={{ marginTop: "100px" }}
      >
        <div
          style={{ width: "92%", marginTop: "50px" }}
          className="container-fluid"
        >
          {/* top */}
          <div className="row div__top__homepage">
            {/*  */}
            <div style={{ lineHeight: "38px" }} className="col-xl-7 tc-home">
              TRANG CHỦ / <b>CHÓ CẢNH</b>
            </div>

            {/*  */}
            <div className="col-xl-5">
              <div className="row">
                <div
                  style={{ width: "180px" }}
                  className="col-xl-5 search__selects"
                >
                  <p
                    className="tc-display-none"
                    style={{ lineHeight: "40px", color: "#000" }}
                  >
                    Xem tất cả{" "}
                    <b style={{ color: "red" }}>{/* {cardsData.length} */}</b>{" "}
                    kết quả
                  </p>
                </div>

                <div className="col-xl-7">
                  <div
                    className="tb-list-product"
                    style={{ width: "82%", borderRadius: "0px" }}
                  >
                    <select
                      className="form-select tc-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Thứ tự mặc định</option>
                      <option value="2">Thứ tự thoe mức độ phổ biến</option>
                      <option value="3">thứ tự theo điểm đánh giá</option>
                      <option value="3">thứ tự theo sản phẩm mới</option>
                      <option value="3">thứ tự theo giá: thấp đến cao</option>
                      <option value="3">thứ tự theo giá cao xuống thấp</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div style={{ marginTop: "40px" }} className="row">
            <div className="col-xl-3">
              <p style={{ color: "#000" }} className="tb-category">
                <b>DANH MỤC SẢN PHẨM</b>
              </p>
              <p
                className="tb-display-none"
                style={{
                  width: "28px",
                  height: "3px",
                  background: "#0000001A",
                }}
              ></p>

              <div className="list-products tb-display-none">
                <ul className="list-group list-group-flush">
                  <Link to="/chocanh" className="list-group-item">
                    Chó cảnh
                  </Link>
                  <Link to="/meocanh" className="list-group-item">
                    Mèo cảnh
                  </Link>
                </ul>
              </div>

              <div className="tc-display-none">
                <p style={{ marginTop: "20px", color: "#000" }}>
                  <b>LỌC THEO GIÁ</b>
                </p>
                <p
                  style={{
                    width: "28px",
                    height: "3px",
                    background: "#0000001A",
                  }}
                ></p>
                <input
                  style={{ width: "95%" }}
                  type="range"
                  min="0"
                  max="100"
                  id="slider"
                  value="0"
                ></input>

                <div className="row tc-display-none">
                  <div
                    style={{
                      cursor: "pointer",
                      width: "55px",
                      height: "32px",
                      background: "#666666",
                      borderRadius: "20px",
                      marginLeft: "4px",
                    }}
                    className="col-xl-1"
                  >
                    <p
                      style={{
                        lineHeight: "32px",
                        marginLeft: "2px",
                        fontSize: "14px",
                        color: "#fff",
                      }}
                    >
                      <b>LỌC</b>
                    </p>
                  </div>
                  <p style={{ color: "#000" }} className="col">
                    Giá: <b>3,089,000đ</b> - <b>14.289.000đ</b>
                  </p>
                </div>
              </div>

              <div className="tc-display-none">
                <p style={{ marginTop: "20px", color: "#000" }}>
                  <b>SẢN PHẨM</b>
                </p>
                <p
                  style={{
                    width: "28px",
                    height: "3px",
                    background: "#0000001A",
                  }}
                ></p>

                <div id="list-product">
                  {cardProductPK.map((data) => (
                    <ul key={data._id} className="product-dog">
                      <li className="dog-shop">
                        <div className="row">
                          <div className="col-xl-3 pet">
                            <img src={data.imgPK} alt="" />
                          </div>
                          <div className="col-xl-9 pet-body">
                            <p>{data.namePK}</p>
                            <b>{data.pricePK}đ</b>
                          </div>
                        </div>
                      </li>
                      <hr />
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-xl-9 tc-card-productdog">
              <div className="row">
                <div className="card__product__home">
                  {cardProductCat.map((data) => (
                    <CardProductCat
                      key={data._id}
                      productid={data._id}
                      category={data.category}
                      imgCard={data.image}
                      title={data.title}
                      price={data.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
