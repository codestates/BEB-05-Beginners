import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = ({ logInHandler }) => {
  const URL = process.env.REACT_APP_URL;
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
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={4}>
            <Card className="shadow-lg" style={{width:"20rem"}}>
              <Card.Header className="p-2" style={{ backgroundColor: "#98cdca" }}>
                <h4 style={{ color: "white" }}>Login</h4>
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
                      placeholder="Password"
                      onChange={handleInputPw}
                    />
                  </Form.Group>

                  <Form.Group controlId="signupButton">
                    <Button className="shadow-lg hover" variant="primary" onClick={onClickLogin}>
                      Login
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

export default Login;
