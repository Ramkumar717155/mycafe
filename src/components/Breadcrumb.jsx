import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, currentPage, backgroundImage }) => {
  const bgImage = backgroundImage || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200';
  
  return (
    <section 
      className="page_breadcrumb position-relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <div className="breadcrumb_text text-center text-white">
          <h1 className="display-4 fw-bold mb-3">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning" aria-current="page">
                {currentPage}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;