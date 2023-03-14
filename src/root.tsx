import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
