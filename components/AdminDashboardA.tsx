'use client';
export default function AdminDashboardA() {
  return (
    <div style={{ background: '#000814', color: '#fff', padding: '40px' }}>
      <h1 style={{ color: '#00d9ff', marginBottom: '30px' }}>📊 Admin Dashboard A - Dark Theme</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #00d9ff' }}>
          <p style={{ color: '#888' }}>Clients</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#00d9ff' }}>12</p>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #ff006e' }}>
          <p style={{ color: '#888' }}>Products</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff006e' }}>500K+</p>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #00ff00' }}>
          <p style={{ color: '#888' }}>Revenue</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#00ff00' }}>€47.5K</p>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #ffb703' }}>
          <p style={{ color: '#888' }}>Active</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffb703' }}>8</p>
        </div>
      </div>
      <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #00d9ff' }}>
        <h2 style={{ color: '#00d9ff', marginBottom: '20px' }}>Projects</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <th style={{ textAlign: 'left', padding: '10px', color: '#888' }}>Client</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#888' }}>Products</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#888' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#888' }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '10px', color: '#fff' }}>Fashion Boutique</td>
              <td style={{ padding: '10px', color: '#00d9ff' }}>50,000</td>
              <td style={{ padding: '10px', color: '#00ff00' }}>✓ Completed</td>
              <td style={{ padding: '10px', color: '#fff' }}>€5,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '10px', color: '#fff' }}>Electronics</td>
              <td style={{ padding: '10px', color: '#00d9ff' }}>100,000</td>
              <td style={{ padding: '10px', color: '#ffb703' }}>⟳ In Progress</td>
              <td style={{ padding: '10px', color: '#fff' }}>€15,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '10px', color: '#fff' }}>Dropshipping</td>
              <td style={{ padding: '10px', color: '#00d9ff' }}>150,000</td>
              <td style={{ padding: '10px', color: '#ffb703' }}>⟳ In Progress</td>
              <td style={{ padding: '10px', color: '#fff' }}>€50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
