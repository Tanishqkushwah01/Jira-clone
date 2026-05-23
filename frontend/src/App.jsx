import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BillingToggle from './components/BillingToggle';
import UserSlider from './components/UserSlider';
import PricingCard from './components/PricingCard';
import FeatureTable from './components/FeatureTable';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FeaturesView from './components/FeaturesView';
import SolutionsView from './components/SolutionsView';
import GuideView from './components/GuideView';
import SignInView from './components/SignInView';
import GetItFreeView from './components/GetItFreeView';
import './App.css';

// Fallback plans data if backend is offline
const fallbackPlans = [
  {
    name: 'Free',
    tagline: 'For small teams to plan and track work more efficiently',
    basePriceMonthly: 0,
    basePriceAnnual: 0,
    userLimitText: 'Up to 10 users',
    badge: '',
    ctaText: 'Get started',
    features: [
      'Up to 10 users',
      'Unlimited project boards',
      'Backlog and timeline planning',
      'Basic reporting and insights',
      '2 GB file storage',
      'Community support'
    ],
    pricingTiers: []
  },
  {
    name: 'Standard',
    tagline: 'For growing teams that need collaboration and basic user access controls',
    basePriceMonthly: 82.50,
    basePriceAnnual: 825.00,
    userLimitText: 'Up to 35,000 users',
    badge: '',
    ctaText: 'Try it free',
    features: [
      'Everything in Free, plus:',
      'Up to 35,000 users',
      'User roles and permissions',
      'Audit logs',
      '250 GB file storage',
      'Business hours support'
    ],
    pricingTiers: [
      { minUsers: 11, maxUsers: 100, monthlyRate: 7.91, annualRate: 79.10 },
      { minUsers: 101, maxUsers: 250, monthlyRate: 6.75, annualRate: 67.50 },
      { minUsers: 251, maxUsers: 1000, monthlyRate: 5.75, annualRate: 57.50 },
      { minUsers: 1001, maxUsers: 5000, monthlyRate: 4.50, annualRate: 45.00 },
      { minUsers: 5001, maxUsers: 50000, monthlyRate: 3.50, annualRate: 35.00 }
    ]
  },
  {
    name: 'Premium',
    tagline: 'For organizations that need advanced planning, security, and scaling capabilities',
    basePriceMonthly: 152.20,
    basePriceAnnual: 1522.00,
    userLimitText: 'Up to 35,000 users',
    badge: 'Most Popular',
    ctaText: 'Try it free',
    features: [
      'Everything in Standard, plus:',
      'Advanced roadmaps',
      'Sandbox and release tracks',
      'Unlimited file storage',
      '24/7 Premium support',
      '99.9% uptime SLA'
    ],
    pricingTiers: [
      { minUsers: 11, maxUsers: 100, monthlyRate: 14.54, annualRate: 145.40 },
      { minUsers: 101, maxUsers: 250, monthlyRate: 13.50, annualRate: 135.00 },
      { minUsers: 251, maxUsers: 1000, monthlyRate: 11.50, annualRate: 115.00 },
      { minUsers: 1001, maxUsers: 5000, monthlyRate: 9.50, annualRate: 95.00 },
      { minUsers: 5001, maxUsers: 50000, monthlyRate: 7.50, annualRate: 75.00 }
    ]
  },
  {
    name: 'Enterprise',
    tagline: 'For enterprises with critical scaling, security, and governance needs',
    basePriceMonthly: 0,
    basePriceAnnual: 0,
    userLimitText: 'Up to 35,000 users',
    badge: 'Enterprise Security',
    ctaText: 'Contact sales',
    features: [
      'Everything in Premium, plus:',
      'Unlimited instances (up to 150)',
      'Centralized user licensing',
      'Atlassian Access included',
      'Enterprise-grade security',
      '24/7 dedicated support team'
    ],
    pricingTiers: [
      { minUsers: 801, maxUsers: 50000, monthlyRate: 11.83, annualRate: 142.00 }
    ]
  }
];

