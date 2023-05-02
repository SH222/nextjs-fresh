"use client";

import { useState } from "react";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([100, 10, 0]);
  return (
    <>
      <h4 className="title">상품 목록</h4>
      {items.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${[i]}.png`} className="food-img"></img>
            <h4>{item} $40</h4>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </>
  );
}
