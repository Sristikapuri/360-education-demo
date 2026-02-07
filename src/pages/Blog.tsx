import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Universities for Computer Science in 2024",
      excerpt: "Discover the best universities worldwide for pursuing a Computer Science degree, including admission requirements and career prospects.",
      author: "Priya Sharma",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "University Rankings",
      image: "https://picsum.photos/400/250?random=blog1",
      featured: true
    },
    {
      id: 2,
      title: "Complete Guide to Student Visas for USA",
      excerpt: "Everything you need to know about obtaining a student visa for the United States, from application to interview preparation.",
      author: "Rahul Kumar",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Visa Guide",
      image: "https://picsum.photos/400/250?random=blog2",
      featured: true
    },
    {
      id: 3,
      title: "Scholarship Opportunities for Indian Students",
      excerpt: "Explore various scholarships available for Indian students planning to study abroad, including eligibility and application tips.",
      author: "Ananya Reddy",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Scholarships",
      image: "https://picsum.photos/400/250?random=blog3",
      featured: false
    },
    {
      id: 4,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "A comprehensive comparison between IELTS and TOEFL to help you choose the right English proficiency test.",
      author: "Sameer Patel",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Test Preparation",
      image: "https://picsum.photos/400/250?random=blog4",
      featured: false
    },
    {
      id: 5,
      title: "Part-Time Work Options for International Students",
      excerpt: "Learn about part-time work opportunities available for international students in different countries.",
      author: "Neha Gupta",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Student Life",
      image: "https://picsum.photos/400/250?random=blog5",
      featured: false
    },
    {
      id: 6,
      title: "How to Write a Winning Statement of Purpose",
      excerpt: "Expert tips and examples for crafting an impressive SOP that stands out to university admissions committees.",
      author: "Arjun Singh",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Application Tips",
      image: "https://picsum.photos/400/250?random=blog6",
      featured: false
    }
  ];

  const categories = ["All", "University Rankings", "Visa Guide", "Scholarships", "Test Preparation", "Application Tips", "Student Life"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, tips, and insights about studying abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    category === "All"
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-secondary text-white px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recent Posts */}
          <h2 className="text-3xl font-bold text-dark mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on studying abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
              Subscribe
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
