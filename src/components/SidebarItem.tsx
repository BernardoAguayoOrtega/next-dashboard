interface SidebarItem {
  icon: JSX.Element;
  text: string;
  onClick?: () => void;
}

export default function SidebarItem({
  icon,
  text,
  onClick,
}: SidebarItem): JSX.Element {
  return (
    <div
      role='button'
      tabIndex={0}
      className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
      onClick={onClick}>
      <div className='grid place-items-center mr-4'>{icon}</div>
      {text}
    </div>
  );
}
