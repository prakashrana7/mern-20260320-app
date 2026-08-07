"use client";

import { getAllOrders, getOrdersByMerchant } from "@/api/orders";
import OrderStatus from "@/components/orders/OrderStatus";
import Spinner from "@/components/Spinner";
import { ROLE_ADMIN } from "@/constants/userRoles";
import useAuthStore from "@/stores/authStore";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCog, FaImage } from "react-icons/fa";
import EditOrder from "./EditOrder";
import { toast } from "react-toastify";

const OrdersTable = () => {
    const [orders, setOrders]= useState([]);
    const [loading, setLoading] = useState(true);

    const {user}= useAuthStore.getState();
   
   async function fetchOrders(){
    try{
      const response = (user.roles.includes(ROLE_ADMIN))
      ? await getAllOrders() : await getOrdersByMerchant();

    setOrders(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to load orders. Please try again later.");
    } finally {
      setLoading(false);
      }
    }
    
    useEffect(()=>{
      fetchOrders();
    }, []);
    
    if(loading)
    return (
      <div className="flex justify-center"><Spinner/></div>
    );
    
  return (
   <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">S.N</th>
              <th scope="col" className="px-4 py-3">Order Number</th>
              <th scope="col" className="px-4 py-3 w-95">Product</th>
              <th scope="col" className="px-4 py-3 w-60">Customer</th>
              <th scope="col" className="px-4 py-3">Total Price</th>
              <th scope="col" className="px-4 py-3"> Payment Method </th> 
              <th scope="col" className="px-4 py-3"> Payment Status </th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">CreatedAT</th>
              <th scope="col" className="px-4 py-3"><FaCog/></th>
            </tr>
          </thead>
          <tbody>
            {orders?.length == 0 ? (
              <tr>
                <td colSpan={11} className="text-center py-4">No Orders.</td>
              </tr>
              ):(
            orders?.map((order, index) => (
              <tr key={order._id} className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{index+1}</td>
              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{order.orderNumber}</span>
              </td>

              <td className="px-4 py-2 align-top text-gray-900 dark:text-white">
                <div className="w-95 space-y-3">
                  {order.orderItems.map((item, index)=>(
                <div key={index} className="flex gap-3 items-start">
                  {item.imageUrls.length > 0 ? (
                  <Image src={item.imageUrls[0]} 
                  alt={item.name} 
                  height={64} 
                  width={64} 
                  className="w-12 h-12 object-cover rounded shrink-0" />
                ):(
                <FaImage className="w-12 h-12 mr-3 rounded text-gray-500 shrink-0"/>
                )}
               <div className="min-w-0 flex-1">
                 <p className="font-medium  wrap-break-word leading-5">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}, {item.brand}</p>
               </div>
               </div>
                ))}
                </div>
              </td>

              <td className="px-4 py-2">
                <h3 className="text-gray-800 dark:text-gray-100">{order.user.name}</h3>
                <p className="text-xs">{order.user.email}</p>
                <p className="text-xs">{order.user.phone}</p>
                </td>

              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">Rs. {order.totalPrice}</td>

              <td className="px-4 py-2 whitespace-nowrap"> 
                {order.payment ? ( 
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"> 
                   {order.payment.method} </span> 
                   ) : ( 
                     <span className="text-gray-400"> Not Paid </span> )} 
              </td> 
      
              <td className="px-4 py-2 whitespace-nowrap"> 
                {order.payment ? ( 
                  <div> 
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${ 
                        order.payment.status === "SUCCESS" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                        : order.payment.status === "FAILED" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" }`} > 
                        {order.payment.status} </span> 
                        <p className="text-xs text-gray-500 mt-1"> 
                          Rs. {order.payment.amount} </p> 

                          {order.payment.transactionId && ( 
                            <p className="text-xs text-gray-400 mt-1 max-w-32 truncate" 
                            title={ order.payment .transactionId } > 
                            { order.payment .transactionId } </p> 
                          )} 
                  </div> 
                    ) : ( 
                    <span className="text-gray-400"> No Payment </span> )} 
              </td>

              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"><OrderStatus status={order.status}/></td>

              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{format(order.createdDate, "dd MMM, yyyy")}</td>
              
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <EditOrder orderId={order._id}/>
              </td>
            </tr>
            )))}
          </tbody>
        </table>
      </div>
  );
};

export default OrdersTable;
