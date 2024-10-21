'use client';
import Sidebar from '@/app/dashboard/_components/Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transition-transform duration-300 ${
          isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Sidebar Toggle Button */}
        {isMobile && (
          <button
            className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        )}

        {/* Main Content */}
        <main className="p-4">
          {/* Overlay for mobile sidebar */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black opacity-50"
              onClick={toggleSidebar}
            ></div>
          )}
          <div className={`${isMobile ? 'ml-0' : 'ml-64'} flex-1`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
