import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickSignup = () => {
    // 유효성 검사중 하나라도 만족하지 못할 때(버튼 비활성화 상태), 버튼 클릭하면 경고창이 뜬다.
    // if (!isValidInputId || !isValidPassword) {
    //  alert('빈 칸을 작성해 주세요.');
    // }
    console.log("click signup");
    axios.post(
      "http://localhost:8080/signup",
      {
        user_id: inputId,
        user_password: inputPw,
      },
      { "content-type": "application/json", withCredentials: true }
    );
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Check</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onClickSignup}>
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
