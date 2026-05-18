'use client';
import { useState } from 'react';
import AdminDashboardA from '@/components/AdminDashboardA';
import AdminDashboardB from '@/components/AdminDashboardB';
 import AdminDashboardA from '@/components/AdminDashboardA'
import AdminDashboardB from '@/components/AdminDashboardB'
import AdminDashboardC from '@/components/AdminDashboardC;

export default function Home() {
  const [version, setVersion] = useState('A');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Version Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-gray-800 p-4 rounded-lg border border-gray-700">
        <button
          onClick={() => setVersion('A')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            version === 'A'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          A: Dark
        </button>
        <button
          onClick={() => setVersion('B')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            version === 'B'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          B: Minimal
        </button>
        <button
          onClick={() => setVersion('C')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            version === 'C'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          C: Corporate
        </button>
      </div>

{version === 'A' && <AdminDashboardA />}
{version === 'B' && <AdminDashboardB />}
{version === 'C' && <AdminDashboardC />} 
    </div>
  );
}
</div>
  );
}
