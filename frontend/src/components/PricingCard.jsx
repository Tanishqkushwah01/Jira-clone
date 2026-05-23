import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';
import './PricingCard.css';

const PricingCard = ({ plan, users, billingCycle, calculatedPrice, onSelect }) => {
  const isFree = plan.name === 'Free';
  const isEnterprise = plan.name === 'Enterprise';
  const isPopular = plan.name === 'Premium';

  const showEnterpriseContact = isEnterprise && users < 801;

  const getPriceDisplay = () => {
    if (isFree) {
      return (
        <div className="price-display">
          <span className="price-amount">$0</span>
          <span className="price-period">Free forever</span>
        </div>
      );
    }
    
    if (isEnterprise) {
      if (showEnterpriseContact) {
        return (
          <div className="price-display enterprise-contact">
            <span className="price-amount">Custom</span>
            <span className="price-period">Starts at 801 users</span>
          </div>
        );
      } else {
        // Enterprise is annual only. Billed annually: $142 per user per year.
        const annualPerUser = 142;
        const totalAnnual = annualPerUser * users;
        
        if (billingCycle === 'annual') {
          return (
            <div className="price-display">
              <span className="price-amount">${annualPerUser}</span>
              <span className="price-period">per user / year</span>
              <div className="price-subtext">
                Total: ${totalAnnual.toLocaleString()} / year
              </div>
            </div>
          );
        } else {
          // Billed annually, but show average monthly rate per user ($142 / 12 = $11.83)
          return (
            <div className="price-display">
              <span className="price-amount">$11.83</span>
              <span className="price-period">avg per user / mo</span>
              <div className="price-subtext">
                Billed annually (${totalAnnual.toLocaleString()} / yr)
              </div>
            </div>
          );
        }
      }
    }

    // Standard / Premium
    if (users <= 10) {
      // Flat monthly rate for 1-10 users
      const flatRate = billingCycle === 'annual' ? plan.basePriceAnnual : plan.basePriceMonthly;
      const monthlyFlatRate = billingCycle === 'annual' ? (flatRate / 12) : flatRate;
      const ratePerUser = monthlyFlatRate / users;
      return (
        <div className="price-display">
          <span className="price-amount">${ratePerUser.toFixed(2)}</span>
          <span className="price-period">per user / mo</span>
          <div className="price-subtext">
            Flat: ${flatRate} / {billingCycle === 'annual' ? 'yr' : 'mo'}
          </div>
        </div>
      );
    } else {
      // Per user calculated rate
      const monthlyRate = billingCycle === 'annual' ? (calculatedPrice / 12) : calculatedPrice;
      const ratePerUser = monthlyRate / users;
      const totalDisplay = billingCycle === 'annual' ? calculatedPrice : calculatedPrice;
      
      return (
        <div className="price-display">
          <span className="price-amount">${ratePerUser.toFixed(2)}</span>
          <span className="price-period">per user / mo</span>
          <div className="price-subtext">
            Total: ${Math.round(totalDisplay).toLocaleString()} / {billingCycle === 'annual' ? 'yr' : 'mo'}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''} ${isEnterprise ? 'enterprise' : ''}`}>
      {plan.badge && <div className="card-badge">{plan.badge}</div>}
      
      <div className="card-header">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-tagline">{plan.tagline}</p>
      </div>

      <div className="price-section">
        {getPriceDisplay()}
      </div>

      <div className="card-cta">
        <Button 
          variant={isPopular ? 'primary' : 'secondary'} 
          size="lg" 
          onClick={onSelect}
          className="cta-button"
        >
          {showEnterpriseContact ? 'Contact sales' : plan.ctaText}
        </Button>
        <span className="user-limit-text">{plan.userLimitText}</span>
      </div>

      <div className="card-divider"></div>

      <div className="card-features">
        <span className="features-title">Includes:</span>
        <ul className="features-list">
          {plan.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <Check className="feature-check" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
