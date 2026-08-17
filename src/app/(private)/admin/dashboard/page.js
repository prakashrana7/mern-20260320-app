"use client";

import { getAllOrders } from "@/api/orders";
import { getProducts } from "@/api/product";
import { getAllUsers } from "@/api/users";
import { getContactCount } from "@/api/contact";
import Spinner from "@/components/Spinner";
import { ORDER_CONFIRMED, ORDER_PENDING } from "@/constants/orderStatus";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaShoppingCart, FaUsers, FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { toast } from "react-toastify";

const Card = ({ value, label, color, background, border, Icon }) => {
  return (
    <div
      className={`min-w-0 w-full min-h-40 bg-white dark:bg-gray-950 dark:text-white shadow-md rounded-xl border-r-4 ${border} px-4 sm:px-5 py-5 flex items-center gap-3`}
    >
      <div className={`${background} p-4 shrink-0 rounded-full`}>
        <Icon className={`text-3xl sm:text-3xl ${color}`} />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="font-semibold text-4xl sm:text-5xl leading-none">{value}</h2>
        <p className="mt-2 text-base sm:text-lg text-gray-500 dark:text-gray-400 wrap-break-word leading-tight">{label}</p>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [contactCount, setContactCount] = useState(0);

  async function fetchDashboardData() {
    try {
      const [ordersRes, usersRes, productsRes, contactCountRes] = await Promise.all([
      getAllOrders(),
      getAllUsers(),
      getProducts(),
      getContactCount(),
      ]);

      setOrders(ordersRes?.data || []);
      setUsers(usersRes?.data || []);
      setProducts(productsRes?.data || productsRes || []); 
      setContactCount(contactCountRes);
    } catch (error) {
      console.log(error);
       toast.error("Unable to load the dashboard. Server is unavailable. Please try again later.");
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => { 
    const loadData = async () => {
    await fetchDashboardData();
   };
   loadData();
  }, []);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      <Card
        Icon={FaShoppingCart}
        value={products.length}
        label="Total Products"
        color="text-green-500"
        border="border-green-600"
        background="bg-green-100"
      />
      <Card
        Icon={FaClock}
        value={orders.filter((order) => order.status == ORDER_PENDING).length}
        label="Pending Orders"
        color="text-yellow-500"
        border="border-yellow-600"
        background="bg-yellow-100"
      />
      <Card
        Icon={FaCheckCircle}
        value={orders.filter((order) => order.status == ORDER_CONFIRMED).length}
        label="Confirmed Orders"
        color="text-blue-500"
        border="border-blue-600"
        background="bg-blue-100"
      />
      <Card
        Icon={FaUsers}
        value={users.length}
        label="Total Users"
        color="text-red-500"
        border="border-red-600"
        background="bg-red-100"
      />
      <Card
        Icon={FaEnvelope}
        value={contactCount}
        label="New Contact Messages"
        color="text-purple-500"
        border="border-purple-600"
        background="bg-purple-100"
      />
    </div>
  );
};

export default DashboardPage;