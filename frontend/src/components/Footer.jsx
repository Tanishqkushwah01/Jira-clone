import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#jira">Jira Software</a></li>
              <li><a href="#confluence">Confluence</a></li>
              <li><a href="#trello">Trello</a></li>
              <li><a href="#bitbucket">Bitbucket</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#purchasing">Purchasing FAQ</a></li>
              <li><a href="#community">Atlassian Community</a></li>
              <li><a href="#support">Submit a ticket</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Security & Trust</h4>
            <ul>
              <li><a href="#trust">Trust Center</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#sla">SLA & Terms</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About Atlassian</h4>
            <ul>
              <li><a href="#company">Company Profile</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">Newsroom</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <svg viewBox="0 0 24 24" className="footer-logo-icon" fill="currentColor">
              <path d="M11.597 1.636a.818.818 0 0 0-1.194 0L1.642 10.398a.818.818 0 0 0 0 1.194l2.42 2.42a.818.818 0 0 0 1.194 0l6.34-6.34a.818.818 0 0 0 0-1.194L11.597 1.636zM22.358 10.398l-6.34-6.34a.818.818 0 0 0-1.194 0l-2.42 2.42a.818.818 0 0 0 0 1.194l6.34 6.34a.818.818 0 0 0 1.194 0l2.42-2.42c.328-.328.328-.865 0-1.194z" />
              <path d="M10.403 22.364a.818.818 0 0 0 1.194 0l8.76-8.761a.818.818 0 0 0 0-1.194l-2.42-2.42a.818.818 0 0 0-1.194 0l-6.34 6.34a.818.818 0 0 0 0 1.194l2.42 2.42c.328.328.866.328 1.194 0z" />
            </svg>
            <span>ATLASSIAN</span>
          </div>
          <p className="copyright">&copy; 2026 Atlassian. All rights reserved. (Jira Pricing Page Clone Demo)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
