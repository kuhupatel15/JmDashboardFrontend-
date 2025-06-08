import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import Center from "../Center";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div id="main" className="min-h-screen w-full flex flex-col md:flex-row relative">
      
      {/* Mobile Header with Menu Button */}
      <header className="md:hidden flex justify-between items-center p-4 bg-gray-100 shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={toggleSidebar} aria-label="Toggle sidebar menu">
          <i className={`text-3xl ${isSidebarOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`
           top-0 left-0 h-full  w-64  transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:w-1/4 md:block
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SideNav closeSidebar={closeSidebar} />
      </aside>

      {/* Overlay to close sidebar when clicking outside (mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4 overflow-y-auto h-full ">
        <Center onToggleSidebar={toggleSidebar}>
          <Outlet />
        </Center>
      </main>
    </div>
  );
};

export default DashboardLayout;
