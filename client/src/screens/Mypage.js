import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Mypage = () => {
  const [myInfo, setMyInfo] = useState({});
  const [transferAddress, sendTransferAddress] = useState("");

  const user_id = sessionStorage.getItem("user_id");

  const handleInputAddress = (e) => {
    sendTransferAddress(e.target.value);
  };

  const onClickTransferToken = () => {};

  const onClickEthFaucet = () => {};

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
    <div>
      <h1>Hello {myInfo.user_id}!</h1>
      <p>Your address: {myInfo.user_address}</p>
      <p>Your token: {myInfo.user_token}</p>
      <p>Your eth: {myInfo.user_eth}</p>
      <p>Date of Sign up: {myInfo.created_at}</p>
      <br />
      <br />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Transfer Token</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Address"
            onChange={handleInputAddress}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onClickTransferToken}>
          Transfer
        </Button>
      </Form>

      <br />
      <br />
      <Button variant="primary" type="button" onClick={onClickEthFaucet}>
        ETH Faucet
      </Button>
    </div>
  );
};

export default Mypage;
