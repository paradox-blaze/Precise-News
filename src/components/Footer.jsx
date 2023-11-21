// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container border-t border-gray-600 shadow-xl backdrop-blur-lg bg-white dark:bg-black text-black dark:text-white">
      <p className="copyright">&copy; Precise News {currentYear}</p>
      <p className="footer-item">Aditya HR PES1UG22AM013</p>
      <p className="footer-item">Aneesh Upadhya PES1UG22AM022</p>
      <p className="footer-item">Adit Acharya PES1UG22AM009</p>
    </footer>
  );
};

export default Footer;
