import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const MenuDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('large');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock data - in real app, fetch based on id
  const menuItem = {
    id: 1,
    name: 'Maxican Pizza Test Better',
    price: 320.00,
    originalPrice: 350.00,
    rating: 4.5,
    reviews: 201,
    description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  };

  const sizes = [
    { id: 'large', name: 'Large', price: 350 },
    { id: 'medium', name: 'Medium', price: 250 },
    { id: 'small', name: 'Small', price: 150 }
  ];

  const extras = [
    { id: 'coca-cola', name: 'Coca-Cola', price: 10 },
    { id: '7up', name: '7UP', price: 15 }
  ];

  const relatedItems = [
    {
      id: 2,
      name: 'Hyderabadi Biryani',
      category: 'Biryani',
      price: 65.00,
      originalPrice: 90.00,
      rating: 4.5,
      reviews: 24,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Chicken Masala',
      category: 'Chicken',
      price: 80.00,
      rating: 5.0,
      reviews: 30,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Spicy Burger',
      category: 'Burger',
      price: 100.00,
      originalPrice: 110.00,
      rating: 4.5,
      reviews: 17,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Michel Holder',
      date: '29 Oct 2022',
      rating: 4.5,
      comment: 'Sure there isn\'t anything embarrassing hidden in the middle of text. All generators on the Internet tend to repeat predefined chunks',
      avatar: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Salina Khan',
      date: '29 Oct 2022',
      rating: 4.5,
      comment: 'Sure there isn\'t anything embarrassing hidden in the middle of text. All generators on the Internet tend to repeat predefined chunks',
      avatar: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const handleExtraChange = (extraId) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculateTotal = () => {
    let total = menuItem.price;
    const selectedSizePrice = sizes.find(size => size.id === selectedSize)?.price || 0;
    const extrasPrice = selectedExtras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);
    
    return (total + selectedSizePrice + extrasPrice) * quantity;
  };

  return (
    <div>
      <Breadcrumb title="Menu Details" currentPage="Menu Details" />
      
      <section className="menu_details mt_100 xs_mt_75 mb_95 xs_mb_65">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-5 col-sm-10 col-md-9 mb-4">
              <div className="menu_details_images">
                <div className="main-image mb-3">
                  <img 
                    src={menuItem.images[0]} 
                    alt={menuItem.name}
                    className="img-fluid w-100 rounded shadow"
                    style={{height: '400px', objectFit: 'cover'}}
                  />
                </div>
                <div className="thumbnail-images d-flex gap-2">
                  {menuItem.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${menuItem.name} ${index + 1}`}
                      className="img-fluid rounded"
                      style={{width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer'}}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-7">
              <div className="menu_details_text">
                <h2 className="mb-3">{menuItem.name}</h2>
                <h3 className="price text-primary mb-3">
                  ${menuItem.price.toFixed(2)}
                  {menuItem.originalPrice && (
                    <del className="text-muted ms-2">${menuItem.originalPrice.toFixed(2)}</del>
                  )}
                </h3>
                
                <div className="rating mb-3 d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(menuItem.rating) ? 'text-warning' : 'text-muted'}
                      fill={i < Math.floor(menuItem.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="ms-2">({menuItem.reviews})</span>
                </div>

                <p className="short_description mb-4">{menuItem.description}</p>

                {/* Size Selection */}
                <div className="details_size mb-4">
                  <h5 className="mb-3">Select Size</h5>
                  {sizes.map((size) => (
                    <div key={size.id} className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="size" 
                        id={size.id}
                        checked={selectedSize === size.id}
                        onChange={() => setSelectedSize(size.id)}
                      />
                      <label className="form-check-label d-flex justify-content-between" htmlFor={size.id}>
                        <span className="text-capitalize">{size.name}</span>
                        <span className="text-success">+ ${size.price}</span>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Extra Items */}
                <div className="details_extra_item mb-4">
                  <h5 className="mb-3">Select Options <span className="text-muted">(optional)</span></h5>
                  {extras.map((extra) => (
                    <div key={extra.id} className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={extra.id}
                        checked={selectedExtras.includes(extra.id)}
                        onChange={() => handleExtraChange(extra.id)}
                      />
                      <label className="form-check-label d-flex justify-content-between" htmlFor={extra.id}>
                        <span>{extra.name}</span>
                        <span className="text-success">+ ${extra.price}</span>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Quantity */}
                <div className="details_quentity mb-4">
                  <h5 className="mb-3">Select Quantity</h5>
                  <div className="quentity_btn_area d-flex align-items-center gap-3">
                    <div className="quentity_btn d-flex align-items-center">
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input 
                        type="text" 
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="mx-2"
                      />
                      <button 
                        className="btn btn-success btn-sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <h3 className="text-primary mb-0">${calculateTotal().toFixed(2)}</h3>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="details_button_area d-flex flex-wrap gap-3">
                  <button className="common_btn d-flex align-items-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                    <Heart size={18} />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Description and Reviews */}
            <div className="col-12 mt-5">
              <div className="menu_description_area">
                <ul className="nav nav-pills mb-4" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button 
                      className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews ({reviews.length})
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {activeTab === 'description' && (
                    <div className="tab-pane fade show active">
                      <div className="menu_det_description">
                        <p className="mb-4">
                          Ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consectetur
                          ullam in? Beatae, dolorum ad ea deleniti ratione voluptatum similique omnis
                          voluptas tempora optio soluta vero veritatis reiciendis blanditiis architecto.
                        </p>
                        <ul className="mb-4">
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus.</li>
                          <li>Dolor sit amet consectetur adipisicing elit. Earum itaque nesciunt.</li>
                          <li>Corporis quo cumque facere doloribus possimus nostrum sed magni quasi.</li>
                          <li>Incidunt iste corporis quo cumque facere doloribus possimus nostrum sed.</li>
                        </ul>
                        <p>
                          Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem our
                          asIpsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
                          true generator on the Internet.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="tab-pane fade show active">
                      <div className="review_area">
                        <div className="row">
                          <div className="col-lg-8">
                            <h4 className="mb-4">{reviews.length} Reviews</h4>
                            <div className="comment">
                              {reviews.map((review) => (
                                <div key={review.id} className="single_comment d-flex mb-4 pb-4 border-bottom">
                                  <img 
                                    src={review.avatar} 
                                    alt={review.name}
                                    className="rounded-circle me-3"
                                    style={{width: '60px', height: '60px', objectFit: 'cover'}}
                                  />
                                  <div className="single_comm_text flex-grow-1">
                                    <h5 className="mb-1">
                                      {review.name} 
                                      <span className="text-muted fs-6 ms-2">{review.date}</span>
                                    </h5>
                                    <div className="rating mb-2">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          size={16} 
                                          className={i < Math.floor(review.rating) ? 'text-warning' : 'text-muted'}
                                          fill={i < Math.floor(review.rating) ? 'currentColor' : 'none'}
                                        />
                                      ))}
                                    </div>
                                    <p className="mb-0">{review.comment}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="col-lg-4">
                            <div className="post_review bg-light p-4 rounded">
                              <h4 className="mb-4">Write a Review</h4>
                              <form>
                                <div className="rating mb-3">
                                  <span className="d-block mb-2">Select your rating:</span>
                                  <div className="d-flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        size={20} 
                                        className="text-warning cursor-pointer"
                                        fill="currentColor"
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input 
                                    type="email" 
                                    className="form-control"
                                    placeholder="Email"
                                  />
                                </div>
                                <div className="mb-3">
                                  <textarea 
                                    rows="3"
                                    className="form-control"
                                    placeholder="Write your review"
                                  ></textarea>
                                </div>
                                <button className="common_btn w-100" type="submit">
                                  Submit Review
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Items */}
          <div className="related_menu mt_90 xs_mt_60">
            <h2 className="text-center mb-5">Related Items</h2>
            <div className="row">
              {relatedItems.map((item, index) => (
                <div key={item.id} className="col-xl-4 col-md-6 mb-4">
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
                      <span className="badge bg-warning text-dark mb-2">{item.category}</span>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuDetails;