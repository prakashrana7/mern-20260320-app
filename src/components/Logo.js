import React from 'react'
import Image from 'next/image';
import { HOME_ROUTE } from '@/constants/routes';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';


const Logo = () => {
  return (
   <Link href={HOME_ROUTE} className="flex items-center gap-2">
           <Image src={logo} alt="StepStyle" height={0} width={44} className="h-10 w-10 dark:invert-[1] dark:hue-rotate-[180deg]" />
           <h1 className="text-lg md:text-2xl font-bold mt-1 text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text">
               StepStyle
           </h1>
         </Link>
  )
}

export default Logo
