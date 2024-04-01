import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className='p-2 w-full text-slate-900'>{children}</div>
    </div>
  );
}
