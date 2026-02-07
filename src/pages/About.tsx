import React from 'react';
import { Users, Award, Globe, Target, BookOpen, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              About 360 Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in international education for over 15 years, helping students achieve their dreams of studying abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <Target className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive guidance and support to students seeking international education opportunities, 
                ensuring they make informed decisions about their academic future.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading education consultancy, connecting students with world-class institutions 
                and creating global educational opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Why Choose 360 Education?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Expert Counselors</h3>
              <p className="text-gray-600">
                Our team consists of experienced education consultants with deep knowledge of international education systems.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Proven Success</h3>
              <p className="text-gray-600">
                Over 10,000 students successfully placed in top universities worldwide with 95% visa success rate.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Comprehensive Support</h3>
              <p className="text-gray-600">
                From application to visa assistance, we provide end-to-end support for your study abroad journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Honest and transparent guidance' },
              { title: 'Excellence', desc: 'Striving for the best outcomes' },
              { title: 'Student-Centric', desc: 'Your success is our priority' },
              { title: 'Innovation', desc: 'Modern approaches to education consulting' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Students Placed' },
              { number: '500+', label: 'Partner Universities' },
              { number: '15+', label: 'Years Experience' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
