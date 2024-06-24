import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="/" className="footer__logo">
          Dribbble
        </a>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/for-designers" className="footer__link">
                For designers
              </a>
            </li>
            <li className="footer__item">
              <a href="/hire-talent" className="footer__link">
                Hire talent
              </a>
            </li>
            <li className="footer__item">
              <a href="/inspiration" className="footer__link">
                Inspiration
              </a>
            </li>
            <li className="footer__item">
              <a href="/advertising" className="footer__link">
                Advertising
              </a>
            </li>
            <li className="footer__item">
              <a href="/blog" className="footer__link">
                Blog
              </a>
            </li>
            <li className="footer__item">
              <a href="/about" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="/careers" className="footer__link">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a href="/support" className="footer__link">
                Support
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
  <div className="left-section">
    <p className="footer__copyright-text">
      © 2024 Dribbble. Terms Privacy Cookies
    </p>
  </div>
  <div className="right-section">
    <p className='footer__p'>Jobs</p>
    <p className='footer__p'>Designers</p>
    <p className='footer__p'>Freelancers</p>
    <p className='footer__p'>Tags</p>
    <p className='footer__p'>Places</p>
    <p className='footer__p'>Resources</p>
  </div>
</div>

    </footer>
  );
};

export default Footer;