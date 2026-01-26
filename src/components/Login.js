import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Login.module.css'; // <- CSS 모듈 import

function Login(props) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:9070/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', form.username);
        alert('로그인 성공 메인페이지로 이동합니다.');
        navigate('/');
      })
      .catch(err => {
        setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
      });
  }

  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginBox}>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="radio" id="member" name="memberGroup" />
            <label htmlFor="member">회원</label>
            <input type="radio" id="nomember" name="memberGroup" />
            <label htmlFor="nomember">비회원</label>
          </p>
          <p>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디"
              onChange={handleChange}
              value={form.username}
              required
            />
          </p>
          <p>
            <label htmlFor="password">패스워드</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="패스워드"
              onChange={handleChange}
              value={form.password}
              required
            />
          </p>
          <p>
            <input type="checkbox" id="username_check" />
            <label htmlFor="username_check">아이디 저장</label>
          </p>
          <p>
            <button type="submit">로그인</button>
          </p>
          <p>
            <Link to='/id_search'>아이디 찾기</Link>
            <Link to='/pw_search'>비번 찾기</Link>
            <Link to='/Join'>회원가입</Link>
          </p>
          {error && <p className={styles.errorMsg}>{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default Login;
