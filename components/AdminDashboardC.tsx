'use client';
import React, { useState } from 'react';
import { Plus, Eye, Edit2, Trash2 } from 'lucide-react';

export default function AdminDashboardC() {
  const [projects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000 },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000 },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000 },
    { id: 4, client: 'Fashion Network', products: 75000, status: 'completed', revenue: 7500 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-gray-200 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">BulkDirect Admin</h1>
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold flex items-center gap-2">
          <Plus className="w-5 h-5" /> New Project
        </button>
      </nav>

      <div className="px-12 py-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-8 py-4 text-left text-gray-700 font-semibold">Client</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold">Products</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold">Status</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-700 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-8 py-4 text-gray-900 font-semibold">{project.client}</td>
                  <td className="px-8 py-4 text-gray-700">{project.products}</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {project.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-gray-900 font-bold">€{project.revenue.toLocaleString()}</td>
                  <td className="px-8 py-4">
                    <div className="flex gap-2">
                      <Eye className="w-4 h-4 text-blue-600 cursor-pointer" />
                      <Edit2 className="w-4 h-4 text-blue-600 cursor-pointer" />
                      <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
