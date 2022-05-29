import React, { useRef, useState } from "react";
import "./Timer.css";

export const Timer = () => {
  const [click, setClick] = useState(true);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const id = useRef();
  const [stop, setStop] = useState(false);
  const [isRunnig, setIsRunnig] = useState(false);

  const handleData = () => {
    if (!isRunnig) {
      id.current = setInterval(() => {
        setStart((prev) => prev + 1);
      }, 1000);
    }
  };

  if (start === end) {
    clearInterval(id.current);
  }

  const stopTimer = () => {
    setIsRunnig(false);
    setStop(false);
    clearInterval(id.current);
  };

  const startTimer = () => {
    setIsRunnig(true);
    setStop(true);
    setStart((prev) => prev);
    handleData();
  };
  return click ? (
    <div className="timerCon">
      <h1>Add Time</h1>
      <div className="addValue">
        <input
          type="number"
          placeholder="Start"
          value={start}
          onChange={(e) => setStart(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="End"
          value={end}
          onChange={(e) => setEnd(Number(e.target.value))}
        />
      </div>
      <button
        onClick={() => {
          setClick(!click);
          handleData();
          setIsRunnig(!isRunnig);
          setStop(true);
        }}
      >
        Add Timer
      </button>
    </div>
  ) : (
    <>
      <div className="timer">
        <h1>Timer</h1>
        <h1>{start}</h1>
        <div className="buttonsForTimerCon">
          {stop ? (
            <button onClick={stopTimer} style={{ backgroundColor: "green" }}>
              stop
            </button>
          ) : (
            <button onClick={startTimer} style={{ backgroundColor: "#5087d7" }}>
              Resume
            </button>
          )}

          <button
            onClick={() => {
              setClick(!click);
              setStart();
              setEnd();
              setIsRunnig(false);
            }}
          >
            Add Data
          </button>
        </div>
      </div>
    </>
  );
};