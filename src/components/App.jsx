import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [stateTime, setTime] = useState("TIME");

  function handleClick() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }
  setInterval(handleClick, 1000);

  return (
    <div className="container">
      <h1>{stateTime}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
