import React, { useState, useEffect, useRef } from 'react';

const TOKEN_PER_HASH = 0.000001;

function getRandomHashrate() {
  // Simulate between 20 and 100 hashes/sec
  return Math.floor(Math.random() * 80) + 20;
}

const MiningDashboard = () => {
  const [mining, setMining] = useState(false);
  const [hashrate, setHashrate] = useState(0);
  const [earned, setEarned] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (mining) {
      // Start mining simulation
      intervalRef.current = setInterval(() => {
        const currentHashrate = getRandomHashrate();
        setHashrate(currentHashrate);
        setEarned(prev => prev + currentHashrate * TOKEN_PER_HASH);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setHashrate(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [mining]);

  return (
    <div style={{border: "1px solid #eee", padding: 32, borderRadius: 8}}>
      <div>
        <strong>Status:</strong> {mining ? "Mining..." : "Stopped"}
      </div>
      <div>
        <strong>Hashrate:</strong> {hashrate} H/s
      </div>
      <div>
        <strong>Earned Tokens:</strong> {earned.toFixed(6)}
      </div>
      <button 
        style={{marginTop: 20, padding: "12px 32px", fontSize: 18}}
        onClick={() => setMining(m => !m)}
      >
        {mining ? "Stop Mining" : "Start Mining"}
      </button>
    </div>
  );
};

export default MiningDashboard;