"use client";

import React, { Dispatch, SetStateAction } from "react";

export default function CounterPage(): JSX.Element {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    React.useState(0);

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Cart Products</span>
      <span className='text-9xl'>{count}</span>

      <div className='flex space-x-5'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-400 transition-all w-[100px] mr2'
          onClick={() => setCount((prevState) => prevState + 1)}>
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-400 transition-all w-[100px] mr2'
          onClick={() => setCount((prevState) => prevState - 1)}>
          -1
        </button>
      </div>
    </div>
  );
}
