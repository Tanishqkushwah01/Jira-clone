import mongoose from 'mongoose';

const pricingTierSchema = new mongoose.Schema({
  minUsers: { type: Number, required: true },
  maxUsers: { type: Number, required: true },
  monthlyRate: { type: Number, required: true },
  annualRate: { type: Number, required: true }
});

const planSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  tagline: { type: String, required: true },
  basePriceMonthly: { type: Number, default: 0 },
  basePriceAnnual: { type: Number, default: 0 },
  userLimitText: { type: String, required: true },
  badge: { type: String, default: '' },
  ctaText: { type: String, default: 'Get started' },
  features: [{ type: String }],
  pricingTiers: [pricingTierSchema]
}, {
  timestamps: true
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
