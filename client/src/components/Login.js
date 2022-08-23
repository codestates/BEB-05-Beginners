import React, { useState } from "react";
import axios from "axios";

function Login({ loginHandler }) {
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
          loginHandler();
          sessionStorage.setItem("user_id", inputId);
        } else {
          alert("로그인 실패");
        }
        // document.location.href = "/";
      })
      .catch();
  };
  // useEffect(() => {
  //   axios.get('/login')
  //     .then(res => console.log(res))
  //     .catch()
  // }, [])

  const onClickSignup = () => {
    document.location.href = "/signup";
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
        <button type="button" onClick={onClickSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
}
export default Login;
