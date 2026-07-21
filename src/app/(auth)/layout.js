'use client';

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
      <div className="container max-w-2xl px-4 mx-auto">
        <div className="h-max h-100vh w-full shadow-xl rounded-2xl overflow-hidden">
              <div>{children}</div>
            </div>
        </div>
    </section>
  );
};

export default AuthLayout;
