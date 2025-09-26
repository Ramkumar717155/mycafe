import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Star, Heart, Eye } from 'lucide-react';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const menuItems = [
    {
      id: 1,
      name: 'Hyderabadi Biryani',
      category: 'Biryani',
      price: 65.00,
      originalPrice: 90.00,
      rating: 4.5,
      reviews: 24,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Chicken Masala',
      category: 'Chicken',
      price: 80.00,
      rating: 5.0,
      reviews: 30,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Spicy Burger',
      category: 'Burger',
      price: 100.00,
      originalPrice: 110.00,
      rating: 4.5,
      reviews: 17,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Fried Chicken',
      category: 'Chicken',
      price: 99.00,
      rating: 3.0,
      reviews: 22,
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Mozzarella Sticks',
      category: 'Appetizer',
      price: 75.00,
      rating: 4.5,
      reviews: 72,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: 'Popcorn Chicken',
      category: 'Chicken',
      price: 69.00,
      originalPrice: 80.00,
      rating: 4.0,
      reviews: 57,
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      name: 'Chicken Wings',
      category: 'Chicken',
      price: 79.00,
      originalPrice: 90.00,
      rating: 3.5,
      reviews: 43,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      name: 'Onion Rings',
      category: 'Appetizer',
      price: 110.00,
      rating: 5.0,
      reviews: 62,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Breadcrumb title="Popular Foods Menu" currentPage="Menu" />
      
      <section className="menu_page mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          {/* Search Area */}
          <form className="menu_search_area mb-5 p-4 bg-light rounded" onSubmit={handleSearch}>
            <div className="row">
              <div className="col-lg-6 col-md-5 mb-3">
                <div className="menu_search">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search for food..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <div className="menu_search">
                  <select 
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Default Sorting</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="rating">Sort by Average Rating</option>
                    <option value="latest">Sort by Latest</option>
                    <option value="low-high">Sort by Price: Low to High</option>
                    <option value="high-low">Sort by Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="menu_search">
                  <button className="common_btn w-100" type="submit">Search</button>
                </div>
              </div>
            </div>
          </form>

          {/* Menu Items */}
          <div className="row">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="col-xl-3 col-sm-6 col-lg-4 mb-4">
                <div className="menu_item card border-0 shadow-sm h-100 fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="menu_item_img position-relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="card-img-top"
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                  </div>
                  <div className="card-body">
                    <a className="category badge bg-warning text-dark mb-2" href="#">
                      {item.category}
                    </a>
                    <h5 className="card-title">
                      <Link to={`/menu/${item.id}`} className="text-decoration-none text-dark">
                        {item.name}
                      </Link>
                    </h5>
                    <div className="rating mb-2 d-flex align-items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(item.rating) ? 'text-warning' : 'text-muted'}
                          fill={i < Math.floor(item.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="ms-2 text-muted">({item.reviews})</span>
                    </div>
                    <div className="price mb-3">
                      <h5 className="text-primary mb-0">
                        ${item.price.toFixed(2)}
                        {item.originalPrice && (
                          <del className="text-muted ms-2">${item.originalPrice.toFixed(2)}</del>
                        )}
                      </h5>
                    </div>
                    <button className="common_btn w-100 mb-2">Add to Cart</button>
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn btn-outline-primary btn-sm">
                        <Heart size={16} />
                      </button>
                      <Link to={`/menu/${item.id}`} className="btn btn-outline-primary btn-sm">
                        <Eye size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination mt-5">
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-long-arrow-alt-left"></i>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;