import React, { useState, useEffect } from "react";
import Sinchecker from "./components/Sinchecker";
import StarsCanvas from "./components/StarsCanvas"; // Starry background
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
    // Use overflow-auto to allow scrolling if content exceeds viewport height
    <div className="relative w-full h-screen overflow-auto">
      <StarsCanvas />
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        {loading ? <LoadingPulse /> : <Sinchecker />}
        <MouseTrail strokeColor="#e0e5ff" />
      </div>
    </div>
  );
}

export default App;
