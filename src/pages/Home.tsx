import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, Star, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Courses',
      description: 'Engaging video lessons and interactive assignments',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and experienced educators',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates upon completion',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access',
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1234,
      price: 49.99,
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Web+Dev',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 892,
      price: 69.99,
      image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Data+Science',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 756,
      price: 59.99,
      image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Mobile+Dev',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Future with 360 Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Access world-class courses and learn from industry experts. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Explore Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose 360 Education?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Courses Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
          <Link
            to="/courses"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            View All Courses
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">By {course.instructor}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  </div>
                  <div className="ml-4 text-sm text-gray-600">
                    {course.students.toLocaleString()} students
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
            <div className="text-gray-600">Online Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
