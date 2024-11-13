"use client"

import React from "react";
import { Card, Skeleton, Button } from "@nextui-org/react";

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <div>

      <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">Homelab setup</h2>



    </div>

  );
}
