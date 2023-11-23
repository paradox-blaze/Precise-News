// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container border-t border-gray-600 shadow-xl backdrop-blur-lg bg-white dark:bg-black text-black dark:text-white">
      <a href='https://youtu.be/dQw4w9WgXcQ?si=a6dxVVkFoKiY_uX3'><p className="copyright cursor-pointer">&copy; Precise News {currentYear}</p></a>
    </footer>
  );
};

export default Footer;
