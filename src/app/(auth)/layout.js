'use client';

import Image from "next/image";

import hero from "@/assets/images/auth-hero.jpg";
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

const AuthLayout = ({children}) => {
const {isAuthenticated} = useAuthStore.getState();
  const router = useRouter();

    useEffect(() => {
        if(isAuthenticated){
            //redirect to homepage
            router.push(HOME_ROUTE);
        }
    }, []);

    if (isAuthenticated) return;
    
  return (
    <section className="py-12">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="h-max h-100vh w-full shadow-xl rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>{children}</div>
              <Image 
              height={600} 
              width={400} 
              src={hero} 
              alt="hero img" 
              className="hidden md:block object-cover w-full h-full"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
