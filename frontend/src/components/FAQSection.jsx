import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the difference between Jira Standard and Premium?",
      answer: "Jira Standard is designed for growing teams needing core agile features, basic user permissions, and 250 GB storage. Jira Premium adds advanced roadmaps, sandbox environments for testing, release tracks, unlimited storage, 24/7 priority support, and a 99.9% uptime financially-backed SLA."
    },
    {
      question: "Can I try Jira for free?",
      answer: "Yes! Jira offers a Free plan for up to 10 users. For larger teams, you can sign up for a free 7-day trial of either the Standard or Premium plans."
    },
    {
      question: "How are user payments calculated for monthly and annual billing?",
      answer: "Monthly billing charges per user on a progressive scale. The rate drops in brackets as your team size grows. Annual billing is calculated in set tiers and paid in a single payment, offering roughly 10% savings compared to monthly pricing."
    },
    {
      question: "Can I add more than 10 users to the Free plan?",
      answer: "No, the Free plan has a hard limit of 10 users. If you need to add an 11th user, your site will automatically trigger a 7-day trial of the Standard plan or require you to select a paid plan."
    },
    {
      question: "Does Jira offer discounts for academic or non-profit organizations?",
      answer: "Yes, Atlassian offers significant discounts for verified academic institutions (up to 50% off) and eligible non-profit organizations (up to 75% off). Contact our sales team for verification details."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section-wrapper">
      <h2 className="faq-section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button 
                type="button" 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-chevron" size={20} />
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
