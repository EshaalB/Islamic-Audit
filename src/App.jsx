import React, { useState, useEffect } from "react";
import SinChecker from "./components/Sinchecker";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import LoadingPulse from "./components/loadingPulse";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <LoadingPulse /> : <SinChecker />}
      <MouseTrail strokeColor={"#e0e5ff"}/>
    </div>
  );
}

export default App;
