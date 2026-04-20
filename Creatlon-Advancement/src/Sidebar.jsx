import React from 'react';
import { Shirt, Layers, Upload, Type, Image as ImageIcon, PaintBucket } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Shirt, label: 'Product', id: 'product' },
    { icon: Layers, label: 'Layers', id: 'layers' },
    { icon: Upload, label: 'File', id: 'file' },
    { icon: Type, label: 'Text', id: 'text' },
    { icon: ImageIcon, label: 'Clipart', id: 'clipart' },
    { icon: PaintBucket, label: 'Fill', id: 'fill' }
  ];
  
  const [active, setActive] = React.useState('layers');

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Primary Sidebar */}
      <div className="panel" style={{ width: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0', gap: '8px', zIndex: 10 }}>
        {menuItems.map(item => (
          <div 
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
              padding: '12px 0', width: '64px', borderRadius: '12px', cursor: 'pointer',
              color: active === item.id ? 'var(--primary-color)' : 'var(--text-muted)',
              border: active === item.id ? '2px solid rgba(251, 133, 70, 0.2)' : '2px solid transparent',
              background: active === item.id ? 'rgba(251, 133, 70, 0.05)' : 'transparent',
              transition: 'all 0.2s',
            }}
          >
            <item.icon size={22} strokeWidth={active === item.id ? 2.5 : 2} />
            <span style={{ fontSize: '11px', fontWeight: active === item.id ? 600 : 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
      
      {/* Secondary Sidebar (Layers Panel Area) */}
      <div className="panel flex-col" style={{ width: '280px', padding: '32px 24px', alignItems: 'center', zIndex: 5 }}>
        <div style={{ 
          width: '160px', height: '160px', 
          background: 'radial-gradient(circle at center, #eee, transparent)', 
          borderRadius: '50%', marginBottom: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Subtle graphic placeholder */}
          <div style={{ width: '100px', height: '100px', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
            <Search size={32} color="#ccc" />
          </div>
        </div>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Start designing</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
          Your design layers will<br/>appear here.
        </p>
      </div>
    </div>
  );
}

// Temporary internal component for the graphic since Search wasn't imported
import { Search } from 'lucide-react';
