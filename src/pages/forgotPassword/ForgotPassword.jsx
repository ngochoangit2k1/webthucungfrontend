import React, { useContext, useRef, useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import RegisterModal from "../../components/registerModal/RegisterModal";
import  {Links} from "../../l";

export default function ForgotPassword() {
  const [authEmail, setAuthEmail] = useState(false);

  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: email.current.value,
    };
    try {
      const res = await axios.post(
        `${Links.links}api/auth/reset-password`,
        userInfo
      );
      setAuthEmail(true);
    } catch (err) {
      setAuthEmail(false);
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
              className="forgot-page__register-form rm-br"
            >
              <div className="forgot-page__register-form--padding">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="back-arrow" style={{ marginBottom: "15px" }}>
                    <ArrowBackOutlinedIcon
                      className="icon-arrow"
                      fontSize="medium"
                    />
                  </div>
                </Link>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-b m-all-fsz">Email </Form.Label>
                  <Form.Control
                    className="br-6 m-all-fsz s-all-fsz"
                    type="text"
                    placeholder="Enter your email"
                    required
                    ref={email}
                  />
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
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      {authEmail && (
        <RegisterModal authEmail={authEmail} setAuthEmail={setAuthEmail} />
      )}
    </div>
  );
}
