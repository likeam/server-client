"use client";
import React, { useState } from "react";

const ClientComp = () => {
  const [Movies, setMovies] = useState("");
  console.log("This is from Client side");
  return (
    <div>
      <h1>Hello from Client Component</h1>
    </div>
  );
};

export default ClientComp;
