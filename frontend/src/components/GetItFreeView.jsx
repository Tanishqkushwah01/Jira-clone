import React, { useState } from 'react';
import Button from './Button';
import './GetItFreeView.css';

const GetItFreeView = ({ onBackToPricing, onGoToLogin }) => {
  const [email, setEmail] = useState('');
  const [siteName, setSiteName] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !siteName) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <h2>Get started with Jira Software</h2>
        <p className="signup-subtitle">Free forever for up to 10 users. No credit card required.</p>

        {success ? (
          <div className="signup-success">
            <div className="success-badge">✓</div>
            <h3>Site is setting up!</h3>
            <p>We are creating your Atlassian site: <strong>https://{siteName}.atlassian.net</strong></p>
            <p className="success-note">We sent a confirmation email to <strong>{email}</strong>. Please check your inbox to complete setup.</p>
            <Button variant="primary" onClick={onBackToPricing} className="btn-full">Return to Pricing</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group-field">
              <label htmlFor="signup-email">Work Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group-field">
              <label htmlFor="signup-site">Claim your site name</label>
              <div className="site-input-group">
                <input
                  id="signup-site"
                  type="text"
                  placeholder="my-team"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  required
                />
                <span className="site-suffix">.atlassian.net</span>
              </div>
              <span className="input-helper-text">Only lowercase letters, numbers, and hyphens.</span>
            </div>

            <Button type="submit" variant="primary" className="btn-full" disabled={loading}>
              {loading ? 'Creating site...' : 'Agree & Start Free'}
            </Button>

            <p className="terms-text">
              By clicking "Agree & Start Free", you agree to Atlassian's Customer Agreement and Privacy Policy.
            </p>

            <div className="signup-footer-links">
              <button type="button" className="text-link" onClick={onGoToLogin}>Already have an account? Log in</button>
              <button type="button" className="text-link" onClick={onBackToPricing}>Back to Home</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetItFreeView;
