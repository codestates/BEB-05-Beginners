import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onClickLogin = () => {
    console.log('click login')
    console.log('ID:', inputId)
    console.log('PW:', inputPw)
    axios.post('https://5109-1-241-106-85.jp.ngrok.io/login',
      {
      'user_id': inputId,
      'user_password': inputPw,
      },
      { "content-type": "application/json", withCredentials: true },
    )
      .then(res => {
        console.log(res)
        console.log('res.data.user_id:', res.data.user_id)
        if (res.data.user_id === undefined) {
          alert('입력하신 id의 사용자가 없습니다.')
        } else if (res.data.user_id === null) {
          alert('입력하신 비밀번호가 일치하지 않습니다.')
        } else if (res.data.user_id === inputId) {
          console.log('============', '로그인 성공!')
          //sessionStorage.setItem('user_id', inputId)
        }
        document.location.href = '/'
      })
    .catch()
    
  
  }
    // useEffect(() => {
    //   axios.get('/login')
    //     .then(res => console.log(res))
    //     .catch()
    // }, [])
  
  const onClickSignup = () => {
    document.location.href = '/signup'
  }
  

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor='input_id'>ID : </label>
        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor='input_pw'>PW : </label>
        <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
      </div>
      <div>
        <button type='button' onClick={onClickLogin}>Login</button>
        <button type='button' onClick={onClickSignup}>회원가입</button>
      </div>
      
    </div>
  )
}
export default Login;