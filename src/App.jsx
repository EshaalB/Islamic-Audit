import React, { useState, useEffect } from "react";
import SinChecker from "./components/Sinchecker";
import StarsCanvas from "./components/StarsCanvas"; // <-- Import your starry background
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import LoadingPulse from "./components/loadingPulse";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // A parent container with full screen, relative positioning
    <div className="relative w-full h-screen overflow-hidden">
      {/* Starry background behind everything */}
      <StarsCanvas />

      {/* Main content container with higher z-index */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {loading ? <LoadingPulse /> : <SinChecker />}
        <MouseTrail strokeColor="#e0e5ff" />
      </div>
    </div>
  );
}

export default App;
