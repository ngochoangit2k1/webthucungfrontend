import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./loginModal.css";

const LoginModal = (props) => {
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
          Có vẻ như thông tin đăng nhập không chính xác hoặc tài khoản của bạn
          chưa được kích hoạt! Vui lòng thử lại!
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="hoverButton"
            style={{
              border: "none",
            }}
            variant="danger"
            onClick={() => {
              setShow(false);
              props.setLoginFailure(!props.loginFailure);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
