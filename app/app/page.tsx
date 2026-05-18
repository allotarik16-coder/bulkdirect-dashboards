'use client';
import { useState } from 'react';
import AdminDashboardA from '@/components/AdminDashboardA';
import AdminDashboardB from '@/components/AdminDashboardB';
import AdminDashboardC from '@/components/AdminDashboardC';

export default function Home() {
  const [version, setVersion] = useState('A');

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="flex gap-2 mb-8">
        <button onClick={() => setVersion('A')} className="px-4 py-2 bg-blue-500 text-white rounded">A: Dark</button>
        <button onClick={() => setVersion('B')} className="px-4 py-2 bg-gray-700 text-gray-300 rounded">B: Minimal</button>
        <button onClick={() => setVersion('C')} className="px-4 py-2 bg-gray-700 text-gray-300 rounded">C: Corporate</button>
      </div>

      {version === 'A' && <AdminDashboardA />}
      {version === 'B' && <AdminDashboardB />}
      {version === 'C' && <AdminDashboardC />}
    </div>
  );
}