import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NavBarElements from "./components/NavBar/NavBarElements";
import Article from "./screens/Article";
import NFT from "./screens/NFT";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Mypage from "./screens/Mypage";
import PostArticle from "./screens/PostArticle";
import MintNFT from "./screens/MintNFT";
import { useState, useEffect } from "react";
import axios from "axios";
import EditArticle from "./screens/EditArticle";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const logOutHandler = () => {
    axios
      .post("http://localhost:8080/logout", null, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        sessionStorage.removeItem("user_id");
        setIsLogin(false);
        window.location.href = "/";
      });
  };
  const logInHandler = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      // sessionStorage에 user_id라는 key값으로 저장된 값이 없다면
    } else {
      // sessionStorage에 user_id라는 key값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  }, []);

  return (
    <Router>
      <NavBarElements isLogin={isLogin} logOutHandler={logOutHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/Login" element={<Login logInHandler={logInHandler} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Post" element={<PostArticle />} />
        <Route path="/Mint" element={<MintNFT />} />
        <Route path="/Edit" element={<EditArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
