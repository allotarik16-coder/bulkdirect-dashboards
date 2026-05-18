'use client';
export default function AdminDashboardB() {
  return (
    <div style={{ background: '#fff', color: '#111', padding: '40px', fontFamily: 'system-ui' }}>
      <h1 style={{ color: '#000', marginBottom: '30px' }}>📊 Admin Dashboard B - Minimal</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <p style={{ color: '#666' }}>Clients</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}>12</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <p style={{ color: '#666' }}>Products</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}>500K+</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <p style={{ color: '#666' }}>Revenue</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}>€47.5K</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <p style={{ color: '#666' }}>Active</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}>8</p>
        </div>
      </div>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ color: '#000', marginBottom: '20px' }}>Projects</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '10px', color: '#666' }}>Client</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#666' }}>Products</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#666' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#666' }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '10px', color: '#111' }}>Fashion Boutique</td>
              <td style={{ padding: '10px', color: '#666' }}>50,000</td>
              <td style={{ padding: '10px', color: '#666' }}>Completed</td>
              <td style={{ padding: '10px', color: '#111' }}>€5,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '10px', color: '#111' }}>Electronics</td>
              <td style={{ padding: '10px', color: '#666' }}>100,000</td>
              <td style={{ padding: '10px', color: '#666' }}>In Progress</td>
              <td style={{ padding: '10px', color: '#111' }}>€15,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '10px', color: '#111' }}>Dropshipping</td>
              <td style={{ padding: '10px', color: '#666' }}>150,000</td>
              <td style={{ padding: '10px', color: '#666' }}>In Progress</td>
              <td style={{ padding: '10px', color: '#111' }}>€50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
