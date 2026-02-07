import React, { useState } from 'react';
import { Search, Globe, MapPin, GraduationCap, DollarSign, Clock, Star, Filter } from 'lucide-react';

interface Destination {
  id: number;
  country: string;
  description: string;
  universities: number;
  programs: string[];
  avgCost: string;
  duration: string;
  requirements: string[];
  image: string;
  rating: number;
  popularCourses: string[];
}

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const destinations: Destination[] = [
    {
      id: 1,
      country: 'United States',
      description: 'World-class education with cutting-edge research and diverse cultural experience',
      universities: 150,
      programs: ['Engineering', 'Business', 'Medicine', 'Arts', 'Computer Science'],
      avgCost: '$20,000 - $60,000/year',
      duration: '4 years',
      requirements: ['SAT/ACT', 'IELTS/TOEFL', 'GPA 3.0+', 'Recommendation Letters'],
      image: 'https://via.placeholder.com/400x250/1E90FF/FFFFFF?text=United+States',
      rating: 4.8,
      popularCourses: ['Computer Science', 'Engineering', 'Business Administration'],
    },
    {
      id: 2,
      country: 'United Kingdom',
      description: 'Prestigious universities with rich academic heritage and shorter degree programs',
      universities: 100,
      programs: ['Business', 'Law', 'Engineering', 'Medicine', 'Arts'],
      avgCost: '£15,000 - £38,000/year',
      duration: '3 years',
      requirements: ['A-Levels', 'IELTS', 'Personal Statement', 'References'],
      image: 'https://via.placeholder.com/400x250/FFD700/000000?text=United+Kingdom',
      rating: 4.9,
      popularCourses: ['Business Management', 'Law', 'Engineering'],
    },
    {
      id: 3,
      country: 'Canada',
      description: 'Quality education with affordable tuition and excellent post-graduation opportunities',
      universities: 80,
      programs: ['Engineering', 'Business', 'IT', 'Healthcare', 'Environmental Studies'],
      avgCost: 'CAD 16,000 - CAD 35,000/year',
      duration: '4 years',
      requirements: ['High School Diploma', 'IELTS', 'SOP', 'Reference Letters'],
      image: 'https://via.placeholder.com/400x250/1E90FF/FFFFFF?text=Canada',
      rating: 4.7,
      popularCourses: ['Engineering', 'Computer Science', 'Business'],
    },
    {
      id: 4,
      country: 'Australia',
      description: 'Excellent education system with great lifestyle and research opportunities',
      universities: 40,
      programs: ['Business', 'Engineering', 'Medicine', 'Arts', 'Science'],
      avgCost: 'AUD 20,000 - AUD 45,000/year',
      duration: '3-4 years',
      requirements: ['High School', 'IELTS/TOEFL', 'SOP', 'Academic Transcripts'],
      image: 'https://via.placeholder.com/400x250/FFD700/000000?text=Australia',
      rating: 4.6,
      popularCourses: ['Business Administration', 'Engineering', 'Healthcare'],
    },
    {
      id: 5,
      country: 'Germany',
      description: 'Top-notch education with minimal or no tuition fees for international students',
      universities: 120,
      programs: ['Engineering', 'Science', 'Medicine', 'Arts', 'Business'],
      avgCost: '€0 - €20,000/semester',
      duration: '3-4 years',
      requirements: ['High School', 'German Language', 'IELTS', 'Academic Records'],
      image: 'https://via.placeholder.com/400x250/1E90FF/FFFFFF?text=Germany',
      rating: 4.8,
      popularCourses: ['Engineering', 'Computer Science', 'Natural Sciences'],
    },
    {
      id: 6,
      country: 'New Zealand',
      description: 'Safe and welcoming country with excellent education system and work opportunities',
      universities: 25,
      programs: ['Business', 'IT', 'Hospitality', 'Agriculture', 'Healthcare'],
      avgCost: 'NZD 18,000 - NZD 35,000/year',
      duration: '3-4 years',
      requirements: ['High School', 'IELTS', 'SOP', 'Medical Certificate'],
      image: 'https://via.placeholder.com/400x250/FFD700/000000?text=New+Zealand',
      rating: 4.5,
      popularCourses: ['Business Studies', 'IT', 'Hospitality Management'],
    },
  ];

  const regions = ['all', 'North America', 'Europe', 'Asia-Pacific', 'Others'];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedRegion === 'all') return matchesSearch;
    
    const regionMap: Record<string, string[]> = {
      'North America': ['United States', 'Canada'],
      'Europe': ['United Kingdom', 'Germany'],
      'Asia-Pacific': ['Australia', 'New Zealand'],
    };
    
    const matchesRegion = regionMap[selectedRegion]?.includes(destination.country);
    return matchesSearch && (selectedRegion === 'Others' ? !regionMap[selectedRegion]?.includes(destination.country) : matchesRegion);
  });

  return (
    <div className="min-h-screen bg-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Study Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations around the world and find the perfect match for your educational goals
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations or programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredDestinations.length}</span> destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-2">{destination.country}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold text-dark">{destination.universities}+</div>
                    <div className="text-xs text-gray-600">Universities</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-dark">{destination.avgCost}</div>
                    <div className="text-xs text-gray-600">Avg. Cost</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold text-dark">{destination.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                </div>

                {/* Popular Courses */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Popular Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularCourses.map((course, index) => (
                      <span key={index} className="bg-primary bg-opacity-20 text-dark px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Basic Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {destination.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                    Learn More
                  </button>
                  <button className="flex-1 border-2 border-primary text-dark py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-dark mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-dark mb-8 max-w-2xl mx-auto">
            Our expert counselors can help you select the perfect study destination based on your goals and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dark text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Talk to Counselor
            </button>
            <button className="border-2 border-dark text-dark px-8 py-3 rounded-lg font-semibold hover:bg-dark hover:text-primary transition-colors">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
