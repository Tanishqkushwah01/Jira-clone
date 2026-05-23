import React from 'react';
import Button from './Button';
import './FeaturesView.css';

const FeaturesView = ({ onBackToPricing }) => {
  return (
    <div className="features-page-container">
      <header className="page-header">
        <h1>Jira Features Overview</h1>
        <p>Everything you need to build, track, and release great software.</p>
      </header>
      
      <div className="features-grid-dashboard">
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Scrum Boards</h3>
          <p>Help your team break down large, complex projects into manageable pieces of work using scrum boards.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Interactive Timelines</h3>
          <p>Keep your teams in sync by mapping out cross-project dependencies, timelines, and roadmaps.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>No-Code Automation</h3>
          <p>Save hours of manual tasks by building custom no-code rules to automate issue statuses and notifications.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Enterprise Security</h3>
          <p>Keep your software safe with enterprise-grade SSO, IP allowlisting, and bring-your-own-key encryption.</p>
        </div>
      </div>

      <div className="features-action-section">
        <Button variant="primary" size="lg" onClick={onBackToPricing}>Back to Pricing Page</Button>
      </div>
    </div>
  );
};

export default FeaturesView;
