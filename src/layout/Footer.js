import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">

      {/* 상단 영역 */}
      <div className="footer_top">
         <ul className="footer_menu">
          <li><Link to="/privacy">개인정보처리방침</Link></li>
          <li><Link to="/terms">쇼핑몰약관</Link></li>
          </ul>
        </div>

        {/* 왼쪽 영역 */}
        <div className="footer_left">
          <h2 className="footer_logo"></h2>
          <p>
            고객센터
            </p>
          <p>02-2166-7770</p>
          <p>평일 10:00 ~ 17:00</p>
          <p>(점심: 12:00 ~ 13:00)</p>
        </div>



      </div>
    </footer>
  );
}

export default Footer;
