import React, { useContext } from "react";
import { CounterContext } from "../hooks/CounterContext";
import { MyProvider } from "../hooks/MyCounter";

function Index() {
  const { state, disPatch } = useContext(CounterContext);
   const {love ,isCount,countHandler} =useContext(MyProvider)
  console.log(state, "count");

  return (
    <>
    <h1>{love}</h1>
      <h1>{state.count}</h1>
     <h1>{isCount}</h1>
     <button onClick={countHandler}>Count Value</button>
      <button onClick={() => disPatch({ type: "INC" })}>Inc</button>
      <button onClick={() => disPatch({ type: "DEC" })}>Dec</button>
      
    </>
  );
}

export default Index;
