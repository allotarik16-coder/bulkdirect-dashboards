'use client';
import React, { useState } from 'react';
import { Plus, BarChart3, TrendingUp, Eye, Edit2, Trash2, Download } from 'lucide-react';

export default function AdminDashboardA() {
  const [projects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000, date: '2026-05-10' },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000, date: '2026-05-05' },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000, date: '2026-04-25' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
      <nav className="relative z-50 flex items-center justify-between px-12 py-6 bg-slate-950/50 border-b border-blue-500/20">
        <h1 className="text-3xl font-bold text-blue-400">BulkDirect Admin</h1>
        <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold flex items-center gap-2">
          <Plus className="w-5 h-5" /> New
        </button>
      </nav>

      <div className="px-12 py-8">
        <div className="rounded-xl border border-blue-500/20 bg-slate-950/50">
          <div className="px-8 py-6 border-b border-blue-500/20">
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-500/20">
                <th className="px-8 py-4 text-left text-gray-400">Client</th>
                <th className="px-8 py-4 text-left text-gray-400">Products</th>
                <th className="px-8 py-4 text-left text-gray-400">Status</th>
                <th className="px-8 py-4 text-left text-gray-400">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-blue-500/10">
                  <td className="px-8 py-4 text-white">{project.client}</td>
                  <td className="px-8 py-4 text-cyan-300">{project.products}</td>
                  <td className="px-8 py-4 text-blue-300">{project.status}</td>
                  <td className="px-8 py-4 text-white">€{project.revenue}</td>
                  <td className="px-8 py-4 flex gap-2">
                    <Eye className="w-4 h-4 text-blue-400 cursor-pointer" />
                    <Edit2 className="w-4 h-4 text-blue-400 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-red-400 cursor-pointer" />
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
