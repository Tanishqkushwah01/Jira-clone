import React, { useState } from 'react';
import Button from './Button';
import './SignInView.css';

const SignInView = ({ onBackToPricing, onGoToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setSuccess(true);
  };

  return (
    <div className="signin-page-container">
      <div className="signin-card">
        <div className="signin-logo">
          <svg viewBox="0 0 24 24" className="atlassian-logo-icon" fill="currentColor">
            <path d="M11.597 1.636a.818.818 0 0 0-1.194 0L1.642 10.398a.818.818 0 0 0 0 1.194l2.42 2.42a.818.818 0 0 0 1.194 0l6.34-6.34a.818.818 0 0 0 0-1.194L11.597 1.636zM22.358 10.398l-6.34-6.34a.818.818 0 0 0-1.194 0l-2.42 2.42a.818.818 0 0 0 0 1.194l6.34 6.34a.818.818 0 0 0 1.194 0l2.42-2.42c.328-.328.328-.865 0-1.194z" />
            <path d="M10.403 22.364a.818.818 0 0 0 1.194 0l8.76-8.761a.818.818 0 0 0 0-1.194l-2.42-2.42a.818.818 0 0 0-1.194 0l-6.34 6.34a.818.818 0 0 0 0 1.194l2.42 2.42c.328.328.866.328 1.194 0z" />
          </svg>
          <span>ATLASSIAN</span>
        </div>
        
        {success ? (
          <div className="signin-success">
            <div className="success-badge">✓</div>
            <h2>Welcome back!</h2>
            <p>You have successfully logged into your Atlassian account (<strong>{email}</strong>).</p>
            <Button variant="primary" onClick={onBackToPricing} className="btn-full">Go to Pricing page</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="signin-form">
            <h3>Log in to your account</h3>
            {error && <div className="signin-error">{error}</div>}
            
            <div className="form-group-field">
              <input 
                type="email" 
                placeholder="Enter email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group-field">
              <input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <Button type="submit" variant="primary" className="btn-full">Log in</Button>
            
            <div className="signin-divider-or">
              <span>OR</span>
            </div>

            <div className="social-signin-btns">
              <button type="button" className="social-btn google">
                <span className="social-icon">G</span> Continue with Google
              </button>
              <button type="button" className="social-btn microsoft">
                <span className="social-icon">M</span> Continue with Microsoft
              </button>
            </div>

            <div className="signin-footer-links">
              <button type="button" className="text-link" onClick={onGoToSignUp}>Can't log in? Create an account</button>
              <button type="button" className="text-link" onClick={onBackToPricing}>Back to Home</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignInView;
