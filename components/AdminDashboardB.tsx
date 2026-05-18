// ADMIN DASHBOARD VERSION B: CLEAN MINIMAL
import React, { useState } from 'react';
import { Plus, Users, TrendingUp, Eye, Edit2, Trash2, Download } from 'lucide-react';

export default function AdminDashboardB() {
  const [projects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000, date: '2026-05-10' },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000, date: '2026-05-05' },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000, date: '2026-04-25' },
  ]);

  const stats = [
    { label: 'Total Clients', value: '12' },
    { label: 'Products Delivered', value: '500K+' },
    { label: 'Monthly Revenue', value: '€47.5K' },
    { label: 'Active Projects', value: '8' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">
          BulkDirect Admin
        </h1>
        <button className="px-6 py-2 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </nav>

      {/* Stats */}
      <section className="px-12 py-8 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-900 transition">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Table */}
      <section className="px-12 py-8">
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Client</th>
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Products</th>
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Status</th>
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Date</th>
                <th className="px-8 py-4 text-left text-gray-600 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-8 py-4 text-gray-900 font-semibold">{project.client}</td>
                  <td className="px-8 py-4 text-gray-600">{project.products.toLocaleString()} products</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-gray-900 font-semibold">€{project.revenue.toLocaleString()}</td>
                  <td className="px-8 py-4 text-gray-600">{project.date}</td>
                  <td className="px-8 py-4 flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-red-600 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-8 mt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p>© 2026 BulkDirect Admin. Manage your agency operations here.</p>
      </footer>
    </div>
  );
}
