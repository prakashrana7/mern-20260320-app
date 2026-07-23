"use client";

import { getAllUsers } from "@/api/users";
import Spinner from "@/components/Spinner";
import useAuthStore from "@/stores/authStore";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import EditOrder from "../../order-management/_components/EditOrder";
import EditUser from "./EditUser";


const UsersTable = () => {
    const [users, setUsers]= useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(()=>{
        const timer = setTimeout(() => {
        async function fetchUsers() {
          try {
            const response = await getAllUsers(); 
            setUsers(response?.data || []);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }

        fetchUsers();
      }, 0);

    return () => clearTimeout(timer);
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
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Email</th>
              <th scope="col" className="px-4 py-3">Phone</th>
              <th scope="col" className="px-4 py-3">Address</th>
              <th scope="col" className="px-4 py-3">Roles</th>
              <th scope="col" className="px-4 py-3">CreatedAT</th>
              <th scope="col" className="px-4 py-3"><FaCog/></th>
            </tr>
          </thead>
          <tbody>
            {
              users.length == 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4">No Users.</td>
              </tr>
              ):(
            users?.map((user, index) => (
              <tr key={user._id} className="buser-b buser-gray-200 dark:buser-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{index+1}</td>
             
              <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {user?.name || "N/A"}
              </th>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{user?.email || "N/A"}</td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{user?.phone || "N/A"}</td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{user?.address ? `${user.address.city}, ${user.address.province}` : "N/A"}</td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{user?.roles?.map((role)=>(
                <span key={role} className="mr-2 bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{role}</span>   
              ))}
             </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user?.createdAt ? format(new Date(user.createdAt), "dd MMM, yyyy") : "N/A"}</td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <EditUser userId={user._id} />
              </td>
            </tr>
            )))}
          </tbody>
        </table>
      </div>
  )
}

export default UsersTable
