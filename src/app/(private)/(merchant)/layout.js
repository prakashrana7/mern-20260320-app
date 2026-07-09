'use client'

import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { ROLE_MERCHANT } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MerchantLayout = ({children}) => {
    const {isAuthenticated, user} = useAuthStore.getState();

    const router = useRouter();

    useEffect(()=>{
        if (!isAuthenticated){
            // redirect to login page
            return router.replace(LOGIN_ROUTE);
        }
        if(!user.roles.includes(ROLE_MERCHANT)){
          return router.push(HOME_ROUTE);
        }
    },[]);

    if (!isAuthenticated) return;
  return (
    <>
      {children}
    </>
  )
}

export default MerchantLayout
