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
      <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}