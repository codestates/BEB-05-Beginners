import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConfirmPw, setInputConfirmPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputConfirmPw = (e) => {
    setInputConfirmPw(e.target.value);
  }
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
        user_confirmpw: inputConfirmPw,
      },
      { "content-type": "application/json", withCredentials: true }
    );
  };
  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={4}>
            <Card className="shadow-lg" style={{width:"20rem"}}>
              <Card.Header className="p-2" style={{ backgroundColor: "#98cdca" }}>
                <h4 style={{ color: "white" }}>Join us today!!</h4>
              </Card.Header>

              <Card.Body style={{backgroundColor: "#f7f7f7"}}>
                <Form>
                  <Form.Group className="mb-3" controlId="formId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ color: "grey" }}
                    placeholder="Enter your ID"
                    onChange={handleInputId}
                  />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      style={{ color: "grey" }}
                      placeholder="Enter your password"
                      onChange={handleInputPw}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      style={{ color: "grey" }}
                      placeholder="Confirm your password"
                      onChange={handleInputConfirmPw}
                    />
                    </Form.Group>
                  <Form.Group controlId="signupButton">
                    <Button className="shadow-lg hover"variant="primary" onClick={onClickSignup}>
                      Signup
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
