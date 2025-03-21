import React from "react";

const LoadingPulse = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-[#666ad8] rounded-full"></div>
        <div className="w-8 h-8 bg-[#666ad8]  rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-[#666ad8]  rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingPulse;