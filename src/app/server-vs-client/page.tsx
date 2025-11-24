import React from "react";
import { add, subtract } from "@/utils/index";

const ServerComp = () => {
  const result1 = add(5, 3);
  const result2 = subtract(10, 4);
  console.log(result1);
  console.log(result2);
  console.log("This is from Server");
  return (
    <div>
      <h1>Hello from Server Compontnts</h1>
    </div>
  );
};

export default ServerComp;
