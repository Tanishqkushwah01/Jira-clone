import React, { useState } from 'react';
import Button from './Button';
import './LeadModal.css';

const LeadModal = ({ plan, users, billingCycle, calculatedPrice, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          teamSize: users,
          selectedPlan: plan.name,
          billingCycle,
          estimatedCost: calculatedPrice
        })
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        
        {success ? (
          <div className="modal-success-state">
            <div className="success-icon">✓</div>
            <h2>Thank you, {name}!</h2>
            <p>Your subscription request has been received.</p>
            <div className="success-summary">
              <div><strong>Selected Plan:</strong> Jira {plan.name}</div>
              <div><strong>Team Size:</strong> {users} users</div>
              <div><strong>Estimated Cost:</strong> {calculatedPrice === 0 ? 'Free' : `$${calculatedPrice.toLocaleString()} / ${billingCycle}`}</div>
            </div>
            <p className="success-note">An Atlassian representative will reach out to you at <strong>{email}</strong> to finalize setup.</p>
            <Button variant="primary" onClick={onClose} className="modal-success-btn">Done</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <h2>Set up your Jira subscription</h2>
            <p className="modal-subtitle">Configure your plan details and subscribe</p>

            <div className="modal-summary-panel">
              <div className="summary-row">
                <span className="summary-label">Selected Plan</span>
                <span className="summary-value">Jira {plan.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Team Size</span>
                <span className="summary-value">{users} users</span>
              </div>
              <div className="summary-row highlight">
                <span className="summary-label">Estimated Cost</span>
                <span className="summary-value">
                  {calculatedPrice === 0 ? 'Free' : `$${calculatedPrice.toLocaleString()} / ${billingCycle}`}
                </span>
              </div>
            </div>

            {error && <div className="modal-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="lead-name">Full Name <span className="required">*</span></label>
              <input
                id="lead-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lead-email">Work Email <span className="required">*</span></label>
              <input
                id="lead-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lead-company">Company Name</label>
              <input
                id="lead-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Corp"
              />
            </div>

            <div className="modal-actions">
              <Button variant="secondary" onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Confirm Subscription'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
