"use client";

import { confirmOrder } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OrderConfirmationPage = () => {
    const searchParams = useSearchParams();
    const params = useParams();
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const status = searchParams.get("status");

   useEffect(()=>{
    if (status === "Cash") {
      // Cash on delivery:

      toast.success("Order confirmed. Payment will be collected on delivery.");
      setLoading(false);
      router.replace(ORDERS_ROUTE);
      return;
    }

     if(status == "Completed"){
        toast.success("Payment successful");
        //payment success, redirect to orders page
        //confirm payment

        confirmOrder(params.id, "success")
        .then(()=>{
          router.replace(ORDERS_ROUTE);
        })
        .catch((error)=>{
          console.log(error);
          toast.error("Unable to confirm payment.");
          router.replace(ORDERS_ROUTE);
        })
        .finally(() => {
          setLoading(false);
        });

      return;
    } 
        // Online payment failed
        if (status === "Failed") {
        toast.error("Payment failed",{
          onClose: () =>{
            router.replace(ORDERS_ROUTE);
          },
        });
      setLoading(false);
      return;
      }
    // Unknown status
    router.replace(ORDERS_ROUTE);
     }, [status, params.id, router]);

 if (loading) {
  return (
    <div className="flex items-center justify-center py-24">
      <Spinner/>
    </div>
  );
}

 return null;
};

export default OrderConfirmationPage;
