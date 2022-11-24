import React, { useEffect } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "./alertSuccess.css";
import axios from "axios";

const AlertSuccess = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const id = searchParam.get("id");

  useEffect(() => {
    const query = async () => {
      await axios.post("http://localhost:8800/api/auth/register", {id});
    };
    query();
  }, [id]);

  return (
    <Container>
      <Row>
        <Alert className="alertSuccess">
          <Alert.Heading>Welcome to my Website!!</Alert.Heading>
          <p>Your account has been actived. Enjoy the moment right now!</p>
          <hr />
          <Link to="/login">
            <Button
              className="hoverButton"
              style={{
                border: "none",
                backgroundColor: "#c38161",
              }}
              variant="primary"
            >
              Login now!
            </Button>
          </Link>
        </Alert>
      </Row>
    </Container>
  );
};

export default AlertSuccess;
