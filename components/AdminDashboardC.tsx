'use client';
export default function AdminDashboardC() {
  return (
    <div style={{ background: '#f3f4f6', color: '#111', padding: '40px', fontFamily: 'system-ui' }}>
      <h1 style={{ color: '#2563eb', marginBottom: '30px' }}>📊 Admin Dashboard C - Corporate</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '2px solid #dbeafe' }}>
          <p style={{ color: '#666' }}>Total Clients</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb' }}>12</p>
          <p style={{ fontSize: '12px', color: '#059669' }}>+3 this month</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '2px solid #dcfce7' }}>
          <p style={{ color: '#666' }}>Products</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a' }}>500K+</p>
          <p style={{ fontSize: '12px', color: '#059669' }}>+125K this month</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '2px solid #e9d5ff' }}>
          <p style={{ color: '#666' }}>Revenue</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#9333ea' }}>€47.5K</p>
          <p style={{ fontSize: '12px', color: '#7e22ce' }}>+€15K this month</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '2px solid #fed7aa' }}>
          <p style={{ color: '#666' }}>Active Projects</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ea580c' }}>8</p>
          <p style={{ fontSize: '12px', color: '#c2410c' }}>+2 in progress</p>
        </div>
      </div>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ color: '#111', marginBottom: '20px' }}>Recent Projects</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb', background: '#f9fafb' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: '#374151', fontWeight: '600' }}>Client</th>
              <th style={{ textAlign: 'left', padding: '12px', color: '#374151', fontWeight: '600' }}>Products</th>
              <th style={{ textAlign: 'left', padding: '12px', color: '#374151', fontWeight: '600' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '12px', color: '#374151', fontWeight: '600' }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '12px', color: '#111', fontWeight: '500' }}>Fashion Boutique</td>
              <td style={{ padding: '12px', color: '#374151' }}>50,000</td>
              <td style={{ padding: '12px' }}><span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>✓ Completed</span></td>
              <td style={{ padding: '12px', color: '#111', fontWeight: 'bold' }}>€5,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '12px', color: '#111', fontWeight: '500' }}>Electronics</td>
              <td style={{ padding: '12px', color: '#374151' }}>100,000</td>
              <td style={{ padding: '12px' }}><span style={{ background: '#dbeafe', color: '#2563eb', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>⟳ In Progress</span></td>
              <td style={{ padding: '12px', color: '#111', fontWeight: 'bold' }}>€15,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '12px', color: '#111', fontWeight: '500' }}>Dropshipping</td>
              <td style={{ padding: '12px', color: '#374151' }}>150,000</td>
              <td style={{ padding: '12px' }}><span style={{ background: '#dbeafe', color: '#2563eb', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>⟳ In Progress</span></td>
              <td style={{ padding: '12px', color: '#111', fontWeight: 'bold' }}>€50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
