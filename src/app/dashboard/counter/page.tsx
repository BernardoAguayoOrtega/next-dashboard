
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Products</span>
      <span className="text-9xl">10</span>

      <div className="flex space-x-5">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-400 transition-all w-[100px] mr2">
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-400 transition-all w-[100px] mr2">
          -1
        </button>
      </div>
    </div>
  );
}