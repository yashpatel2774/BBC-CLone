import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-md z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={closeSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative mt-4 mx-4">
          <input
            type="text"
            name="Search"
            placeholder="Search News, topics and more"
            className="w-full pl-2 pr-2 py-2 border border-black text-sm focus:ring outline-none"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-KcmfrOf2d3Vbg7stdeQKEQ9n18L9b6b6-oCA24CBN05hA8E-gRq7m4Y-ugqjtA5SYY&usqp=CAU"
            alt="Search"
            className="w-7 h-7 absolute top-1/2 right-2 transform -translate-y-1/2"
          />
        </div>

        <ul className="flex flex-col gap-4 p-4 font-semibold text-lg">
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/news" onClick={closeSidebar}>News</Link></li>
          <li><Link to="/sports" onClick={closeSidebar}>Sports</Link></li>
          <li><Link to="/bussiness" onClick={closeSidebar}>Business</Link></li>
          <li><Link to="/innovation" onClick={closeSidebar}>Innovation</Link></li>
          <li><Link to="/culture" onClick={closeSidebar}>Culture</Link></li>
          <li><Link to="/arts" onClick={closeSidebar}>Arts</Link></li>
          <li><Link to="/travel" onClick={closeSidebar}>Travel</Link></li>
          <li><Link to="/earth" onClick={closeSidebar}>Earth</Link></li>
          <li><Link to="/audio" onClick={closeSidebar}>Audio</Link></li>
          <li><Link to="/video" onClick={closeSidebar}>Video</Link></li>
          <li><Link to="/live" onClick={closeSidebar}>Live</Link></li>
        </ul>
      </div>

      <div className="sticky top-0 z-30 bg-white">
        <div className="flex justify-between items-center px-4 py-2 mt-[110px]">
         
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          <div className="flex gap-2">
            <div className="w-10 h-10 bg-black flex justify-center items-center rounded-2xl">
              <span className="text-white text-xl font-bold">B</span>
            </div>
            <div className="w-10 h-10 bg-black flex justify-center items-center rounded-2xl">
              <span className="text-white text-xl font-bold">B</span>
            </div>
            <div className="w-10 h-10 bg-black flex justify-center items-center rounded-2xl">
              <span className="text-white text-xl font-bold">C</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className='bg-black text-white rounded-lg px-4 py-2 font-bold hover:bg-[#3A3C3E]'>
              <Link to='/register'>Register</Link>
            </button>
            <button className='rounded-lg px-4 py-2 font-bold hover:ring-1 hover:bg-[#3A3C3E] hover:text-white'>
              <Link to='/register'>Sign In</Link>
            </button>
          </div>
        </div>

        <div className='border border-gray-500 mt-2'></div>

        <div className='flex items-center justify-center mt-1'>
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-3 text-sm font-bold">
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/">Home</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/news">News</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/sports">Sports</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/bussiness">Business</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/innovation">Innovation</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/culture">Culture</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/arts">Arts</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/travel">Travel</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/earth">Earth</Link></li>
              <li className="text-gray-300">|</li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/audio">Audio</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/video">Video</Link></li>
              <li><Link className="hover:bg-gray-600 hover:text-white hover:ring-1 px-2 py-1" to="/live">Live</Link></li>
            </ul>
          </nav>
        </div>

        <div className='border border-gray-500 mt-2'></div>
      </div>
    </>
  );
};

export default Navbar;
