import { BsHouse } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className='flex'>
      <div className='relative flex flex-col bg-white text-gray-700 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
        <div className='mb-2 p-4'>
          <h5 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900'>
            Dashboard
          </h5>
        </div>
        <nav className='flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700'>
          <div
            role='button'
            tabIndex={0}
            className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'>
            <div className='grid place-items-center mr-4'>
              <BsHouse className='w-6 h-6' />
            </div>
            Dashboards
          </div>
          <div
            role='button'
            tabIndex={0}
            className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'>
            <div className='grid place-items-center mr-4'>
              <BsChevronDoubleDown className='w-6 h-6' />
            </div>
            Counter
          </div>
        </nav>
      </div>
    </div>
  );
}
