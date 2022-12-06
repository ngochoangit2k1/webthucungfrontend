import React, { useContext, useRef, useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import LoginModal from "../../components/loginModal/LoginModal";
import { loginStart, loginSuccess, loginFailure, logout } from "../../redux/userSlice"
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);
  const [error, setError] = useState("");
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { user, dispatch, isFetching } = useContext(AuthContext);
  axios.defaults.withCredentials = true;

  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    // const res = await axios.post("auth/signin", { username, password })
    // dispatch(loginSuccess(res.data))
    // console.log(res.data)
    // e.replace("http://localhost:3001")

    try {
      const res = await axios.post("https://webthucungapi.onrender.com/api/auth/signin", { username, password })
      dispatch(loginSuccess(res.data))
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data)
      e.replaceState("http://localhost:3001")
    } catch (error) {
     
      console.log(error)
      dispatch({ type: "LOGIN_FAILURE", payload: error });
      setLoginFailure(true);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Container
        fluid
        className="rm-pd l-all-fsz s-all-fsz"
        style={{ height: "100vh" }}
      >
        <img
          className="login-page__images--tl"
          src="./assets/images/dog-6.jpg"
          alt="login background tablet"
        />
        <img
          className="login-page__images--mb"
          src="./assets/images/dog-3.jpg"
          alt="login background mobile"
        />
        <img
          className="login-page__images"
          src="./assets/images/background-signin-signup.jpg"
          alt="login background pc"
        />
        <Row className="login-page rm-margin">
          <Col className="rm-pd rm-col"></Col>
          <Col className="d-flex justify-content-center align-items-center rm-pd rm-margin">
            <Form
              onSubmit={handleSubmit}
              className="login-page__register-form rm-br"
            >
              <div className="login-page__register-form--padding">
                <h4 className="fw-b m-fsz" style={{ marginBottom: "25px" }}>
                  Welcome back!
                </h4>
                {/* <h3 className="fw-b m-fsz">Sign in to</h3>
                <p className="fw-b m-fsz">Enjoy the moment.</p> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-b m-all-fsz">Username</Form.Label>
                  <Form.Control
                    className="br-6 m-all-fsz s-all-fsz"
                    type="text"
                    placeholder="Enter your username"
                    required
                    onChange={e => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-b m-all-fsz">Password</Form.Label>
                  <InputGroup className="position-relative">
                    <Form.Control
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                      className="br-6 m-all-fsz s-all-fsz"
                      required
                      onChange={e => setPassword(e.target.value)}
                      style={{ height: "50px" }}
                    />
                    <div
                      className="position-absolute"
                      style={{ right: "10px", zIndex: 10, padding: "11px" }}
                    >
                      {showPassword ? (
                        <FaEyeSlash
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword()}
                        />
                      ) : (
                        <FaEye
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword()}
                        />
                      )}
                    </div>
                  </InputGroup>
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="br-6 btn m-all-fsz s-all-fsz"
                  style={{
                    width: "100%",
                    padding: "12px",
                    margin: "12px 0 6px 0",
                    backgroundColor: "#c38161",
                    border: "none",
                  }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                  className="forgot"
                >
                  <Link
                    to="/reset-password"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="register-text m-fsz-22">Forgot password?</p>
                  </Link>
                </div>
                <div className="login-page__register-form--bottom">
                  <p className="register-text text-center m-fsz-22">
                    Don't have an Account?{" "}
                    <span className="fw-b">
                      <Link
                        to="/register"
                        className="link-default m-fsz s-fsz"
                        style={{ color: "#c38161" }}
                      >
                        Register!
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className={isFetching ? "openModal" : ""}>
        {isFetching && `Wait a second...`}
        {isFetching && (
          <CircularProgress style={{ color: "white", marginLeft: 5 }} />
        )}
      </div>

      {loginFailure && (
        <LoginModal
          loginFailure={loginFailure}
          setLoginFailure={setLoginFailure}
        />
      )}
    </div>
  );
}
