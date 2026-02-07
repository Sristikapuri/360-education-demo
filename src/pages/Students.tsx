import React, { useState } from 'react';
import { Search, Mail, Phone, MapPin, Calendar, Award, BookOpen, TrendingUp, Users } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  coursesEnrolled: number;
  coursesCompleted: number;
  averageGrade: number;
  status: 'active' | 'inactive' | 'graduated';
  avatar: string;
}

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const students: Student[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, USA',
      joinDate: '2023-01-15',
      coursesEnrolled: 5,
      coursesCompleted: 3,
      averageGrade: 92.5,
      status: 'active',
      avatar: 'https://via.placeholder.com/50x50/3B82F6/FFFFFF?text=AJ',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Los Angeles, USA',
      joinDate: '2023-02-20',
      coursesEnrolled: 3,
      coursesCompleted: 2,
      averageGrade: 88.3,
      status: 'active',
      avatar: 'https://via.placeholder.com/50x50/10B981/FFFFFF?text=BS',
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, USA',
      joinDate: '2022-11-10',
      coursesEnrolled: 7,
      coursesCompleted: 7,
      averageGrade: 95.2,
      status: 'graduated',
      avatar: 'https://via.placeholder.com/50x50/F59E0B/FFFFFF?text=CD',
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Houston, USA',
      joinDate: '2023-03-05',
      coursesEnrolled: 2,
      coursesCompleted: 0,
      averageGrade: 0,
      status: 'inactive',
      avatar: 'https://via.placeholder.com/50x50/8B5CF6/FFFFFF?text=DW',
    },
    {
      id: 5,
      name: 'Emma Brown',
      email: 'emma.brown@email.com',
      phone: '+1 (555) 567-8901',
      location: 'Phoenix, USA',
      joinDate: '2023-04-12',
      coursesEnrolled: 4,
      coursesCompleted: 2,
      averageGrade: 90.8,
      status: 'active',
      avatar: 'https://via.placeholder.com/50x50/EC4899/FFFFFF?text=EB',
    },
  ];

  const statusOptions = ['all', 'active', 'inactive', 'graduated'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'graduated':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'active').length;
  const graduatedStudents = students.filter(s => s.status === 'graduated').length;
  const averageCompletion = students.reduce((acc, s) => acc + (s.coursesCompleted / s.coursesEnrolled * 100 || 0), 0) / students.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Management</h1>
        <p className="text-xl text-gray-600">Monitor and manage student progress and enrollment</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{totalStudents}</span>
          </div>
          <p className="text-gray-600">Total Students</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">{activeStudents}</span>
          </div>
          <p className="text-gray-600">Active Students</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Award className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">{graduatedStudents}</span>
          </div>
          <p className="text-gray-600">Graduated</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">{averageCompletion.toFixed(1)}%</span>
          </div>
          <p className="text-gray-600">Avg. Completion</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">ID: {student.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-gray-400" />
                      {student.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      {student.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {student.location}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      Joined {new Date(student.joinDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {student.coursesCompleted}/{student.coursesEnrolled} courses
                    </div>
                    <div className="text-sm text-gray-500">
                      Avg. Grade: {student.averageGrade > 0 ? `${student.averageGrade}%` : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Students;
