import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Section } from "../../types";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./Navbar.css";

interface NavbarProps {
  activeSection: Section;
  onSectionClick: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled } = useScrollPosition();

  const navItems: { label: string; section: Section }[] = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  const handleNavClick = (section: Section) => {
    onSectionClick(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="logo" onClick={() => handleNavClick("home")}>
          MP
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.section}>
              <a
                className={`nav-link ${
                  activeSection === item.section ? "active" : ""
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
