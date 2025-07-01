// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold text-indigo-600">DevBoard</h1>
      
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          ☰
        </button>
      </div>

      <ul className={`md:flex gap-6 text-gray-700 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li><Link  className="hover:text-indigo-600" to="/">Dashboard</Link><a href="#" ></a></li>
        <li><Link  className="hover:text-indigo-600" to="/tasks">Tasks</Link><a href="#" ></a></li>
        <li><Link  className="hover:text-indigo-600" to="/github">Github</Link><a href="#" ></a></li>
        <li><Link  className="hover:text-indigo-600" to="/profile">Profile</Link><a href="#" ></a></li>
      </ul>
    </nav>
  );

}
export default Navbar;