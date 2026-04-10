import React from 'react';
import { PenTool, ChevronDown } from 'lucide-react';

export default function WorkspaceHeader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      backgroundColor: 'var(--panel-bg)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="flex-row" style={{ gap: '16px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px', 
          backgroundColor: 'var(--primary-color)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <PenTool size={24} />
        </div>
        <div className="flex-col">
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>Create merch for HIFH</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Design studio workspace</span>
        </div>
      </div>
      
      <div className="flex-row" style={{ gap: '12px' }}>
        {['Brand Story', 'Brand Guidelines', 'Brand Design Assets'].map((label, idx) => (
          <button key={idx} className="btn btn-outline-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
            {label}
            <ChevronDown size={14} />
          </button>
        ))}
      </div>
    </div>
  );
}
