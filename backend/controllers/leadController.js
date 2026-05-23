import Lead from '../models/Lead.js';

export const createLead = async (req, res) => {
  try {
    const { name, email, company, teamSize, selectedPlan, billingCycle, estimatedCost } = req.body;
    
    if (!name || !email || !teamSize || !selectedPlan || !billingCycle || estimatedCost === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const lead = new Lead({
      name,
      email,
      company,
      teamSize,
      selectedPlan,
      billingCycle,
      estimatedCost
    });

    const savedLead = await lead.save();
    res.status(201).json({ message: 'Lead registered successfully', lead: savedLead });
  } catch (error) {
    res.status(500).json({ message: 'Error registering lead', error: error.message });
  }
};
