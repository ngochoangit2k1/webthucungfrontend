import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./registerModal.css";

const RegisterModal = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal className="errorModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>Chúng tôi đã gửi mail tới tài khoản gmail của bạn. Vui lòng kiểm tra email!</Modal.Body>
        <Modal.Footer>
          <Button
            className="hoverButton"
            style={{
              border: "none",
            }}
            variant="primary"
            onClick={() => {
              setShow(false);
              props.setAuthEmail(!props.authEmail);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
