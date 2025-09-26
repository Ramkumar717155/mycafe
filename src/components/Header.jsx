import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket, User, Menu as MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Topbar */}
      <section className="topbar bg-light py-2 d-none d-sm-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-6 col-md-8">
              <ul className="topbar_info d-flex flex-wrap list-unstyled mb-0">
                <li className="me-4">
                  <a href="mailto:example@gmail.com" className="text-decoration-none text-dark">
                    <i className="fas fa-envelope me-2"></i> examplemail@gmail.com
                  </a>
                </li>
                <li className="d-none d-md-block">
                  <a href="tel:123456789" className="text-decoration-none text-dark">
                    <i className="fas fa-phone-alt me-2"></i> +96487452145214
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-sm-6 col-md-4">
              <ul className="topbar_icon d-flex flex-wrap justify-content-end list-unstyled mb-0">
                <li className="me-2">
                  <a href="#" className="text-decoration-none text-dark">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="me-2">
                  <a href="#" className="text-decoration-none text-dark">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="me-2">
                  <a href="#" className="text-decoration-none text-dark">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg main_menu ${isScrolled ? 'menu_fix' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
              alt="RegFood" 
              className="img-fluid" 
              style={{height: '50px', objectFit: 'contain'}}
            />
          </Link>
          
          <button 
            className="navbar-toggler border-0 bg-transparent" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/menu') ? 'active' : ''}`} to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            
            <ul className="menu_icon d-flex flex-wrap list-unstyled mb-0 align-items-center">
              <li className="me-3">
                <Link className="cart_icon position-relative text-decoration-none" to="/cart">
                  <ShoppingBasket size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    05
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-decoration-none">
                  <User size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .main_menu {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .menu_fix {
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .nav-link {
          color: #333 !important;
          font-weight: 500;
          padding: 10px 15px !important;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--colorPrimary) !important;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: var(--colorPrimary);
        }

        .cart_icon {
          color: #333;
          transition: all 0.3s ease;
        }

        .cart_icon:hover {
          color: var(--colorPrimary);
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: white;
            padding: 20px;
            margin-top: 10px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </>
  );
};

export default Header;