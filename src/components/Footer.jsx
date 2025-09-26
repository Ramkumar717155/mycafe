import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="text-white position-relative"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_20">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xxl-4 col-lg-4 col-sm-9 col-md-7 mb-4">
              <div className="footer_content">
                <Link className="footer_logo d-block mb-3" to="/">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                    alt="RegFood" 
                    className="img-fluid"
                    style={{height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}}
                  />
                </Link>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui
                  placeat inventore consectetur repellendus optio debitis.
                </p>
                <ul className="social_link d-flex flex-wrap list-unstyled">
                  <li className="me-2">
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-xxl-2 col-lg-2 col-sm-5 col-md-5 mb-4">
              <div className="footer_content">
                <h3 className="mb-3">Quick Links</h3>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                  <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                  <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
                  <li className="mb-2"><Link to="/menu" className="text-white text-decoration-none">Our Menu</Link></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none">Gallery</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-xxl-2 col-lg-2 col-sm-6 col-md-5 order-md-4 mb-4">
              <div className="footer_content">
                <h3 className="mb-3">Help Links</h3>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none">Refund Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                  <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-xxl-3 col-lg-4 col-sm-9 col-md-7 order-lg-4 mb-4">
              <div className="footer_content">
                <h3 className="mb-3">Contact Us</h3>
                <p className="info mb-2">
                  <i className="fas fa-phone-alt me-2"></i> +44 (0) 20 9994 7740
                </p>
                <p className="info mb-2">
                  <i className="fas fa-envelope me-2"></i> themefaxbd@gmail.com
                </p>
                <p className="info mb-0">
                  <i className="far fa-map-marker-alt me-2"></i> Blackwell Street, Dry Creek, Alaska
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer_bottom py-3 border-top border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer_bottom_text text-center">
                <p className="mb-0">
                  Copyright ©<b> RegFood</b> 2024. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;