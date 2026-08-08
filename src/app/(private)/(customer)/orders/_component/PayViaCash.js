'use client'

import { payViaCash } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const PayViaCash = ({orderId}) => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

     function initPayment(){
    setLoading(true);
    payViaCash(orderId)
    .then(() => {
      router.push(`${ORDERS_ROUTE}/confirmation/${orderId}?status=Cash`);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
  }
  return (
     <button onClick={initPayment}  disabled={loading}
     className="bg-green-600 text-white px-4 py-2 rounded-md shadow flex gap-2 items-center cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" 
    >
     <FaMoneyBill1Wave/>
   {loading ?<Spinner className="h-5! w-5!" />:"Cash"}
   </button>
  );
};

export default PayViaCash;
