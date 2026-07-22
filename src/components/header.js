"use client";

import { useState } from 'react';
import { CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, navMenu } from '@/constants/routes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import useAuthStore from '@/stores/authStore';
import usePreferenceStore from '@/stores/preferenceStore';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import useCartStore from '@/stores/cartStore';
import Logo from './Logo';
import Account from './Account';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated} = useAuthStore.getState();
  const {toggleTheme} = usePreferenceStore.getState();

  const theme = usePreferenceStore((state) => state.theme);
  const products = useCartStore((state) => state.products);

  const router = useRouter();
  const pathName = usePathname();

  if (pathName.startsWith("/admin")) return null;
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  <header className="  py-4 shadow-md bg-white dark:bg-gray-950 sticky top-0 z-10">
  <div className="container max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between gap-4">
      <Logo/>

       {/* Desktop Navigation */}
      <nav className="items-center gap-3 hidden md:flex">
        {navMenu.map((menu)=>{
            const isActive = 
            pathName == menu.route ||
             (menu.route !== HOME_ROUTE &&  pathName.startsWith(menu.route));
          return(
             <Link 
           key={menu.route}
           className={`text-dark dark:text-gray-200 px-2 py-1 hover:text-primary transition-colors ${isActive ? "text-primary font-semibold": ""}`}
            href={menu.route}
            >
              {menu.label}
              </Link>
            );
          })}
      </nav>

      {/* Action Utilities */}
      <div className="flex items-center gap-2 sm:gap-4 ml-auto md:ml-0">
        <button onClick={toggleTheme} className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-dark dark:text-white h-10 w-10 transition-colors" aria-label="Toggle theme">
          {theme == "light" ? <FaMoon/>:<FaSun/>}
        </button>
        <Link href={CART_ROUTE} className="flex items-center px-4 py-1.5 rounded-3xl bg-gray-100 dark:bg-gray-700 h-10 transition-colors">
          <span>🛒</span>
          <span className="ml-1 bg-primary px-2 py-0.5 text-xs rounded-xl text-white font-medium">
            {products.length}
          </span>
        </Link>
        {isAuthenticated ? (
          <Account/>
          ):(
          <Link 
          className="hidden sm:inline-block bg-primary-dark text-white px-5 py-1.5 rounded-lg hover:bg-primary transition-colors"
           href={LOGIN_ROUTE}
           >Login
           </Link>
           )}

           {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center md:hidden h-10 w-10 rounded-lg text-xl text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navMenu.map((menu) => {
                const isActive =
                  pathName === menu.route ||
                  (menu.route !== HOME_ROUTE && pathName.startsWith(menu.route));
                return (
                  <Link
                    key={menu.route}
                    onClick={() => setIsOpen(false)}
                    className={`text-dark dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary transition-all ${
                      isActive ? "text-primary bg-primary/10 dark:bg-primary/20 font-semibold" : ""
                    }`}
                    href={menu.route}
                  >
                    {menu.label}
                  </Link>
                );
              })}
              
              {/* Login option inside mobile menu for tiny screens */}
              {!isAuthenticated && (
                <Link
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden mt-2 text-center bg-primary-dark text-white px-5 py-2 rounded-lg hover:bg-primary transition-colors"
                  href={LOGIN_ROUTE}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        )}
    </div>
</header>
  );
};

export default Header;
