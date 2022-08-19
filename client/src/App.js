import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import MyPage from "./pages/MyPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail' element={<DetailPage />} />
          <Route path=':id' />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
