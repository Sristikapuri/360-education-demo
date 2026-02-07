import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, Users, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const offices = [
    {
      city: "New Delhi",
      address: "123 Connaught Place, New Delhi - 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@360education.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      city: "Mumbai",
      address: "456 Bandra West, Mumbai - 400050",
      phone: "+91 22 3456 7890",
      email: "mumbai@360education.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      city: "Bangalore",
      address: "789 Koramangala, Bangalore - 560034",
      phone: "+91 80 4567 8901",
      email: "bangalore@360education.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about studying abroad? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="university">University Selection</option>
                      <option value="application">Application Assistance</option>
                      <option value="visa">Visa Processing</option>
                      <option value="scholarship">Scholarship Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Tell us more about your requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8">Our Offices</h2>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-dark mb-4">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Other Ways to Reach Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-light rounded-xl">
              <MessageSquare className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our counselors instantly</p>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center p-8 bg-light rounded-xl">
              <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-3">Toll-Free Number</h3>
              <p className="text-gray-600 mb-4">1800-360-EDU (338)</p>
              <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
            </div>
            <div className="text-center p-8 bg-light rounded-xl">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-3">Schedule Visit</h3>
              <p className="text-gray-600 mb-4">Book an appointment with our counselors</p>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
