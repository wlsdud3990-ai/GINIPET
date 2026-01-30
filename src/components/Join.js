import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Join.css';

function Join() {
  // 1️⃣ 폼 상태
  const [form, setForm] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    tel: '',
  });

  // 2️⃣ 메시지 상태 (하나로 통합)
  const [message, setMessage] = useState(''); //메시지 출력
  const [isSuccess, setIsSuccess] = useState(false); //true, false값으로 색상을 구분 

  // 3️⃣ 아이디 중복확인 여부
  const [usernameChecked, setUsernameChecked] = useState(false);

  const navigate = useNavigate();

  // 4️⃣ 입력값 변경
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // 아이디 변경 시 중복확인 다시 필요
    if (e.target.name === 'username') {
      setUsernameChecked(false);
    }

    setMessage('');
  };

  // 5️⃣ 아이디 중복확인
  const checkUsername = () => {
    if (!form.username.trim()) {
      setMessage('아이디를 입력하세요.');
      setIsSuccess(false);
      return;
    }

    //주소 변경 
    axios
      .get(`http://localhost:9070/check-username/${form.username}`)
      .then(res => {
        if (res.data.exists) {
          setMessage('이미 사용 중인 아이디입니다.');
          setIsSuccess(false);
          setUsernameChecked(false);
        } else {
          setMessage('사용 가능한 아이디입니다.');
          setIsSuccess(true);
          setUsernameChecked(true);
        }
      })
      .catch(() => {
        setMessage('중복 확인 중 오류가 발생했습니다.');
        setIsSuccess(false);
        setUsernameChecked(false);
      });
  };

  // 6️⃣ 회원가입
  const handleSubmit = e => {
    e.preventDefault();

    if (!usernameChecked) {
      setMessage('아이디 중복확인을 해주세요.');
      setIsSuccess(false);
      return;
    }

    if (form.password !== form.password2) {
      setMessage('비밀번호가 일치하지 않습니다.');
      setIsSuccess(false);
      return;
    }

     // 비밀번호가 일치하면 서버측으로 내용을 전송 
     //주소만 변경
    axios
      .post('http://localhost:9070/register', form)
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      })
      .catch(err => {
        if (err.response?.status === 409) {
          setMessage('이미 존재하는 아이디입니다.');
        } else {
          setMessage('회원가입 실패 (서버 오류)');
        }
        setIsSuccess(false);
      });
  };

  return (
    <main className="join-page">
      <section className="join-container">
        <h2 className="join-title">회원가입</h2>

        <form className="join-form" onSubmit={handleSubmit}>
          {/* 아이디 */}
          <div className="join-row">
            <label>아이디</label>
            <div className="join-id-box">
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={checkUsername}>
                중복확인
              </button>
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="join-row">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="join-row">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="password2"
              value={form.password2}
              onChange={handleChange}
              required
            />
          </div>

          {/* 이메일 */}
          <div className="join-row">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 전화번호 */}
          <div className="join-row">
            <label>전화번호</label>
            <input
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              required
            />
          </div>

          {/* 메시지 출력 */}
          {message && (
            <p className={`join-msg ${isSuccess ? 'success' : 'error'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="join-submit">
            회원가입
          </button>
        </form>
      </section>
    </main>
  );
}

export default Join;
