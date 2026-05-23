import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Plan from './models/Plan.js';
import connectDB from './config/db.js';

dotenv.config();

const plans = [
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

const seedData = async () => {
  try {
    await connectDB();
    await Plan.deleteMany();
    await Plan.insertMany(plans);
    console.log('Database Seeded Successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
