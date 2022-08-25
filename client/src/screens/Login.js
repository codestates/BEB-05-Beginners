import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = ({ logInHandler }) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(
        "http://localhost:8080/login",
        {
          user_id: inputId,
          user_password: inputPw,
        },
        { "content-type": "application/json", withCredentials: true }
      )
      .then((res) => {
        console.log(res);

        if (res.data.message === "Login success!") {
          logInHandler();
          sessionStorage.setItem("user_id", inputId);
          window.location.href = "/";
        } else {
          alert("로그인 실패");
        }
        // document.location.href = "/";
      })
      .catch((error) => {
        alert("로그인 실패");
      });
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Id"
            onChange={handleInputId}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputPw}
          />
        </Form.Group>

        <Button variant="primary" onClick={onClickLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
