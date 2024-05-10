import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-container">
        <a href="https://github.com/Faynot">
          <img src="../../../public/oh.png" alt="Изображение 1" className="imagee" />
        </a>
      </div>
      <div className="image-container">
        <a href="https://t.me/faynotobglotish">
          <img src="../../../public/tg.webp" alt="Изображение 2" className="imageei" />
        </a>
      </div>
      <p className="text">Links</p>
    </footer>
  );
};

export default Footer;
