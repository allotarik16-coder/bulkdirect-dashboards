// ADMIN DASHBOARD VERSION A: DARK THEME
import React, { useState } from 'react';
import { Plus, BarChart3, Users, TrendingUp, Eye, Edit2, Trash2, Download } from 'lucide-react';

export default function AdminDashboardA() {
  const [projects, setProjects] = useState([
    { id: 1, client: 'Fashion Boutique', products: 50000, status: 'completed', revenue: 5000, date: '2026-05-10' },
    { id: 2, client: 'Electronics Marketplace', products: 100000, status: 'in-progress', revenue: 15000, date: '2026-05-05' },
    { id: 3, client: 'Dropshipping Agency', products: 150000, status: 'in-progress', revenue: 50000, date: '2026-04-25' },
  ]);

  const stats = [
    { label: 'Total Clients', value: '12', icon: <Users className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' },
    { label: 'Products Delivered', value: '500K+', icon: <TrendingUp className="w-6 h-6" />, color: 'from-purple-500 to-pink-400' },
    { label: 'Monthly Revenue', value: '€47.5K', icon: <BarChart3 className="w-6 h-6" />, color: 'from-green-500 to-emerald-400' },
    { label: 'Active Projects', value: '8', icon: <Eye className="w-6 h-6" />, color: 'from-orange-500 to-red-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-400 opacity-10 blur-3xl rounded-full mix-blend-screen animate-pulse"></div>
      </div>

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-12 py-6 backdrop-blur-sm bg-slate-950/50 border-b border-blue-500/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          BulkDirect Admin
        </h1>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </nav>

      {/* Stats */}
      <section className="relative z-10 px-12 py-8">
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 hover:border-blue-500/50 transition">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} opacity-20 flex items-center justify-center text-blue-400 mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Table */}
      <section className="relative z-10 px-12 py-8">
        <div className="rounded-xl border border-blue-500/20 bg-slate-950/50 backdrop-blur overflow-hidden">
          <div className="px-8 py-6 border-b border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-400/10">
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-500/20 bg-slate-900/50">
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Client</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Products</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Status</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Revenue</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Date</th>
                <th className="px-8 py-4 text-left text-gray-400 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-blue-500/10 hover:bg-blue-500/5 transition">
                  <td className="px-8 py-4 text-white font-semibold">{project.client}</td>
                  <td className="px-8 py-4 text-cyan-300">{project.products.toLocaleString()} products</td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-white font-semibold">€{project.revenue.toLocaleString()}</td>
                  <td className="px-8 py-4 text-gray-400">{project.date}</td>
                  <td className="px-8 py-4 flex gap-2">
                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition">
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
      <footer className="relative z-10 px-12 py-8 mt-8 border-t border-blue-500/20 text-center text-gray-400 text-sm">
        <p>© 2026 BulkDirect Admin. Manage your agency operations here.</p>
      </footer>
    </div>
  );
}
