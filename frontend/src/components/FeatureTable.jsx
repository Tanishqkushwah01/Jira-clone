import React from 'react';
import { Check, X } from 'lucide-react';
import './FeatureTable.css';

const FeatureTable = () => {
  const comparisonData = [
    {
      category: 'Key Limits',
      features: [
        { name: 'User Limit', free: '10 users', standard: '35,000 users', premium: '35,000 users', enterprise: '35,000 users' },
        { name: 'File Storage', free: '2 GB', standard: '250 GB', premium: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Sites Included', free: '1 site', standard: '1 site', premium: '1 site', enterprise: 'Up to 150 sites' },
      ]
    },
    {
      category: 'Planning & Collaboration',
      features: [
        { name: 'Scrum & Kanban Boards', free: true, standard: true, premium: true, enterprise: true },
        { name: 'Backlog & Roadmaps', free: true, standard: true, premium: true, enterprise: true },
        { name: 'Advanced Roadmaps (cross-project)', free: false, standard: false, premium: true, enterprise: true },
        { name: 'Dependency Mapping', free: 'Basic', standard: 'Basic', premium: 'Advanced', enterprise: 'Advanced' },
      ]
    },
    {
      category: 'Security & Admin Controls',
      features: [
        { name: 'Custom Roles & Permissions', free: false, standard: true, premium: true, enterprise: true },
        { name: 'Audit Logs', free: false, standard: true, premium: true, enterprise: true },
        { name: 'IP Allowlisting', free: false, standard: false, premium: true, enterprise: true },
        { name: 'Sandbox & Release Tracks', free: false, standard: false, premium: true, enterprise: true },
        { name: 'Atlassian Access (SSO, SCIM)', free: 'Add-on', standard: 'Add-on', premium: 'Add-on', enterprise: 'Included' },
      ]
    },
    {
      category: 'Support & Service Level',
      features: [
        { name: 'Support Tier', free: 'Community Support', standard: 'Business hours support', premium: '24/7 Support', enterprise: '24/7 Dedicated Support' },
        { name: 'SLA Guarantee', free: 'None', standard: 'None', premium: '99.9% Uptime SLA', enterprise: '99.95% Uptime SLA' },
      ]
    }
  ];

  const renderValue = (val) => {
    if (val === true) return <Check className="feat-check" size={18} />;
    if (val === false) return <X className="feat-cross" size={18} />;
    return <span className="feature-text-val">{val}</span>;
  };

  return (
    <div className="feature-table-wrapper">
      <h2 className="table-section-title">Compare Features in Detail</h2>
      <div className="table-responsive">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-col-title">Features</th>
              <th>Free</th>
              <th>Standard</th>
              <th className="popular-col">Premium</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                <tr className="category-row">
                  <td colSpan="5">{section.category}</td>
                </tr>
                {section.features.map((feat, fIdx) => (
                  <tr key={fIdx}>
                    <td className="feature-name">{feat.name}</td>
                    <td>{renderValue(feat.free)}</td>
                    <td>{renderValue(feat.standard)}</td>
                    <td className="popular-col">{renderValue(feat.premium)}</td>
                    <td>{renderValue(feat.enterprise)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureTable;
