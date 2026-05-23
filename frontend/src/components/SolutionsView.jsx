import React from 'react';
import Button from './Button';
import './SolutionsView.css';

const SolutionsView = ({ onBackToPricing }) => {
  return (
    <div className="solutions-page-container">
      <header className="page-header">
        <h1>Solutions for Every Team</h1>
        <p>Jira Software is customized to help teams of all sizes and specialties succeed.</p>
      </header>

      <div className="solutions-grid">
        <div className="solution-card">
          <h3>Software Teams</h3>
          <p>Deliver value to customers faster with industry-leading agile tools, boards, and integrations built for software engineering.</p>
        </div>
        <div className="solution-card">
          <h3>IT Service Teams</h3>
          <p>High-velocity ITSM teams use Jira to handle incident reports, change management, and service operations seamlessly.</p>
        </div>
        <div className="solution-card">
          <h3>Business Teams</h3>
          <p>Marketing, HR, and Operations teams organize campaigns, track hiring, and align resources using Jira's customizable boards.</p>
        </div>
        <div className="solution-card">
          <h3>Enterprise Scaling</h3>
          <p>Align multi-department organizations with centralized administration, customizable permissions, and cross-site insights.</p>
        </div>
      </div>

      <div className="solutions-action">
        <Button variant="primary" size="lg" onClick={onBackToPricing}>Back to Pricing Page</Button>
      </div>
    </div>
  );
};

export default SolutionsView;
