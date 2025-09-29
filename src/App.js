import React from 'react';
import MiningDashboard from './components/MiningDashboard';

function App() {
  return (
    <div style={{maxWidth: 600, margin: "50px auto", fontFamily: "sans-serif"}}>
      <h1>Crypto Mining Simulator</h1>
      <MiningDashboard />
    </div>
  );
}

export default App;