import { BsHouse } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import React from "react";
import { useRouter } from "next/router";

type item = {
  icon: JSX.Element;
  text: string;
  path: string;
  description: string;
};

const listItems: item[] = [
  {
    icon: <BsHouse className='w-6 h-6' />,
    text: 'Dashboards',
    path: '/',
    description: 'This is the main page',
  },
  {
    icon: <BsChevronDoubleDown className='w-6 h-6' />,
    text: 'Counter',
    path: '/',
    description: 'This is the counter page',
  },
];

export default function Sidebar(): JSX.Element {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string>(router.pathname);
  console.log('selected::: ', selected);

  React.useEffect(() => {
    setSelected(router.pathname); // Update the selected state when the path changes
  }, [router.pathname]);

  return (
    <div className='flex'>
      <div className='relative flex flex-col bg-white text-gray-700 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
        <div className='mb-2 p-4'>
          <h5 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900'>
            Dashboard
          </h5>
        </div>
        <nav className='flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700'>
          {listItems.map((item, index) => (
            <SidebarItem key={index} description={item.description} path={item.path} icon={item.icon} text={item.text} />
          ))}
        </nav>
      </div>
    </div>
  );
}
