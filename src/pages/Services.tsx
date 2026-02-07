import React from 'react';
import { GraduationCap, FileText, Plane, Home, Users, CheckCircle, Award, BookOpen, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "University Selection",
      description: "Expert guidance in choosing the right university based on your academic profile, career goals, and preferences.",
      features: ["Profile Assessment", "University Matching", "Application Strategy"]
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Application Assistance",
      description: "Complete support with university applications, essays, and documentation requirements.",
      features: ["Document Review", "Essay Guidance", "Application Tracking"]
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Visa Processing",
      description: "Comprehensive visa assistance with documentation and interview preparation.",
      features: ["Document Preparation", "Interview Coaching", "Follow-up Support"]
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Accommodation",
      description: "Help with finding suitable accommodation options in your study destination.",
      features: ["Host Family", "Student Housing", "Apartment Search"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Pre-departure Briefing",
      description: "Complete orientation to prepare you for life in your new country.",
      features: ["Cultural Training", "Banking Setup", "Health Insurance"]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Scholarship Support",
      description: "Assistance in finding and applying for scholarships and financial aid.",
      features: ["Scholarship Search", "Application Help", "Essay Review"]
    }
  ];

  const process = [
    { step: 1, title: "Initial Consultation", desc: "Free consultation to understand your goals" },
    { step: 2, title: "Profile Assessment", desc: "Evaluate your academic profile and preferences" },
    { step: 3, title: "University Shortlisting", desc: "Create a list of suitable universities" },
    { step: 4, title: "Application Process", desc: "Complete and submit applications" },
    { step: 5, title: "Visa & Pre-departure", desc: "Assistance with visa and travel arrangements" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for your entire study abroad journey - from application to arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and effective process to help you achieve your study abroad dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <BookOpen className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold text-dark mb-4">Test Preparation</h3>
              <p className="text-gray-600 mb-6">
                Coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for university admissions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mock tests and practice materials</li>
                <li>• Personalized coaching sessions</li>
                <li>• Test-taking strategies</li>
                <li>• Score improvement tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Globe className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold text-dark mb-4">Career Counseling</h3>
              <p className="text-gray-600 mb-6">
                Guidance on career paths and opportunities after completing your education abroad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Career assessment tests</li>
                <li>• Industry insights and trends</li>
                <li>• Resume and interview preparation</li>
                <li>• Job search assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
