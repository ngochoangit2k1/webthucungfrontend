import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Đăng ký nhận bản tin của chúng tôi</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Đăng Ký
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              Trang Web hoạt động hơn 20 năm, tin cậy, chất lượng, uy tín hàng
              đầu Việt Nam
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">ĐIỀU HƯỚNG</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Điểm tin hữu ích
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">SẢN PHẨM</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Chó
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Mèo
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Đồ Ăn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">HỖ TRỢ KHÁCH HÀNG</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Thẻ Thành Viên
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Hướng Dẫn Mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Phản Hồi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">THÔNG TIN LIÊN HỆ</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Đại học Đông Á, 33 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng.
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      0123-456-789
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      thucung@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Nhóm Người Nuôi Mèo
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
