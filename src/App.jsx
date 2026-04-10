import React from 'react';
import Navbar from './Navbar';
import WorkspaceHeader from './WorkspaceHeader';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import RightPanel from './RightPanel';

function App() {
  const [isRightPanelOpen, setRightPanelOpen] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 100 }}>
        <Navbar />
      </div>
      <WorkspaceHeader />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        <Sidebar />
        <Canvas onOpenRightPanel={() => setRightPanelOpen(true)} />
        <RightPanel isOpen={isRightPanelOpen} onClose={() => setRightPanelOpen(false)} />
      </div>
    </div>
  );
}

export default App;
