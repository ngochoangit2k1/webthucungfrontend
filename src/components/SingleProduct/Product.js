import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductDetailContext } from "../HomePage/store/Context";

const Product = () => {
  const { PKTT } = useContext(ProductDetailContext);
  const [cart, setCats] = useState([]);
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get(
        `/pet/cart-product/products_by_id?id=${path}`
      )
      .then((res) => {
        setCats(res.data.productDetail);
      });
  }, [path]);
  console.log(cart);
  return (
    <div>
      <div id="mt-top"></div>
      <div className="container" id="product">
        <div className="row">
          <div className="col-xl-3 col-md-3 col-sm-12">
            <div className="product-left">
              <b className="product-title">Sản Phẩm</b>
              <div className="product-line"></div>
              <div className="product-list">
                <div className="product-single">
                  <div className="product-single">
                    {PKTT.map((lists) => (
                      <div className="row">
                        <div div className="col-xl-4 col-md-3 col-sm-12">
                          <img
                            src={lists.imgPK}
                            alt=""
                            className="product-img"
                          />
                        </div>
                        <div className="col-xl-8 col-md-9 col-sm-12">
                          <p className="product-content">{lists.namePK}</p>
                          <b className="product-price">{lists.pricePK} ₫</b>
                        </div>
                        <hr className="divider" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-4">
                <div className="img-product" style={{ background: "red" }}>
                  <img src={cart.image} alt={cart.title} />
                </div>
              </div>
              <div className="col-xl-8">
                <div className="product-page-content">
                  <span>
                    Trang Chủ / <i>{cart.type}</i>
                  </span>
                  <h1>{cart.title}</h1>
                  <div className="product-line"></div>
                  <b>{cart.price}đ</b>
                  <p>
                    Chó Bully, hay American Bully (Bully Mỹ), giống chó đang lên
                    cơn sốt tại Mỹ, châu Âu, Thái Lan và hiện đã lan tới Việt
                    Nam. Đây là một giống chó mới xuất hiện từ năm 1995, là hậu
                    duệ trực tiếp của chó Pitbull nhưng có dáng vẻ hầm hố và cơ
                    bắp hơn, tuy nhiên, Bully lại có tính khí hiền lành hơn
                    nhiều so với pitbull. Hiện Bully đang rất được ưa chuộng tại
                    Việt Nam và được bán ở nhiều mức giá khác nhau.
                  </p>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="5"
                    className="product-input"
                  />
                  <button type="button" className="btn btn-success">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
