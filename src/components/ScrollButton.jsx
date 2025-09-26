import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`scroll_btn ${isVisible ? 'd-block' : 'd-none'}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--colorPrimary)',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)';
        e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      }}
    >
      <ChevronUp size={20} />
    </div>
  );
};

export default ScrollButton;