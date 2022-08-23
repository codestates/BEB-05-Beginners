import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
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
  // 비밀번호 특수문자 검사를 위한 정규식표현
  //const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  // 특수문자 1자 이상, 전체 5자 이상일것.
  //const isValidPassword = password.length >= 5 && specialLetter >= 1;

  // 회원가입 버튼 활성화하기
  // inputId의 value가 1자 이상이 되어야 한다.
  //const isValidInputId = inputId.length >= 1

  // 모든 유효성 검사가 true일 때 getIsActive함수 작동
  //const getIsActive = isValidPassword && isValidInputId === true;

  return (
    <div>
      <h2>회원가입</h2>
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
        <button type="button" onClick={onClickSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
