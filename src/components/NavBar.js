import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure, logout } from "../redux/userSlice"
const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  // const logout = async () => {
  //   await axios.post("http://localhost:8800/api/auth/logout");
  //   dispatch({ type: "LOGOUT_SUCCESS", payload: window.localStorage.clear() });
  // };
  // const { currentUser } = useSelector(state => state.user)
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    try {
      localStorage.clear()
      setTimeout(()=>{
        window.location.reload();
    }, 1000);
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  return (
    <div>
      <div className="container-fluid" id="nav">
        <nav className="navbar navbar-expand-lg bg-dark nav-backgroud">
          <div className="container">
            <Link to="/">
              <img src={Logo} alt="Logo" className="navbar-brand logo" />
            </Link>
            <button
              className="navbar-toggler mb-navbar-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mb-navbar-icon"></span>
              <i className="navbar-toggler-icon fa fa-align-justify mb-icon-navbar"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="nav-parents" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    aria-current="page"
                  >
                    Giới Thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/chocanh" className="nav-link">
                    Chó Cảnh
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/meocanh" className="nav-link">
                    Mèo Cảnh
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Đồ Ăn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Phụ Kiện
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Tin Tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/lienhe" className="nav-link">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
              <ul id="nav-parents" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i>
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{ backgroundColor: "#4f4f4f" }}
                  >
                    
                    {user ?(  <li >
                      <a
                        class="dropdown-item"
                        href="/login"
                        style={{ fontSize: "12px" }}
                        onClick={handleLogout}
                      >
                        <i className="ti-share-alt" > Logout</i>
                        {/* <span
                          style={{ color: "#00ffa8" }}
                        >{` ${user.email}`}</span> */}
                      </a>
                     </li>):(<li>
                      <a
                        class="dropdown-item"
                        href="/login"
                        style={{ fontSize: "12px" }}
                      >
                        <i className="ti-user"> Login</i>
                        {/* <span
                          style={{ color: "#00ffa8" }}
                        >{` ${user.username}`}</span> */}
                      </a>
                     </li>)}
                     
                   
                    <li>
                      {/* <a onClick={logout} class="dropdown-item" href="#!">
                        <i
                          className="ti-power-off"
                          style={{ marginRight: "20px" }}
                        ></i>
                        <span style={{ color: "#beff00" }}>SINGOUT</span>
                      </a> */}
                    </li>
                  </ul>
                </li>
                <li className="nav-item" id="nav-search">
                  <Link to="/">
                    <i className="fa fa-search cart-icon"></i>
                  </Link>
                  <div className="search">
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Nhập Vào Đây"
                        className="seach-input"
                      ></input>
                      <button className="search-btn">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </li>

                {/* <li className="nav-item">
                  <Link to="/user">
                    <i className="fa fa-user cart-icon"></i>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart cart-icon"></i>
                  </Link>
                  <span className="cart-quantity">
                    <b>5</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
