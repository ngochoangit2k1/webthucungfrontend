import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Doan = ({ axiosJWT }) => {
  const { user, dispatch, isFetching } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const navigate = useNavigate();

  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout");
    dispatch({ type: "LOGOUT_SUCCESS", payload: window.localStorage.clear() });
    navigate("/login");
  };
  console.log(user);
  const handleClick = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:8800/api/users", {
        headers: { Authorization: user.accessToken },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
      if (err.response.status === 403) {
        setError("Bạn không có quyền");
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleClick}>Get All Users</button>
      <button onClick={logout}>Log out</button>
      <h3>{error}</h3>
    </div>
  );
};

export default Doan;
