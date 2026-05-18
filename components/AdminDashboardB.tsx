'use client';
import React, { useState } from 'react';
import { Plus, Eye, Edit2, Trash2 } from 'lucide-react';

export default function AdminDashboardB() {
  const [projects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000 },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000 },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000 },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">BulkDirect Admin</h1>
        <button className="px-6 py-2 rounded-lg bg-gray-900 text-white font-semibold flex items-center gap-2">
          <Plus className="w-5 h-5" /> New
        </button>
      </nav>

      <div className="px-12 py-8">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-8 py-4 text-left text-gray-600">Client</th>
                <th className="px-8 py-4 text-left text-gray-600">Products</th>
                <th className="px-8 py-4 text-left text-gray-600">Status</th>
                <th className="px-8 py-4 text-left text-gray-600">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200">
                  <td className="px-8 py-4 text-gray-900">{project.client}</td>
                  <td className="px-8 py-4 text-gray-600">{project.products}</td>
                  <td className="px-8 py-4 text-gray-600">{project.status}</td>
                  <td className="px-8 py-4 text-gray-900">€{project.revenue}</td>
                  <td className="px-8 py-4 flex gap-2">
                    <Eye className="w-4 h-4 text-gray-600 cursor-pointer" />
                    <Edit2 className="w-4 h-4 text-gray-600 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
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
