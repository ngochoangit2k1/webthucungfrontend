import React, { useState, useRef } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./reset.css";
import axios from "axios";
import registerModalError from "../../components/registerModalError/RegisterModalError";
import RegisterModal from "../../components/registerModal/RegisterModal";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [validatePassword, setValidatePassword] = useState(true);

  const params = useParams();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,19}$/;

  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hideOrShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const removePasswordErrorMessage = () => {
    const passwordInputElement = document.querySelector(
      ".validate-input-password"
    );
    const passwordErrorElement =
      passwordInputElement.parentElement.querySelector("p");
    const checkValue = passwordInputElement.value;
    if (!checkValue || !checkValue.match(passwordRegex)) {
      passwordErrorElement.classList.add("error-message");
      passwordErrorElement.innerText =
        "Mật khẩu phải có 8-19 ký tự và bao gồm ít nhất 1 ký tự đặc biệt!";
    } else {
      passwordErrorElement.classList.remove("error-message");
      passwordErrorElement.innerText = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
      const user = {
        id: params.id,
        password: password.current.value,
      };
      if (user.password === "") {
        setValidatePassword(false);
      } else {
        try {
          await axios.post(
            "http://localhost:8800/api/auth/change-password",
            user
          );
          navigate("/login");
        } catch (err) {
        }
      }
    }
  };

  return (
    <div>
      <Container
        fluid
        className="rm-pd l-all-fsz s-all-fsz"
        style={{ height: "100vh" }}
      >
        <Row className="reset-page rm-margin">
          <Col className="reset-page--column">
            <Form
              onSubmit={handleSubmit}
              noValidate
              className="reset-page__reset-form rm-br"
            >
              <div className="reset-page__reset-form--padding">
                <h4 className="fw-b m-fsz" style={{ marginBottom: 15 }}>
                  Welcome!
                </h4>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-b m-all-fsz">Password</Form.Label>
                  <InputGroup className="position-relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                      className={`br-6 m-all-fsz s-all-fsz validate-input validate-input-password
                      ${validatePassword ? "" : "error"}
                      `}
                      required
                      ref={password}
                      onBlur={removePasswordErrorMessage}
                      pattern={passwordRegex}
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
                    <p
                      className="m-all-fsz error-message"
                      style={{ color: "red", marginTop: "4px" }}
                    ></p>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label className="fw-b m-all-fsz">
                    Confirm Password
                  </Form.Label>
                  <InputGroup className="position-relative">
                    <input
                      type={`${showPassword2 ? "text" : "password"}`}
                      placeholder="Confirm your password"
                      className={`br-6 m-all-fsz s-all-fsz validate-input
                      ${validatePassword ? "" : "error"}
                      `}
                      required
                      ref={confirmPassword}
                    />
                    <div
                      className="position-absolute"
                      style={{ right: "10px", zIndex: 10, padding: "11px" }}
                    >
                      {showPassword2 ? (
                        <FaEyeSlash
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword2()}
                        />
                      ) : (
                        <FaEye
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword2()}
                        />
                      )}
                    </div>
                  </InputGroup>
                  <p
                    className="m-all-fsz"
                    style={{ color: "red", marginTop: "4px" }}
                  >{`${
                    validatePassword
                      ? ""
                      : "Mật khẩu và mật khẩu xác nhận không trùng khớp."
                  }`}</p>
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
                >
                  Change Password
                </Button>
                <p style={{color: 'black'}} className="text-center mt-12 m-all-fsz">
                  Already have an Account?{" "}
                  <span className="fw-b">
                    <Link
                      to="/login"
                      className="link-default m-fsz s-fsz"
                      style={{ color: "#c38161" }}
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
