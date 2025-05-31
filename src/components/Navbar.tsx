import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-red-600 font-bold text-2xl">EUPHORIA SINGTAM</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}>
              HOME
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}>
              ABOUT
            </Link>
            <Link to="/gallery" className={`${isActive('/gallery') ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}>
              GALLERY
            </Link>
            <Link to="/testimonials" className={`${isActive('/testimonials') ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}>
              TESTIMONIALS
            </Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-red-600' : 'text-white'} hover:text-red-600 transition`}>
              CONTACT
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white hover:text-red-600">HOME</Link>
            <Link to="/about" className="block px-3 py-2 text-white hover:text-red-600">ABOUT</Link>
            <Link to="/gallery" className="block px-3 py-2 text-white hover:text-red-600">GALLERY</Link>
            <Link to="/testimonials" className="block px-3 py-2 text-white hover:text-red-600">TESTIMONIALS</Link>
            <Link to="/contact" className="block px-3 py-2 text-white hover:text-red-600">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
}