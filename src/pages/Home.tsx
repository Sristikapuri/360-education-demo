import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, Star, ChevronRight, MapPin, Calendar, Phone, Mail, Globe, Check } from 'lucide-react';

const Home: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'USA Education Fair 2024',
      date: 'March 15, 2024',
      location: 'New Delhi',
      image: 'https://via.placeholder.com/300x200/FFD700/000000?text=USA+Fair',
    },
    {
      id: 2,
      title: 'UK University Meet',
      date: 'March 20, 2024',
      location: 'Mumbai',
      image: 'https://via.placeholder.com/300x200/1E90FF/FFFFFF?text=UK+Meet',
    },
    {
      id: 3,
      title: 'Canada Study Expo',
      date: 'March 25, 2024',
      location: 'Bangalore',
      image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Canada+Expo',
    },
  ];

  const destinations = [
    {
      id: 1,
      name: 'United States',
      description: 'Top universities and research opportunities',
      image: 'https://via.placeholder.com/250x180/1E90FF/FFFFFF?text=USA',
      universities: '150+ Universities',
    },
    {
      id: 2,
      name: 'United Kingdom',
      description: 'Rich academic heritage and diverse culture',
      image: 'https://via.placeholder.com/250x180/FFD700/000000?text=UK',
      universities: '100+ Universities',
    },
    {
      id: 3,
      name: 'Canada',
      description: 'Quality education and immigration pathways',
      image: 'https://via.placeholder.com/250x180/1E90FF/FFFFFF?text=Canada',
      universities: '80+ Universities',
    },
    {
      id: 4,
      name: 'Australia',
      description: 'Excellent lifestyle and academic standards',
      image: 'https://via.placeholder.com/250x180/FFD700/000000?text=Australia',
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
      image: 'https://via.placeholder.com/60x60/1E90FF/FFFFFF?text=PS',
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      university: 'Oxford, UK',
      review: 'Professional service with personal attention. They made my dream of studying abroad come true.',
      rating: 5,
      image: 'https://via.placeholder.com/60x60/FFD700/000000?text=RK',
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      university: 'Toronto, Canada',
      review: 'From visa assistance to pre-departure orientation, everything was handled perfectly.',
      rating: 5,
      image: 'https://via.placeholder.com/60x60/1E90FF/FFFFFF?text=AR',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                Get Expert Guidance for Your Study Abroad Plans
              </h1>
              <p className="text-xl text-dark mb-8 leading-relaxed">
                Transform your dreams of international education into reality with our personalized guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-dark text-dark px-8 py-4 rounded-lg font-semibold hover:bg-dark hover:text-white transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src="https://via.placeholder.com/600x400/FFD700/000000?text=Woman+with+Books"
                alt="Woman holding books"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <button className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Start Your Journey</h2>
          <div className="bg-light rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Preferred Study Destination</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
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
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Popular Top Study Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <p className="text-sm font-medium text-secondary">{destination.universities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">A Legacy of Trust, Excellence, and Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we've been guiding students to achieve their international education dreams with personalized support and expert advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Global Reach</h3>
              <p className="text-gray-600">Partnerships with 500+ universities worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">10,000+ Students</h3>
              <p className="text-gray-600">Successfully placed in top universities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">95% Success Rate</h3>
              <p className="text-gray-600">Visa approval and university admissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Student Success Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-dark">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.university}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
