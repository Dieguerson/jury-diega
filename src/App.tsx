import React from 'react';
import { Outlet } from 'react-router-dom'
import { SideBar } from './components/SideBar';
import { GitProvider } from './context/gitContext';

function App() {

  return (
    <main className="bg-[#4a5073] w-screen h-screen">
      <GitProvider>
        <SideBar />
        <Outlet />
      </GitProvider>
    </main>
  );
}

export default App;
