import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-container">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>Manoj</h2>
      <h3>Hyderabad</h3>
      <h4>@manojl0430</h4>
    </div>
  );
};

export default User;
