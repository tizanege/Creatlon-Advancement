import React from 'react';
import { Headphones, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      backgroundColor: 'var(--panel-bg)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="flex-row" style={{ gap: '32px' }}>
        <div className="flex-row" style={{ gap: '8px', color: 'var(--primary-color)', fontWeight: 700, fontSize: '20px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12 2.1 7.1"></path>
          </svg>
          CREATLON
        </div>
        
        <div className="flex-row" style={{ gap: '20px', fontSize: '15px', fontWeight: 500 }}>
          <span style={{ color: 'var(--primary-color)', cursor: 'pointer' }}>Shop</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            Brand 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </div>
      </div>

      <div className="flex-row" style={{ gap: '24px' }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search your favorite team" 
            className="input-field" 
            style={{ paddingLeft: '44px', background: 'var(--bg-color)' }}
          />
        </div>
        
        <div className="flex-row" style={{ gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--text-muted)' }}>
          <Headphones size={20} />
          Join Our Telegram Community
        </div>
        
        <div className="flex-row" style={{ gap: '12px', cursor: 'pointer', paddingLeft: '16px', borderLeft: '1px solid var(--border-color)' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <User size={18} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '14px' }}>Tasfia.ayesha</span>
        </div>
      </div>
    </nav>
  );
}