function App() {
  const [plans, setPlans] = useState(fallbackPlans);
  const [users, setUsers] = useState(10);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState(null);
  const [currentView, setCurrentView] = useState('pricing');

  // Load plans from API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/plans');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setPlans(data);
          } else {
            setPlans(fallbackPlans);
          }
        } else {
          setPlans(fallbackPlans);
        }
      } catch (err) {
        console.warn('API connection failed. Using client-side fallback data.');
        setPlans(fallbackPlans);
      }
    };
    fetchPlans();
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Pricing calculator engine following database tiers
  const calculatePlanPrice = (plan, userCount, cycle) => {
    const isAnnual = cycle === 'annual';

    if (plan.name === 'Free') return 0;
    
    if (plan.name === 'Enterprise') {
      if (userCount < 801) return 0; // Custom / Contact Sales
      const annualCost = 142 * userCount;
      return isAnnual ? annualCost : annualCost; // Annual only, total cost billed annually
    }

    const basePrice = isAnnual ? plan.basePriceAnnual : plan.basePriceMonthly;
    if (userCount <= 10) {
      return basePrice;
    }

    let totalCost = basePrice;
    let remainingUsers = userCount - 10;

    // Sort tiers progressively by starting bracket user range
    const sortedTiers = [...plan.pricingTiers].sort((a, b) => a.minUsers - b.minUsers);

    for (const tier of sortedTiers) {
      const tierCapacity = tier.maxUsers - tier.minUsers + 1;
      const usersInTier = Math.min(remainingUsers, tierCapacity);
      
      if (usersInTier <= 0) break;

      const rate = isAnnual ? tier.annualRate : tier.monthlyRate;
      totalCost += usersInTier * rate;
      remainingUsers -= usersInTier;
    }

    // If annual, return total annual price (which is sum of base annual + tiered annual rates * remaining users)
    return totalCost;
  };

  const handleSelectPlan = (plan) => {
    const calculatedPrice = calculatePlanPrice(plan, users, billingCycle);
    setSelectedPlanForModal({
      plan,
      calculatedPrice
    });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'features':
        return <FeaturesView onBackToPricing={() => setCurrentView('pricing')} />;
      case 'solutions':
        return <SolutionsView onBackToPricing={() => setCurrentView('pricing')} />;
      case 'guide':
        return <GuideView onBackToPricing={() => setCurrentView('pricing')} />;
      case 'signin':
        return (
          <SignInView 
            onBackToPricing={() => setCurrentView('pricing')} 
            onGoToSignUp={() => setCurrentView('get-it-free')} 
          />
        );
      case 'get-it-free':
        return (
          <GetItFreeView 
            onBackToPricing={() => setCurrentView('pricing')} 
            onGoToLogin={() => setCurrentView('signin')} 
          />
        );
      case 'pricing':
      default:
        return (
          <>
            <header className="hero-banner">
              <div className="hero-container">
                <span className="hero-badge">JIRA CLONE</span>
                <h1>Jira Software Pricing</h1>
                <p className="hero-subtitle">
                  Scale seamlessly with transparent, user-based plans designed to fit your team's size and needs.
                </p>
              </div>
            </header>

            <main className="main-content-section">
              <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
              
              <UserSlider users={users} onChange={setUsers} />

              <div className="pricing-grid-container">
                <div className="pricing-grid">
                  {plans.map((plan, index) => {
                    const price = calculatePlanPrice(plan, users, billingCycle);
                    return (
                      <PricingCard
                        key={index}
                        plan={plan}
                        users={users}
                        billingCycle={billingCycle}
                        calculatedPrice={price}
                        onSelect={() => handleSelectPlan(plan)}
                      />
                    );
                  })}
                </div>
              </div>

              <FeatureTable />

              <FAQSection />
            </main>
          </>
        );
    }
  };

  return (
    <div className="app-orchestrator">
      <Navbar 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode} 
        currentView={currentView}
        onNavigate={setCurrentView}
      />
      
      {renderCurrentView()}

      <Footer />

      {selectedPlanForModal && (
        <LeadModal
          plan={selectedPlanForModal.plan}
          users={users}
          billingCycle={billingCycle}
          calculatedPrice={selectedPlanForModal.calculatedPrice}
          onClose={() => setSelectedPlanForModal(null)}
        />
      )}
    </div>
  );
}

export default App;
