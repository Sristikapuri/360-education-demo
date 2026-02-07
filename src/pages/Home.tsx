import React from 'react';
import { Users, Award, Globe, Star, MapPin, Calendar } from 'lucide-react';
import SVGImage from '../components/SVGImage';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Home: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'USA Education Fair 2024',
      date: 'March 15, 2024',
      location: 'New Delhi',
      image: "https://picsum.photos/seed/usafair2024/300/200.jpg",
    },
    {
      id: 2,
      title: 'UK University Meet',
      date: 'March 20, 2024',
      location: 'Mumbai',
      image: "https://picsum.photos/seed/ukmeet2024/300/200.jpg",
    },
    {
      id: 3,
      title: 'Canada Study Expo',
      date: 'March 25, 2024',
      location: 'Bangalore',
      image: "https://picsum.photos/seed/canadaexpo2024/300/200.jpg",
    },
  ];

  const destinations = [
    {
      id: 1,
      name: 'United States',
      description: 'Top universities and research opportunities',
      image: "https://picsum.photos/seed/usauniversities/250/180.jpg",
      universities: '150+ Universities',
    },
    {
      id: 2,
      name: 'United Kingdom',
      description: 'Rich academic heritage and diverse culture',
      image: "https://picsum.photos/seed/ukuniversities/250/180.jpg",
      universities: '100+ Universities',
    },
    {
      id: 3,
      name: 'Canada',
      description: 'Quality education and immigration pathways',
      image: "https://picsum.photos/seed/canadauniversities/250/180.jpg",
      universities: '80+ Universities',
    },
    {
      id: 4,
      name: 'Australia',
      description: 'Excellent lifestyle and academic standards',
      image: "https://picsum.photos/seed/australiauniversities/250/180.jpg",
      universities: '40+ Universities',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      university: 'MIT, USA',
      review: 'The guidance I received was exceptional. They helped me choose the right university and assisted with the entire application process.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551432678693-82d3f2e644e?w=60&h=60&fit=crop&face=1',
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      university: 'Oxford, UK',
      review: 'Professional service with personal attention. They made my dream of studying abroad come true.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551432678693-82d3f2e644e?w=60&h=60&fit=crop&face=1',
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      university: 'Toronto, Canada',
      review: 'From visa assistance to pre-departure orientation, everything was handled perfectly.',
      rating: 5,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%231E90FF'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3EUSA Fair%3C/text%3E%3C/svg%3E",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                Get Expert Guidance for Your Study Abroad Plans
              </h1>
              <p className="text-lg md:text-xl text-dark mb-8 leading-relaxed max-w-2xl">
                Transform your dreams of international education into reality with our personalized guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-base">
                  Get Started
                </button>
                <button className="border-2 border-dark text-dark px-8 py-4 rounded-lg font-semibold hover:bg-dark hover:text-white transition-colors text-base">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <SVGImage width={300} height={200} color="#FFD700" text="Woman holding books" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark mb-16 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '192px',
                    objectFit: 'cover'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <button className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark mb-16 text-center">Start Your Journey</h2>
          <div className="bg-light rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-3">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-3">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-3">Preferred Study Destination</label>
                <select className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all">
                  <option>Select a country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark mb-16 text-center">Popular Top Study Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <p className="text-sm font-medium text-secondary">{destination.universities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">A Legacy of Trust, Excellence, and Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, we've been guiding students to achieve their international education dreams with personalized support and expert advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img
                src="https://picsum.photos/seed/360education/300/200.jpg"
                alt="Globe"
                className="h-24 w-24 rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-dark mb-3">Global Reach</h3>
              <p className="text-gray-600">Partnerships with 500+ universities worldwide</p>
            </div>
            <div className="text-center">
              <img
                src="https://picsum.photos/seed/360education/300/200.jpg"
                alt="Users"
                className="h-24 w-24 rounded-full mx-auto mb-6"
              />
              <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-3">10,000+ Students</h3>
              <p className="text-gray-600">Successfully placed in top universities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-12 w-12 text-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-3">95% Success Rate</h3>
              <p className="text-gray-600">Visa approval and university admissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark mb-16 text-center">Student Success Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#FFD700',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    borderRadius: '50%'
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                  <div>
                    <h4 className="font-semibold text-dark text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.university}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
