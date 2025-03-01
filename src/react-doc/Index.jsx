import React, { useState } from "react";
import Button from "./components/Button";

function Index() {
  const [count, setCount] = useState(0);
  //   const products = [
  //     { title: "Cabbage", isFruit: false, id: 1 },
  //     { title: "Garlic", isFruit: false, id: 2 },
  //     { title: "Apple", isFruit: true, id: 3 },
  //   ];
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount(count +1)}>Click me</button>

      {/* <Button title="Login" />
      <Button title={"Submit"} tc={"#ffff"} bc={"black"} />

      <Button title={"Register"} tc={"#ffff"} bc={"#b31c07"} />
      <Button title={"Raja"} /> */}

      {/* {products.map((item) => {
        return (
          <ul key={item.id}>
            <li style={{ color: item.isFruit ? "red" : "green" }}>
              {item.title}
            </li>
          </ul>
        );
      })} */}
      {/* {products.map((item) => {
        return (
          <ul key={item.id}>
            <li
              className={` ${item.isFruit ? "text-red-800" : "text-green-500"}`}
            >
              {item.title}
            </li>
          </ul>
        );
      })} */}
    </div>
  );
}

export default Index;
