import React from 'react';
import './BillingToggle.css';

const BillingToggle = ({ billingCycle, onChange }) => {
  const isAnnual = billingCycle === 'annual';

  return (
    <div className="billing-toggle-container">
      <span 
        className={`toggle-label ${!isAnnual ? 'active' : ''}`} 
        onClick={() => onChange('monthly')}
      >
        Monthly billing
      </span>
      <button 
        type="button" 
        className={`toggle-switch ${isAnnual ? 'annual' : 'monthly'}`}
        onClick={() => onChange(isAnnual ? 'monthly' : 'annual')}
        aria-label="Toggle billing cycle"
      >
        <span className="toggle-slider"></span>
      </button>
      <span 
        className={`toggle-label ${isAnnual ? 'active' : ''}`} 
        onClick={() => onChange('annual')}
      >
        Annual billing
        <span className="discount-badge">Save ~10%</span>
      </span>
    </div>
  );
};

export default BillingToggle;
