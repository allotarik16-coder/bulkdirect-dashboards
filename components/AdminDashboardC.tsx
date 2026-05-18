// ADMIN DASHBOARD VERSION C: CORPORATE
import React, { useState } from 'react';
import { Plus, Users, TrendingUp, DollarSign, Activity, Eye, Edit2, Trash2, Download, BarChart3 } from 'lucide-react';

export default function AdminDashboardC() {
  const [projects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000, date: '2026-05-10' },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000, date: '2026-05-05' },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000, date: '2026-04-25' },
    { id: 4, client: 'Fashion Network', products: 75000, status: 'completed', revenue: 7500, date: '2026-04-15' },
  ]);

  const stats = [
    { label: 'Total Clients', value: '12', change: '+3 this month', icon: <Users className="w-6 h-6" />, bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    { label: 'Products Delivered', value: '500K+', change: '+125K this month', icon: <TrendingUp className="w-6 h-6" />, bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    { label: 'Monthly Revenue', value: '€47.5K', change: '+€15K this month', icon: <DollarSign className="w-6 h-6" />, bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    { label: 'Active Projects', value: '8', change: '+2 in progress', icon: <Activity className="w-6 h-6" />, bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-gray-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">BulkDirect Admin</h1>
          <p className="text-gray-600 text-sm">Manage your agency projects</p>
        </div>
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-md">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </nav>

      {/* Stats Grid */}
      <section className="px-12 py-8">
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`p-6 rounded-lg border-2 ${stat.bg} ${stat.border} hover:shadow-md transition`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bg} ${stat.text}`}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className={`text-xs ${stat.text}`}>{stat.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-12 py-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
              <p className="text-gray-600 text-sm">All active and completed projects</p>
            </div>
            <BarChart3 className="w-6 h-6 text-gray-400" />
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Client</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Products</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Status</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Date</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-8 py-4">
                    <div>
                      <p className="text-gray-900 font-semibold">{project.client}</p>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-gray-700">{project.products.toLocaleString()}</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-gray-900 font-bold">€{project.revenue.toLocaleString()}</td>
                  <td className="px-8 py-4 text-gray-600 text-sm">{project.date}</td>
                  <td className="px-8 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-600 transition" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-8 mt-8 text-center text-gray-600 text-sm">
        <p>© 2026 BulkDirect. Enterprise project management system.</p>
      </footer>
    </div>
  );
}
