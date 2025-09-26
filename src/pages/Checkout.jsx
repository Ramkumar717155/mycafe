import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Home, Building, Plus } from 'lucide-react';

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [billingData, setBillingData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: ''
  });

  const addresses = [
    {
      id: 'home',
      type: 'Home',
      icon: Home,
      address: 'Blackwell Street, Dry Creek, Alaska Blackwell Street, Dry Creek, Alaska.'
    },
    {
      id: 'office',
      type: 'Office',
      icon: Building,
      address: 'Blackwell Street, Dry Creek, Alaska Blackwell Street, Dry Creek, Alaska.'
    },
    {
      id: 'office2',
      type: 'Office 2',
      icon: Building,
      address: 'Blackwell Street, Dry Creek, Alaska Blackwell Street, Dry Creek, Alaska.'
    },
    {
      id: 'home2',
      type: 'Home 2',
      icon: Home,
      address: 'Blackwell Street, Dry Creek, Alaska Blackwell Street, Dry Creek, Alaska.'
    }
  ];

  const cartSummary = {
    items: 2,
    subtotal: 124.00,
    delivery: 0.00,
    discount: 10.00,
    total: 134.00
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkout data:', { selectedAddress, billingData });
    // Handle checkout submission
  };

  return (
    <div>
      <Breadcrumb title="Checkout" currentPage="Checkout" />
      
      <section className="cart_view mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 mb-4">
              <div className="checkout_form bg-white p-4 rounded shadow-sm fadeInUp">
                {/* Address Selection */}
                <div className="check_form mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Select Address</h5>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => setShowNewAddressForm(true)}
                    >
                      <Plus size={16} className="me-1" />
                      New Address
                    </button>
                  </div>

                  <div className="row">
                    {addresses.map((address) => (
                      <div key={address.id} className="col-md-6 mb-3">
                        <div className="checkout_single_address">
                          <div className="form-check p-3 border rounded">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="address" 
                              id={address.id}
                              checked={selectedAddress === address.id}
                              onChange={() => setSelectedAddress(address.id)}
                            />
                            <label className="form-check-label w-100" htmlFor={address.id}>
                              <div className="d-flex align-items-start">
                                <address.icon size={20} className="text-primary me-2 mt-1" />
                                <div>
                                  <span className="fw-bold d-block">{address.type}</span>
                                  <span className="text-muted small">{address.address}</span>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Billing Address Form */}
                <form onSubmit={handleSubmit}>
                  <h5 className="mb-4">Billing Address</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={billingData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={billingData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input 
                        type="text" 
                        name="company"
                        className="form-control"
                        placeholder="Company Name (Optional)"
                        value={billingData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <select 
                        name="country"
                        className="form-select"
                        value={billingData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="nepal">Nepal</option>
                        <option value="japan">Japan</option>
                        <option value="korea">Korea</option>
                        <option value="thailand">Thailand</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="streetAddress"
                        className="form-control"
                        placeholder="Street Address *"
                        value={billingData.streetAddress}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="apartment"
                        className="form-control"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        value={billingData.apartment}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="city"
                        className="form-control"
                        placeholder="Town / City *"
                        value={billingData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="state"
                        className="form-control"
                        placeholder="State *"
                        value={billingData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        name="zip"
                        className="form-control"
                        placeholder="Zip *"
                        value={billingData.zip}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-control"
                        placeholder="Phone *"
                        value={billingData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        name="email"
                        className="form-control"
                        placeholder="Email *"
                        value={billingData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <h5 className="mb-3">Additional Information</h5>
                      <textarea 
                        name="notes"
                        rows="4"
                        className="form-control"
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        value={billingData.notes}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-xl-4 col-lg-5">
              <div className="cart_list_footer_button_text bg-light p-4 rounded shadow-sm fadeInUp" style={{position: 'sticky', top: '100px'}}>
                <h6 className="mb-3">Total Cart ({cartSummary.items})</h6>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery:</span>
                  <span>${cartSummary.delivery.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Discount:</span>
                  <span className="text-success">-${cartSummary.discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 fw-bold border-top pt-3">
                  <span>Total:</span>
                  <span className="text-primary">${cartSummary.total.toFixed(2)}</span>
                </div>
                
                <form className="mb-4">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Coupon Code"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Apply
                    </button>
                  </div>
                </form>
                
                <Link className="common_btn w-100 text-center" to="/payment">
                  Proceed to Payment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Address Modal */}
      {showNewAddressForm && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Address</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowNewAddressForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-12 mb-3">
                      <input type="text" className="form-control" placeholder="Street Address" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="col-12">
                      <button 
                        type="button" 
                        className="common_btn w-100"
                        onClick={() => setShowNewAddressForm(false)}
                      >
                        Add Address
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;