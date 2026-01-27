import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="nav-logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            LENS
          </a>
          <ul className="nav-links">
            <li>
              <a href="#portfolio" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
