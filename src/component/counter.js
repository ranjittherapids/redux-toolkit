"use client";

import { DecrementNumber, IncrementNumber } from "@/store/slices/counter-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = (prop) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  const IncreaseNumber = () => {
    dispatch(IncrementNumber());
  };

  const DecreaseNumber = () => {
    dispatch(DecrementNumber());
  };
  return (
    <>
      <div>
        <p>{value}</p>
        <div>
          <button onClick={() => IncreaseNumber()}>+</button>
          <button onClick={() => DecreaseNumber()}>-</button>
        </div>
      </div>
    </>
  );
};
