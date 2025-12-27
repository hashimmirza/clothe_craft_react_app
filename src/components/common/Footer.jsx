import * as Route from '@/constants/routes';
import logo from '@/images/logo-full-white.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span className="footer-text">
            Developed by
            {' '}
            <a className="footer-text" href="https://www.linkedin.com/in/muhammad-hashim-058677182/">Hashim Mirza</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5 className="footer-text">
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">

      </div>
    </footer>
  );
};

export default Footer;
