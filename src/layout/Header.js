import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

function Header(props) {
  //1. 상태변수함수 
  const [menuOpen, setMenuOpen] = useState(false);
  
  //로컬 저장소에 있는 아이디 값을 저장 
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  // localStorage.getItem('token'); //토큰 가져오기
  // localStorage.removeItemItem('token'); //토큰 삭제

  // 로그아웃 버튼 클릭 시 실행되는 함수 
  const handleLogout=()=>{
    localStorage.removeItem('token'); //기존 로그인 데이터 삭제 
    localStorage.removeItem('username'); //사용자 아이디 데이터 삭제 
    setMenuOpen(false);     
    navigate('/'); //메인 페이지로 이동하기 

    window.location.reload(); //상태 갱신을 위해 새로고침(선택)
  };

  return (
      <header className="header">
        <h1>
            <Link to="/" title="메인페이지로 바로가기">
              <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="상단로고" />
            </Link>
        </h1>

        <button className="toggle_btn" onClick={()=>setMenuOpen(true)} >
          <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt="전체메뉴" />
        </button>

          <Link to ='/cart' title="장바구니" className="cart_btn">
              <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt="장바구니" />
          </Link>

          {/* 모바일 네비게이션 */}
         <nav className="navi"
            style={{left:menuOpen?'0%':'-100%'}}
         >
          <button className="close_btn" 
             onClick={()=>setMenuOpen(false)} >
          
            <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="닫기" />
          </button>
          
        
          <ul className="gnb">
            <li className="member_info">
              <b>
              {username}
              </b> {username&&'님 환영합니다.'}
             
            </li>
            <li><Link to='/'  onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
            <li><Link to='/intro'  onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
            <li><Link to='/info'  onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
            <li><Link to='/event'  onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
            <li><Link to='/customer'  onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
          </ul>


            {/* 삼항조건연산자 => 조건식?참인값:거짓인값;
                  로그인 한 경우면 '로그아웃'
                  로그인 안 한 경우이면 '로그인'
            */}

              
                  {username ? (
                    <ul className="form_navi">
                      <li>
                        <button onClick={handleLogout} className="logout_btn">
                          로그아웃
                        </button>
                      </li>
                      <li>&nbsp;</li>
                      <li><Link to="/cart" onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
                      <li><Link to="/order" onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
                    </ul>
                  ) : (
                    <ul className="form_navi">
                      <li><Link to="/login" onClick={()=>setMenuOpen(false)}>로그인</Link></li>
                      <li><Link to="/join" onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
                      <li><Link to="/cart" onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
                      <li><Link to="/order" onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
                    </ul>
                  )}

            </nav>

      </header>
  );
}

export default Header;