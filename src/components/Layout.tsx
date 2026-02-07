import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Users, LogIn, UserPlus, Menu, X, Phone, Mail, Info, HelpCircle, MessageSquare } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Study Destinations', href: '/courses', icon: BookOpen },
    { name: 'Services', href: '/services', icon: MessageSquare },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Register', href: '/register', icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-dark">360 Education</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-dark hover:text-primary'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-4">
                {navigation.slice(6, 8).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-dark hover:text-primary'
                    } px-3 py-2 text-sm font-medium transition-colors`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-dark hover:text-primary px-4 py-2 text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-dark hover:text-primary p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'bg-primary text-dark'
                        : 'text-dark hover:bg-primary hover:text-dark'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4 inline mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                info@360education.com
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold">360 Education</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for study abroad guidance. We help students achieve their dreams of international education.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 98765 43210
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  info@360education.com
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-300 hover:text-primary transition-colors">
                    Study Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/students" className="text-gray-300 hover:text-primary transition-colors">
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-300 hover:text-primary transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-gray-300 hover:text-primary transition-colors">
                    University Selection
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-primary transition-colors">
                    Application Assistance
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-primary transition-colors">
                    Visa Processing
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-primary transition-colors">
                    Pre-departure Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 360 Education. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
