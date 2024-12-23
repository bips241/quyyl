import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <div className="w-20 flex-none lg:w-64 md:border-r">
        <Sidebar />
        <Navbar />
        <Toaster/>
      </div>
      <div className="flex-grow mt-[60px] ml-[13px] mr-[20px] flex-1 w-full md:overflow-y-auto p-1 mx-auto bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}