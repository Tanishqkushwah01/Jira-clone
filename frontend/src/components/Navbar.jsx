import React from 'react';
import { Sun, Moon, ChevronDown, Search, Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ darkMode, onToggleDarkMode, currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleLinkClick = (view, e) => {
    e.preventDefault();
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo-wrapper" onClick={(e) => handleLinkClick('pricing', e)}>
            {/* High-Fidelity Jira Square Logo */}
            <svg viewBox="0 0 24 24" className="logo-icon-jira" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect width="24" height="24" rx="5.5" fill="#0052cc" stroke="none"/>
              <path d="M7 16.5l4.5-4.5-4.5-4.5M12.5 16.5l4.5-4.5-4.5-4.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">Jira</span>
          </div>

          <div className="nav-links">
            <div className="nav-dropdown">
              <button type="button" className={`nav-link-btn ${currentView === 'features' ? 'active' : ''}`} onClick={(e) => handleLinkClick('features', e)}>
                Features <ChevronDown size={14} className="chevron" />
              </button>
              <div className="dropdown-menu">
                <a href="#scrum-boards" className="dropdown-item" onClick={(e) => handleLinkClick('features', e)}>
                  <span className="item-title">Scrum Boards</span>
                  <span className="item-desc">Break down projects into sprint cycles</span>
                </a>
                <a href="#roadmaps" className="dropdown-item" onClick={(e) => handleLinkClick('features', e)}>
                  <span className="item-title">Timelines</span>
                  <span className="item-desc">Map out cross-project roadmaps</span>
                </a>
                <a href="#automations" className="dropdown-item" onClick={(e) => handleLinkClick('features', e)}>
                  <span className="item-title">Automations</span>
                  <span className="item-desc">No-code rules to automate alerts</span>
                </a>
              </div>
            </div>
            
            <div className="nav-dropdown">
              <button type="button" className={`nav-link-btn ${currentView === 'solutions' ? 'active' : ''}`} onClick={(e) => handleLinkClick('solutions', e)}>
                Solutions <ChevronDown size={14} className="chevron" />
              </button>
              <div className="dropdown-menu">
                <a href="#software" className="dropdown-item" onClick={(e) => handleLinkClick('solutions', e)}>
                  <span className="item-title">Software Teams</span>
                  <span className="item-desc">Industry-leading agile task trackers</span>
                </a>
                <a href="#it-service" className="dropdown-item" onClick={(e) => handleLinkClick('solutions', e)}>
                  <span className="item-title">IT Service Teams</span>
                  <span className="item-desc">Incident & service management logs</span>
                </a>
                <a href="#enterprise" className="dropdown-item" onClick={(e) => handleLinkClick('solutions', e)}>
                  <span className="item-title">Enterprise Scale</span>
                  <span className="item-desc">Multi-department alignment logs</span>
                </a>
              </div>
            </div>

            <a 
              href="#guide" 
              className={`nav-link-item ${currentView === 'guide' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('guide', e)}
            >
              Guide
            </a>
            
            <div className="nav-dropdown">
              <button type="button" className="nav-link-btn">
                Templates <ChevronDown size={14} className="chevron" />
              </button>
              <div className="dropdown-menu">
                <a href="#scrum-template" className="dropdown-item" onClick={(e) => handleLinkClick('pricing', e)}>
                  <span className="item-title">Scrum Template</span>
                  <span className="item-desc">Continuous sprint visual boards</span>
                </a>
                <a href="#kanban-template" className="dropdown-item" onClick={(e) => handleLinkClick('pricing', e)}>
                  <span className="item-title">Kanban Template</span>
                  <span className="item-desc">Visual work in progress limiters</span>
                </a>
              </div>
            </div>

            <a 
              href="#pricing" 
              className={`nav-link-item ${currentView === 'pricing' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick('pricing', e)}
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="nav-right">
          <Button 
            variant="primary" 
            className="get-it-free-pill" 
            onClick={(e) => handleLinkClick('get-it-free', e)}
          >
            Get it free
          </Button>

          <button 
            type="button" 
            className="search-circle-btn"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          <div className="nav-divider"></div>

          <button 
            type="button" 
            className="theme-toggle-btn"
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="#signin" 
            className="signin-link"
            onClick={(e) => handleLinkClick('signin', e)}
          >
            Sign in
          </a>

          <button 
            type="button" 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu">
          <a href="#features" className={`mobile-nav-item ${currentView === 'features' ? 'active' : ''}`} onClick={(e) => handleLinkClick('features', e)}>Features</a>
          <a href="#solutions" className={`mobile-nav-item ${currentView === 'solutions' ? 'active' : ''}`} onClick={(e) => handleLinkClick('solutions', e)}>Solutions</a>
          <a href="#guide" className={`mobile-nav-item ${currentView === 'guide' ? 'active' : ''}`} onClick={(e) => handleLinkClick('guide', e)}>Guide</a>
          <a href="#templates" className="mobile-nav-item" onClick={(e) => handleLinkClick('pricing', e)}>Templates</a>
          <a href="#pricing" className={`mobile-nav-item ${currentView === 'pricing' ? 'active' : ''}`} onClick={(e) => handleLinkClick('pricing', e)}>Pricing</a>
          <div className="mobile-divider"></div>
          <div className="mobile-nav-actions">
            <Button variant="outline" className="mobile-action-btn" onClick={(e) => handleLinkClick('signin', e)}>Sign in</Button>
            <Button variant="primary" className="mobile-action-btn" onClick={(e) => handleLinkClick('get-it-free', e)}>Get it free</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
