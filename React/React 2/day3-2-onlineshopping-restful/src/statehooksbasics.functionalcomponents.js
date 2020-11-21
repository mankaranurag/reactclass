import React, { useState } from "react";

export const Counter = () => {
  const [currCount, setcurrCount] = useState(10);
  return (
    <div>
      Counter Count is : {currCount + " "}
      <button
        className="btn btn-success"
        onClick={() => setcurrCount(currCount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
// useState
//returns an array [1,2] 1 is variable, 2is uset to set value for var
