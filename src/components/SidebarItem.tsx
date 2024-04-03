import Link from 'next/link';

interface SidebarItem {
  icon: JSX.Element;
  text: string;
  path: string;
  onClick?: () => void;
  description?: string;
}

export default function SidebarItem({
  icon,
  text,
  path,
  onClick,
  description,
}: SidebarItem): JSX.Element {
  return (
    <Link href={path}>
      <span
        role='button'
        tabIndex={0}
        className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'
        onClick={onClick}
      >
        <div className='grid place-items-center mr-4'>{icon}</div>
        <div>
          {text}
          {description && <span className='block text-sm text-gray-500'>{description}</span>}
        </div>
      </span>
    </Link>
  );
}