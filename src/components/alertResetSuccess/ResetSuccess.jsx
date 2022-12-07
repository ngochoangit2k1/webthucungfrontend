import React, { useEffect } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "./resetSuccess.css";
import axios from "axios";
import  {Links} from "../../l";

const ResetSuccess = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const id = searchParam.get("id");

  useEffect(() => {
    const query = async () => {
      await axios.post(`${Links.links}api/auth/reset-password`, { id });
    };
    query();
  }, [id]);


  return (
    <Container>
      <Row>
        <Alert className="alertSuccess">
          <Alert.Heading>Welcome back to my Website!!</Alert.Heading>
          <p>Click on the button to reset password.</p>
          <hr />
          <Link to={`/reset/${id}`}>
            <Button
              className="hoverButton"
              style={{
                border: "none",
                backgroundColor: "#c38161",
              }}
              variant="primary"
            >
              Reset password now!
            </Button>
          </Link>
        </Alert>
      </Row>
    </Container>
  );
};

export default ResetSuccess;
