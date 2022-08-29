import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Table,
  Form,
  Button,
} from "react-bootstrap";

const Mypage = () => {
  const URL = process.env.REACT_APP_URL;
  const [myInfo, setMyInfo] = useState({});
  const [transferAddress, sendTransferAddress] = useState("");
  const [amount, setAmount] = useState("");

  const user_id = sessionStorage.getItem("user_id");

  const handleInputAddress = (e) => {
    sendTransferAddress(e.target.value);
  };
  const handleInputAmount = (e) => {
    setAmount(e.target.value);
  };
  const onClickTransferToken = () => {
    axios.post(
      "http://localhost:8080/transfer",
      {
        user_id: myInfo.user_id,
        toAddress: transferAddress,
        tokenAmount: amount,
      },
      { "content-type": "application/json", withCredentials: true }
    );
    window.location.href = "/mypage";
  };

  const onClickEthFaucet = () => {
    axios.post(
      "http://localhost:8080/faucet",
      {
        user_id: myInfo.user_id,
      },
      { "content-type": "application/json", withCredentials: true }
    );
    window.location.href = "/mypage";
  };

  const getUserInfo = async () => {
    const info = await axios.get("http://localhost:8080/userinfo", {
      withCredentials: true,
    });
    setMyInfo(info.data.data[0]);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">Hello, {myInfo.user_id}!</h3>
            <p style={{ color: "grey" }}>Overview</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Your address: </th>
                  <td>{myInfo.user_address}</td>
                </tr>
                <tr>
                  <th>Your token: </th>
                  <td>{myInfo.user_token}</td>
                </tr>
                <tr>
                  <th>Your eth: </th>
                  <td>{myInfo.user_eth}</td>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
        <Button variant="primary" type="button" onClick={onClickEthFaucet}>
          ETH Faucet
        </Button>
        <>
          <InputGroup className="mt-3">
            <InputGroup.Text
              style={{ color: "#545b8c", textDecoration: "bold" }}
            >
              ☄️Transfer Token
            </InputGroup.Text>
            <Form.Control
              size="md"
              type="number"
              placeholder="Token Amount"
              onChange={handleInputAmount}
            />
            <Form.Control
              size="md"
              type="text"
              placeholder="Recipient's address"
              onChange={handleInputAddress}
            />
            <Button
              className="p-2"
              size="md"
              variant="primary"
              onClick={onClickTransferToken}
            >
              Transfer
            </Button>
          </InputGroup>
        </>
      </Container>
    </>
  );
};

export default Mypage;
