import React, { useEffect, useState } from "react";

function TimerCount() {
  const [count, setCount] = useState(0);
  const [isCLick, setIsClick] = useState(false);
  const [min, setMin] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isCLick) {
      interval = setInterval(() => {
        setCount((pev) => {
          if (pev === 9) {
            setMin(min + 1);
            return 0;
          }
          return pev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCLick]);

  const handleRest = () => {
    setCount(0);
    setIsClick(false);
    setMin(0);
  };
  return (
    <div style={{ justifyItems: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: 50, textAlign: "center" }}>
        Time : {min} : {count}
      </h1>
      <div style={{ padding: 10 }}>
        <button style={{ padding: 10 }} onClick={() => setIsClick(true)}>
          Start
        </button>
        <button style={{ padding: 10 }} onClick={() => setIsClick(false)}>
          Stop
        </button>
        <button style={{ padding: 10 }} onClick={handleRest}>
          Rest
        </button>
      </div>
    </div>
  );
}

export default TimerCount;
