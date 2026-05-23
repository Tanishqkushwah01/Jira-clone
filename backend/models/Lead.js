import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: '' },
  teamSize: { type: Number, required: true },
  selectedPlan: { type: String, required: true },
  billingCycle: { type: String, enum: ['monthly', 'annual'], required: true },
  estimatedCost: { type: Number, required: true }
}, {
  timestamps: true
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
