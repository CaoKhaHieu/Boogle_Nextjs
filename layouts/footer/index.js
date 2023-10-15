import React from 'react'

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <ul className="list-media">
          <li className="media-item">
            <a href="" className="media-link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="media-item">
            <a href="" className="media-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="media-item">
            <a href="" className="media-link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="media-item">
            <a href="" className="media-link">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <div className="footer-copy-right">
          <p>
            Copyright &copy; 2021 All rights reserved | This template is made
            with by Cao Kha Hieu &amp; Nguyen Trong Huu
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer