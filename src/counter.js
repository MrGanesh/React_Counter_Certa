import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [incrementBtnText, setIncrementBtnText] = useState("Start");
  const [currentCounterValue, setCurrentCounterValue] = useState(0);
  const [intervalState, setIntervalState] = useState();

  const incrementBtn = () => {
    let intervalStates = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    setIntervalState(intervalStates);
    setIncrementBtnText("Pause");
  };

  const resetBtn = () => {
    setCurrentCounterValue(counter);
    setIncrementBtnText("Start");
    clearInterval(intervalState);
    setCounter(0);
  };

  return (
    <div
      className="parent"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%"
      }}
    >
      Counter App
      <div
        className="counter"
        id="counter"
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh"
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          className="buttonIncrement"
          style={{
            fontSize: "60%",
            position: "relative",
            top: "30vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
            cursor: "pointer"
          }}
          onClick={() =>
            incrementBtnText === "Pause" ? resetBtn() : incrementBtn()
          }
        >
          {incrementBtnText}
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "30vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
            cursor: "pointer"
          }}
          onClick={resetBtn}
        >
          Reset
        </button>
      </div>
      {currentCounterValue > 0 && (
        <div className="counter" id="counter" style={{ margin: "20px" }}>
          Current counter: {currentCounterValue}
        </div>
      )}
    </div>
  );
};

export default Counter;
