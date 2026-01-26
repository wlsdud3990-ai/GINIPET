import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <main className="main">

      <div
        className="main_img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/main1.jpg)`
        }}
      />

      <Link
        to="/shop"
        className="main_img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/shop.jpg)`
        }}
      />

      <Link
        to="/intro"
        className="main_img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/story.jpg)`
        }}
      />

      <Link
        to="/event"
        className="main_img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/in_star.jpg)`
        }}
      />

    </main>
  );
}

export default Main;
