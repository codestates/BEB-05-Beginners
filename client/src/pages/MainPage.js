import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import POSTlist from '../components/POSTlist';

export default function MainPage() {
  // 로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
      // sessionStorage에 user_id라는 key값으로 저장된 값이 없다면
      console.log('isLogin?:', isLogin)
    } else {
      // sessionStorage에 user_id라는 key값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin?:', isLogin)
    }
  }, [isLogin])
  return (
    <div>
      {isLogin ?
        // POSTlist와 게시글 작성 버튼이 보인다.
        <POSTlist /> :
        <Login />
      }
    </div>
  )
}