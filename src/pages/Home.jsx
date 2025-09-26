import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, ChefHat, Truck, Shield, Headphones } from 'lucide-react';

const Home = () => {
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
    }
  ];

  const stats = [
    { icon: Users, number: '85,000', label: 'Customer Served' },
    { icon: ChefHat, number: '120', label: 'Experience Chef' },
    { icon: Users, number: '72,000', label: 'Happy Customer' },
    { icon: Award, number: '30', label: 'Winning Award' }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Fresh Food',
      description: 'Objectively pontificate quality models before intuitive information.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Objectively pontificate quality models before intuitive information.'
    },
    {
      icon: Shield,
      title: 'Quality Maintain',
      description: 'Objectively pontificate quality models before intuitive information.'
    },
    {
      icon: Headphones,
      title: '24/7 Service',
      description: 'Objectively pontificate quality models before intuitive information.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="banner position-relative d-flex align-items-center"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner_text text-white">
                <h3 className="text-warning mb-3 fadeInUp">Welcome to RegFood</h3>
                <h1 className="display-3 fw-bold mb-4 fadeInUp">
                  Delicious Food & <br />
                  <span className="text-warning">Amazing Experience</span>
                </h1>
                <p className="lead mb-4 fadeInUp">
                  Experience the finest dining with our carefully crafted dishes made from the freshest ingredients.
                </p>
                <div className="d-flex flex-wrap gap-3 fadeInUp">
                  <Link to="/menu" className="common_btn">
                    View Menu
                  </Link>
                  <Link to="/about" className="btn btn-outline-light">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_img text-center fadeInUp">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Delicious Food" 
                  className="img-fluid rounded-circle shadow-lg"
                  style={{maxWidth: '500px', height: '500px', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="menu mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="section_heading fadeInUp">
            <h4>Our Menu</h4>
            <h2>Popular Food Items</h2>
          </div>
          
          <div className="row">
            {menuItems.map((item, index) => (
              <div key={item.id} className="col-xl-4 col-md-6 mb-4">
                <div className="menu_item card border-0 shadow-sm h-100 fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="menu_item_img position-relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="card-img-top"
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-warning text-dark">{item.category}</span>
                    </div>
                  </div>
                  <div className="card-body">
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
                    <button className="common_btn w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5 fadeInUp">
            <Link to="/menu" className="common_btn">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="counter_part py-5"
        style={{
          background: 'linear-gradient(rgba(255,107,53,0.9), rgba(255,107,53,0.9)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-xl-3 col-sm-6 col-lg-3 mb-4">
                <div className="single_counter text-center text-white fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{width: '80px', height: '80px', backgroundColor: 'rgba(255,255,255,0.2)'}}
                    >
                      <stat.icon size={32} />
                    </div>
                  </div>
                  <h2 className="display-4 fw-bold mb-2">{stat.number}</h2>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about_choose mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-8 col-lg-7 mb-4">
              <div className="section_heading text-start mb-4 fadeInUp">
                <h4>Why Choose Us</h4>
                <h2>Why We Are The Best</h2>
              </div>
              <div className="about_choose_text fadeInUp">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, itaque repudiandae
                  praesentium tempore quos, totam, facilis doloribus doloremque illo delectus.
                </p>
                <div className="row">
                  {features.map((feature, index) => (
                    <div key={index} className="col-xl-6 mb-4">
                      <div className="about_choose_text_box d-flex align-items-start">
                        <div className="me-3">
                          <div 
                            className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                            style={{width: '50px', height: '50px'}}
                          >
                            <feature.icon size={24} className="text-white" />
                          </div>
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p className="text-muted mb-0">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <div className="about_choose_img fadeInUp">
                <img 
                  src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="About us" 
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;