import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./registerModalError.css";

const RegisterModalError = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal className="errorModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oops!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Có vẻ như <span>tên tài khoản</span> hoặc <span>email</span> đã tồn
          tại hoặc không chính xác! Vui lòng kiểm tra lại.
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="hoverButton"
            style={{
              backgroundColor: "#c38161",
              border: "none",
            }}
            variant="secondary"
            onClick={() => {
              setShow(false);
              props.setSignupFailure(!props.signupFailure);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModalError;
