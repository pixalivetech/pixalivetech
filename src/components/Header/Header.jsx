import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from './../../assets/imgs/home/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();
  const submenuRef = useRef();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/service' },
    {
      label: 'Products',
      path: '/products',
      submenu: [
        { label: 'Interactive Shoppable Videos', path: '/products/interactive-videos' },
        { label: 'Interactive Video Branching', path: '/products/interactive-branching' },
        { label: 'Social Live Streaming', path: '/products/live-streaming' },
        { label: 'Live Shopping', path: '/products/live-shopping' },
        { label: 'Live Edutainment', path: '/products/live-edutainment' },
        { label: 'Pixalive Grow', path: '/products/pixalive-work' },
        { label: 'Pixalive Commerce', path: '/products/pixalive-commerce' },
      ],
    },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Hire Us', path: '/hireus' },
    { label: 'About Us', path: '/aboutus' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setMobileSubmenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const isWhitePath = ['/', '/features', '/hireus', '/aboutus'].includes(location.pathname);

  return (
    <>
      <div className="max-w-[1280px] p-2 mx-auto w-full sm:px-6 lg:px-12 py-4 flex justify-between items-center  md:border-b-0">
        {/* Logo */}
        <div className="flex-shrink-0 bg-black p-2 cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex space-x-8 font-lufga font-medium text-[18px] leading-[130%] relative ${['/', '/features', '/hireus', '/aboutus'].includes(location.pathname)
            ? 'text-white'
            : 'text-black'
            }`}
        >
          {navItems.map((item) =>
            item.submenu ? (
              <div className="relative group" key={item.label}>
                <span
                  className={`cursor-pointer flex items-center gap-1 ${isActive(item.path) ? 'underline underline-offset-4' : ''}`}
                >
                  {item.label}
                  <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={16} />
                </span>
                <div className="absolute left-0 mt-2 w-56 bg-black text-white shadow-lg opacity-0 
                group-hover:opacity-90 invisible group-hover:visible transition duration-200 z-50">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-4 py-2 hover:text-gray-300 hover:scale-105 transform transition-all duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path) ? 'underline underline-offset-4' : ''} hover:opacity-80`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Let's Talk Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`inline-flex items-center text-[18px] font-medium hover:opacity-80 border-black group transition-colors ${['/', '/features', '/hireus', '/aboutus'].includes(location.pathname)
              ? 'text-white'
              : 'text-black'
              } ${isActive('/contact') ? 'underline underline-offset-4' : ''}`}
          >
            Let's talk
            <span className="ml-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>


        {/* ✅ Mobile Menu Toggle (Updated Here) */}
        <button
          className="md:hidden px-4 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X size={24} className={isWhitePath ? 'text-white' : 'text-black'} />
            : <Menu size={24} className={isWhitePath ? 'text-white' : 'text-black'} />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
      >
        <div className="relative flex flex-col px-6 pt-20 gap-4 text-base font-medium">
          {/* Close Icon */}
          {/* <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={34} />
          </button> */}

          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative" ref={submenuRef}>
                <div
                  className="hover:opacity-75  cursor-pointer flex items-center justify-between"
                  onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </div>
                {mobileSubmenuOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block text-sm hover:bg-gray-200 px-2 py-1 rounded"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSubmenuOpen(false);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:opacity-75 ${isActive(item.path) ? 'underline underline-offset-4' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            className={`inline-flex items-center group transition-colors ${isActive('/contact') ? 'underline underline-offset-4' : ''
              }`}
            onClick={() => {
              setMenuOpen(false);
              setMobileSubmenuOpen(false);
            }}
          >
            Let’s talk
            <span className="ml-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              ↗
            </span>
          </Link>


          <div className="mt-12 flex">
            <div className="font-medium text-5xl sm:text-6xl md:text-[100px] bg-gradient-to-b from-black to-white bg-clip-text text-transparent text-center">
              Pixalive
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
