import React from "react";
import SimilarProduct from "./SimilarProduct";

const NewestWrite = () => {
  return (
    <div className="container" id="product">
      <div className="row">
        <div className="col-xl-3 col-md-3 col-sm-12">
          <div className="product-left">
            <b className="product-title">Bài viết mới nhất</b>
            <div className="product-line"></div>
            <div className="product-list">
              <div className="product-single">
                <div className="row">
                  <div div className="col-xl-4 col-md-3 col-sm-12">
                    <img
                      src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                      alt=""
                      className="product-img-news"
                    />
                  </div>
                  <div className="col-xl-8 col-md-9 col-sm-12">
                    <p className="product-content">
                      Duis luctus elit nisi, et cursus magna pellentesque non.
                    </p>
                  </div>
                </div>
                <hr className="divider" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-md-12 col-sm-12" id="tabs-news">
          <div id="tsum-tabs">
            <input id="tab1" type="radio" name="tabs" checked />
            <label for="tab1">Mô Tả</label>

            <input id="tab2" type="radio" name="tabs" />
            <label for="tab2">Đánh Giá</label>

            <input id="tab3" type="radio" name="tabs" />
            <label for="tab3">Chính Sách Nổi Bật</label>

            <section id="content1">
              <p>
                Chó Bully, hay American Bully (Bully Mỹ), giống chó đang lên cơn
                sốt tại Mỹ, châu Âu, Thái Lan và hiện đã lan tới Việt Nam. Đây
                là một giống chó mới xuất hiện từ năm 1995, là hậu duệ trực tiếp
                của chó Pitbull nhưng có dáng vẻ hầm hố và cơ bắp hơn, tuy
                nhiên, Bully lại có tính khí hiền lành hơn nhiều so với pitbull.
                Hiện Bully đang rất được ưa chuộng tại Việt Nam và được bán ở
                nhiều mức giá khác nhau.
              </p>
            </section>

            <section id="content2">
              <p>Đánh Giá (0)</p>
              <p>Chưa có đánh giá nào.</p>
            </section>

            <section id="content3">
              <ul>
                <li>Chính sách bảo hành của riêng mỗi hãng:</li>
                <li>CASIO: Bảo hành chính hãng máy 1 năm, pin 1,5 năm</li>
                <li>
                  CITIZEN: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm
                </li>
              </ul>
            </section>
          </div>
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default NewestWrite;
