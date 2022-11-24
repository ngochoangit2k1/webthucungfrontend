import React from "react";
import { Link } from "react-router-dom";

const SimilarProduct = (props) => {
  return (
    <div>
      <h2 className="similar-product">Sản Phẩm tương tự</h2>
      <div className="col-xl-3 col-md-6 col-sm-12" id="cart-similar">
        <div id="cart">
          <div className="cart-header">
            <img
              src="http://mauweb.monamedia.net/dogcatshop/wp-content/uploads/2018/04/011-300x300.jpg"
              alt="Chó Bắc Cực"
              className="cart-img"
            />
            <Link to="/cart">
              <i
                className="fa fa-cart-plus icon-cart"
                title="Thêm Vào Giỏ Hàng"
              ></i>
            </Link>
          </div>
          <div className="cart-title">
            <p className="cart-span">Chó Cảnh</p>
            <Link to="/cho" className="cart-name">
              Chó Bắc Cực
            </Link>
            <span className="cart-price">9,025,800 ₫</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
