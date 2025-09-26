import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Phone, Mail, MapPin, User, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call',
      details: ['+1347-430-9510', '+9658745554002']
    },
    {
      icon: Mail,
      title: 'Mail',
      details: ['websolutionus1@gmail.com', 'example@gmail.com']
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['7232 Broadway Suite 308, Jackson Heights, 11372, NY, United States']
    }
  ];

  return (
    <div>
      <Breadcrumb title="Contact With Us" currentPage="Contact" />
      
      <section className="contact mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="contact_form_area">
            <div className="row">
              {/* Contact Info */}
              <div className="col-xl-5 col-md-6 col-lg-5 mb-4">
                <div className="contact_info_area bg-light p-4 rounded shadow-sm fadeInUp">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact_info mb-4 pb-4 border-bottom">
                      <div className="d-flex align-items-start">
                        <div className="me-3">
                          <div 
                            className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                            style={{width: '50px', height: '50px'}}
                          >
                            <info.icon size={20} className="text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="h5 text-capitalize mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="mb-1 text-muted">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-xl-7 col-md-6 col-lg-7">
                <form className="contact_form bg-white p-4 rounded shadow-sm fadeInUp" onSubmit={handleSubmit}>
                  <h3 className="mb-4">Contact Us</h3>
                  <div className="row">
                    <div className="col-xl-12 mb-3">
                      <div className="contact_form_input position-relative">
                        <User className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                        <input 
                          type="text" 
                          name="name"
                          className="form-control ps-5"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <div className="contact_form_input position-relative">
                        <Mail className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                        <input 
                          type="email" 
                          name="email"
                          className="form-control ps-5"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <div className="contact_form_input position-relative">
                        <Phone className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                        <input 
                          type="text" 
                          name="phone"
                          className="form-control ps-5"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 mb-3">
                      <div className="contact_form_input position-relative">
                        <MessageSquare className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                        <input 
                          type="text" 
                          name="subject"
                          className="form-control ps-5"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 mb-3">
                      <div className="contact_form_input">
                        <textarea 
                          rows="5" 
                          name="message"
                          className="form-control"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <button className="common_btn d-flex align-items-center gap-2" type="submit">
                        <Send size={18} />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact_map_area">
            <div className="row mt_100 xs_mt_70">
              <div className="col-12">
                <div className="contact_map rounded overflow-hidden shadow fadeInUp">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.78758207035!2d90.43684581929195!3d23.819543211524437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1667021568123!5m2!1sen!2sbd"
                    width="100%"
                    height="400"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;