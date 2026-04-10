import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Undo, Redo, LayoutGrid, Upload } from 'lucide-react';

export default function Canvas({ onOpenRightPanel }) {
  const views = ['Front', 'Back', 'Right sleeve', 'Left sleeve', 'Yoke', 'Inside label', 'Outside label'];
  const [activeView, setActiveView] = useState('Front');
  
  const colors = [
    { name: 'White', hex: '#FFFFFF', border: '#ddd' },
    { name: 'Black', hex: '#1A1A1A', border: '#1A1A1A' },
    { name: 'Navy', hex: '#1C2E4A', border: '#1C2E4A' },
    { name: 'Red', hex: '#CC172A', border: '#CC172A' },
    { name: 'Gray', hex: '#8B949F', border: '#8B949F' },
  ];
  const [activeColor, setActiveColor] = useState('White');

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)', position: 'relative' }}>
      {/* Canvas Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px' }}>
        <div className="flex-row" style={{ gap: '12px', color: 'var(--text-muted)' }}>
          <ZoomOut size={18} cursor="pointer" />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>100%</span>
          <ZoomIn size={18} cursor="pointer" />
        </div>
        
        <div className="flex-row" style={{ gap: '24px' }}>
          <div className="flex-row" style={{ gap: '16px', background: 'var(--panel-bg)', padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Undo size={18} color="var(--text-muted)" cursor="pointer" />
            <Redo size={18} color="var(--text-muted)" cursor="pointer" />
          </div>
          
          <div className="flex-row" style={{ gap: '8px', fontSize: '14px', fontWeight: 500 }}>
            3D
            <div style={{ width: '40px', height: '24px', background: 'var(--primary-color)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', right: '3px', boxShadow: 'var(--shadow-sm)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* View Selectors */}
      <div className="flex-row justify-center" style={{ gap: '32px', marginBottom: '24px' }}>
        {views.map(view => (
          <div 
            key={view} 
            onClick={() => setActiveView(view)}
            style={{ 
              fontSize: '14px', 
              fontWeight: activeView === view ? 600 : 500,
              color: activeView === view ? 'var(--primary-color)' : 'var(--text-main)',
              cursor: 'pointer',
              padding: '6px 12px',
              background: activeView === view ? 'rgba(251, 133, 70, 0.1)' : 'transparent',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            {view}
          </div>
        ))}
      </div>

      {/* Artboards Area */}
      <div className="flex-row justify-center" style={{ gap: '24px', flex: 1, padding: '0 32px' }}>
        
        {/* Front Artboard */}
        <div style={{ width: '400px', height: '500px', background: 'var(--panel-bg)', borderRadius: '24px', boxShadow: 'var(--shadow-md)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/shirt.png" alt="Front mockup" style={{ width: '80%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          
          {/* Print Area Overlay */}
          <div style={{
            position: 'absolute', top: '30%', width: '140px', height: '160px',
            border: '2px dashed var(--primary-color)', borderRadius: 'var(--radius-md)',
            background: 'rgba(251, 133, 70, 0.1)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer',
            color: 'var(--primary-color)'
          }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--primary-color)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Upload size={16} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 600, textAlign: 'center' }}>Upload or<br/>drop design</span>
          </div>
        </div>

        {/* Back Artboard */}
        <div style={{ width: '400px', height: '500px', background: 'var(--panel-bg)', borderRadius: '24px', boxShadow: 'var(--shadow-md)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/shirt.png" alt="Back mockup" style={{ width: '80%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </div>

        {/* Floating Tools */}
        <div 
          onClick={onOpenRightPanel}
          style={{ position: 'absolute', right: '32px', top: '150px', background: 'var(--panel-bg)', padding: '10px', borderRadius: '12px', boxShadow: 'var(--shadow-md)', cursor: 'pointer', zIndex: 10, transition: 'background 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-color)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--panel-bg)'}
        >
          <LayoutGrid size={24} color="var(--text-muted)" />
        </div>
      </div>

      {/* Colors Palette */}
      <div className="flex-row justify-center" style={{ gap: '16px', padding: '24px' }}>
        {colors.map(color => (
          <div key={color.name} className="flex-col align-center" style={{ gap: '8px' }}>
            <div 
              onClick={() => setActiveColor(color.name)}
              style={{
                width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer',
                background: color.hex,
                border: `2px solid ${color.border}`,
                boxShadow: activeColor === color.name ? '0 0 0 3px var(--bg-color), 0 0 0 5px var(--primary-color)' : 'none',
                transition: 'all 0.2s'
              }}
            />
            <span style={{ fontSize: '12px', fontWeight: 500, color: activeColor === color.name ? 'var(--primary-color)' : 'var(--text-muted)' }}>
              {color.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
