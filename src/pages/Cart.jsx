import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Minus, Plus, X, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hyderabadi Biryani',
      size: 'Medium',
      extras: ['Coca-Cola', '7UP'],
      price: 180.00,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Chicken Masala',
      size: 'Small',
      extras: [],
      price: 140.00,
      quantity: 1,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Spicy Burger',
      size: 'Large',
      extras: ['Coca-Cola', '7UP'],
      price: 220.00,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 0.00;
  const discount = 10.00;
  const total = subtotal + delivery - discount;

  const applyCoupon = (e) => {
    e.preventDefault();
    console.log('Applying coupon:', couponCode);
    // Handle coupon application
  };

  return (
    <div>
      <Breadcrumb title="Cart View" currentPage="Cart View" />
      
      <section className="cart_view mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="cart_list bg-white rounded shadow-sm p-4 fadeInUp">
                {cartItems.length === 0 ? (
                  <div className="text-center py-5">
                    <ShoppingCart size={64} className="text-muted mb-3" />
                    <h4 className="text-muted">Your cart is empty</h4>
                    <Link to="/menu" className="common_btn mt-3">Continue Shopping</Link>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Details</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>
                            <button 
                              className="btn btn-link text-danger p-0"
                              onClick={clearAll}
                            >
                              Clear All
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="img-fluid rounded"
                                style={{width: '80px', height: '80px', objectFit: 'cover'}}
                              />
                            </td>
                            <td>
                              <div>
                                <h6 className="mb-1">{item.name}</h6>
                                <small className="text-muted d-block">Size: {item.size}</small>
                                {item.extras.map((extra, index) => (
                                  <small key={index} className="text-muted d-block">{extra}</small>
                                ))}
                              </div>
                            </td>
                            <td>
                              <strong>${item.price.toFixed(2)}</strong>
                            </td>
                            <td>
                              <div className="quentity_btn d-flex align-items-center">
                                <button 
                                  className="btn btn-danger btn-sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus size={14} />
                                </button>
                                <input 
                                  type="text" 
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="mx-2 text-center"
                                  style={{width: '50px'}}
                                />
                                <button 
                                  className="btn btn-success btn-sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                            </td>
                            <td>
                              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                            </td>
                            <td>
                              <button 
                                className="btn btn-link text-danger p-0"
                                onClick={() => removeItem(item.id)}
                              >
                                <X size={20} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {cartItems.length > 0 && (
              <div className="col-lg-12">
                <div className="cart_list_footer_button mt-4 fadeInUp">
                  <div className="row">
                    <div className="col-xl-7 col-md-6 mb-4">
                      <div className="cart_list_footer_button_img">
                        <img 
                          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="Cart offer" 
                          className="img-fluid w-100 rounded"
                          style={{height: '300px', objectFit: 'cover'}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-5 col-md-6">
                      <div className="cart_list_footer_button_text bg-light p-4 rounded">
                        <h6 className="mb-3">Total Cart ({cartItems.length})</h6>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Subtotal:</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Delivery:</span>
                          <span>${delivery.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <span>Discount:</span>
                          <span className="text-success">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4 fw-bold border-top pt-3">
                          <span>Total:</span>
                          <span className="text-primary">${total.toFixed(2)}</span>
                        </div>
                        
                        <form onSubmit={applyCoupon} className="mb-4">
                          <div className="input-group">
                            <input 
                              type="text" 
                              className="form-control"
                              placeholder="Coupon Code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit">
                              Apply
                            </button>
                          </div>
                        </form>
                        
                        <Link className="common_btn w-100 text-center" to="/checkout">
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;