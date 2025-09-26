import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Star, Target, Lightbulb, Gem, ChefHat, Truck, Shield, Headphones, Users, Award } from 'lucide-react';

const About = () => {
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

  const missions = [
    {
      icon: Target,
      title: 'Vision',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis perspiciatis voluptatum odit.'
    },
    {
      icon: Lightbulb,
      title: 'Mission',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis perspiciatis voluptatum odit.'
    },
    {
      icon: Gem,
      title: 'Goals',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis perspiciatis voluptatum odit.'
    }
  ];

  const stats = [
    { icon: Users, number: '85,000', label: 'Customer Served' },
    { icon: ChefHat, number: '120', label: 'Experience Chef' },
    { icon: Users, number: '72,000', label: 'Happy Customer' },
    { icon: Award, number: '30', label: 'Winning Award' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Isita Islam',
      location: 'NYC USA',
      rating: 4.5,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil magnam a porro eaque numquam',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'John Doe',
      location: 'NYC USA',
      rating: 4.5,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil magnam a porro eaque numquam',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <div>
      <Breadcrumb title="About Us" currentPage="About Us" />
      
      {/* About Section */}
      <section className="about_us mt_100 xs_mt_70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="about_us_img position-relative fadeInUp">
                <img 
                  src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="About us" 
                  className="img-fluid rounded shadow-lg"
                />
                <div 
                  className="position-absolute bg-primary text-white p-4 rounded shadow"
                  style={{top: '20px', right: '20px'}}
                >
                  <h3 className="mb-0 text-center">
                    12+ <br />
                    <span className="fs-6">Years Experience</span>
                  </h3>
                </div>
                <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded shadow m-3">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis architecto reiciendis.
                    <br />
                    <strong>John Doe</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="section_heading text-start mb-4 fadeInUp">
                <h4>About Company</h4>
                <h2>Healthy Foods Provider</h2>
              </div>
              <div className="about_us_text fadeInUp">
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur molestiae
                  minima pariatur consequatur voluptate sapiente deleniti soluta.
                </p>
                <div className="row">
                  <div className="col-12 mb-3">
                    <h4>Trusted Partner</h4>
                    <p className="text-muted">
                      Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.
                    </p>
                  </div>
                  <div className="col-12 mb-3">
                    <h4>Fast Delivery</h4>
                    <p className="text-muted">
                      Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.
                    </p>
                  </div>
                  <div className="col-12">
                    <h4>Secure Payment</h4>
                    <p className="text-muted">
                      Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="mission mt_100 xs_mt_70 py-5"
        style={{
          background: 'linear-gradient(rgba(255,107,53,0.1), rgba(255,107,53,0.1)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="mission_text">
                {missions.map((mission, index) => (
                  <div key={index} className="d-flex align-items-start mb-4 fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="me-4">
                      <div 
                        className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                        style={{width: '60px', height: '60px'}}
                      >
                        <mission.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-capitalize">{mission.title}</h4>
                      <p className="text-muted mb-0">{mission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about_choose mt_100 xs_mt_70">
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

      {/* Stats Section */}
      <section 
        className="counter_part mt_100 xs_mt_70 py-5"
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

      {/* Testimonials */}
      <section className="testimonial pt_95 xs_pt_65 mb_100 xs_mb_70">
        <div className="container">
          <div className="section_heading mb-5 fadeInUp">
            <h4>Testimonial</h4>
            <h2>Our Customer Feedbacks</h2>
          </div>

          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="col-xl-6 mb-4">
                <div className="single_testimonial card border-0 shadow-sm fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{width: '60px', height: '60px', objectFit: 'cover'}}
                      />
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-muted mb-0">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="mb-3">{testimonial.comment}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(testimonial.rating) ? 'text-warning' : 'text-muted'}
                          fill={i < Math.floor(testimonial.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;