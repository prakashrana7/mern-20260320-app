import usePreferenceStore from '@/stores/preferenceStore'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const theme = usePreferenceStore((state) => state.theme);
    const { toggleTheme }= usePreferenceStore.getState();

  return (
     <button onClick={toggleTheme} className="w-full flex items-center px-2 py-1.5 text-gray-800  dark:text-gray-100 rounded hover:bg-primary/10 hover:text-primary group">
            {theme == "light"?(
            <>
            <FaMoon className="w-5 h-5 transition duration-75 group-hover:text-primary "/>
            <span className="ms-3">Dark Mode</span>
            </>
            ):(
            <>
            <FaSun className="w-5 h-5 transition duration-75 group-hover:text-primary"/>
            <span className="ms-3">Light Mode</span>
           </>
            )}
            
          </button>
  )
}

export default ThemeSwitcher
