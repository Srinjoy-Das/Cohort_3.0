import React, {useState} from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is - {count}</h1>
      <br />
      <button className="bg-slate-300 p-2 rounded-md"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
