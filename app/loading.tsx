// loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      {/* Simple spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Loading;