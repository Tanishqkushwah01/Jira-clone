import React from 'react';
import Button from './Button';
import './GuideView.css';

const GuideView = ({ onBackToPricing }) => {
  return (
    <div className="guide-page-container">
      <header className="page-header">
        <h1>Jira Interactive Guide</h1>
        <p>New to Jira Software? Learn the fundamentals of tracking agile work.</p>
      </header>

      <div className="guide-steps-list">
        <div className="guide-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create a project template</h3>
            <p>Select from Scrum, Kanban, or simple Bug Tracking template configurations. Define project boards and key epic statuses.</p>
          </div>
        </div>
        <div className="guide-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Populate issue backlogs</h3>
            <p>Log work as user stories, bugs, or engineering tasks. Add priorities, custom fields, and link related items together.</p>
          </div>
        </div>
        <div className="guide-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Configure workflows & assignees</h3>
            <p>Map work statuses from *To Do* to *Done*. Assign tasks to team members and log estimations directly on boards.</p>
          </div>
        </div>
      </div>

      <div className="guide-action">
        <Button variant="primary" size="lg" onClick={onBackToPricing}>Back to Pricing Page</Button>
      </div>
    </div>
  );
};

export default GuideView;
