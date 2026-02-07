import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, BookOpen, ChevronRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  duration: string;
  level: string;
  category: string;
  image: string;
  description: string;
}

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1234,
      price: 49.99,
      duration: '8 weeks',
      level: 'Beginner',
      category: 'Web Development',
      image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Web+Dev',
      description: 'Learn HTML, CSS, and JavaScript from scratch',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 892,
      price: 69.99,
      duration: '12 weeks',
      level: 'Intermediate',
      category: 'Data Science',
      image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Data+Science',
      description: 'Master data analysis and machine learning basics',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 756,
      price: 59.99,
      duration: '10 weeks',
      level: 'Intermediate',
      category: 'Mobile Development',
      image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Mobile+Dev',
      description: 'Build native iOS and Android apps',
    },
    {
      id: 4,
      title: 'Advanced React Development',
      instructor: 'Sarah Wilson',
      rating: 4.9,
      students: 623,
      price: 79.99,
      duration: '6 weeks',
      level: 'Advanced',
      category: 'Web Development',
      image: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=React',
      description: 'Deep dive into React ecosystem and patterns',
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      instructor: 'Emily Brown',
      rating: 4.6,
      students: 445,
      price: 54.99,
      duration: '8 weeks',
      level: 'Beginner',
      category: 'Design',
      image: 'https://via.placeholder.com/300x200/EC4899/FFFFFF?text=UI%2FUX',
      description: 'Learn user interface and experience design',
    },
    {
      id: 6,
      title: 'Python for Data Science',
      instructor: 'David Lee',
      rating: 4.8,
      students: 1567,
      price: 64.99,
      duration: '10 weeks',
      level: 'Intermediate',
      category: 'Data Science',
      image: 'https://via.placeholder.com/300x200/14B8A6/FFFFFF?text=Python',
      description: 'Python programming for data analysis',
    },
  ];

  const categories = ['all', 'Web Development', 'Data Science', 'Mobile Development', 'Design'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Courses</h1>
        <p className="text-xl text-gray-600">Discover our comprehensive catalog of courses</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredCourses.length}</span> courses
        </p>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium">{course.category}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{course.level}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <p className="text-gray-600 mb-4">By {course.instructor}</p>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4" />
                  <span className="ml-1">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4" />
                  <span className="ml-1">{course.duration}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                  Enroll Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
