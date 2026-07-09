"use client";

import { HOME_ROUTE, LOGIN_ROUTE, navMenu } from '@/constants/routes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import useAuthStore from '@/stores/authStore';
import { useEffect } from 'react';

const Header = () => {
  const pathname = usePathname();
  const {isAuthenticated, logout} = useAuthStore.getState();

  const router = useRouter();

  function handleLogout(){
    logout();
    
    router.replace(LOGIN_ROUTE);
  }
  useEffect(() => {}, [isAuthenticated]);

  return (
    <header className="  py-4 shadow-md bg-white dark:bg-gray-950 sticky top-0 z-10">
  <div className="container max-w-6xl mx-auto px-4">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="StepStyle" height={32} width={32} className="h-9" />
        <h1 className="text-2xl font-bold mt-1 text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text">
            StepStyle
        </h1>
      </div>
      <nav className="items-center gap-3 hidden md:flex">
        {navMenu.map((menu)=>{
            const isActive = 
            pathname == menu.route ||
             (menu.route !== HOME_ROUTE &&  pathname.startsWith(menu.route));
          return(
             <Link 
           key={menu.route}
           className={`text-dark dark:text-gray-200 px-2 py-1 hover:text-primary ${isActive ? "text-primary": ""}`}
            href={menu.route}
            >
              {menu.label}
              </Link>
          );
          })}
      </nav>
      <div className="flex items-center gap-4">
        <button id="lightThemeSwitcher" className="hidden dark:block px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
          🌞
        </button>
        <button id="darkThemeSwitcher" className="dark:hidden px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
          🌙
        </button>
        {isAuthenticated ? (<><button className="px-4 pt-1 pb-2 rounded-3xl bg-gray-100 dark:bg-gray-700 h-auto">
          🛒
          <span className="bg-primary px-2 py-0.5 text-xs rounded-xl text-white">
            5
          </span>
        </button>
          <button className="bg-primary-dark text-white px-5 py-1.5 rounded-lg hover:bg-primary cursor-pointer"
          onClick={handleLogout}
          >Log out</button>
          </>
          ):(
          <Link 
          className="bg-primary-dark text-white px-5 py-1.5 rounded-lg hover:bg-primary"
           href={LOGIN_ROUTE}
           >Login</Link>
           )}
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
