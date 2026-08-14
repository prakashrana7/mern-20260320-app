"use client";

import { deleteProduct, getProducts } from "@/api/product";
import Spinner from "@/components/Spinner";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCog, FaImage, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductsTable = ({currentPage, productsPerPage, onTotalChange,}) => {
    const [products, setProducts]= useState([]);
    const [loading, setLoading] = useState(true);

    const {user}= useAuthStore.getState();
   
    const fetchProducts = async () => {
      if (!user?._id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const offset =
        (currentPage - 1) * productsPerPage;

      const data = await getProducts({
        createdBy:user._id,
        limit: productsPerPage,
        offset,
        paginate: true,
      });
      
      setProducts(data?.products || []);

      onTotalChange(data?.total || 0);
      } catch (error) {
      console.log(error);

      toast.error("Unable to load products. Please try again later.");
      } finally { setLoading(false);
    }
  };

    useEffect(()=>{
      fetchProducts();
    }, [currentPage, productsPerPage]);
    
    const handleDelete = async (productId) => {
    if (!confirm("Are you Sure?")) {
      return;
    }

    try {
      await deleteProduct(productId);

      toast.success(
        "Product Deleted Successfully."
      );

      fetchProducts();
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data ||
          "Unable to delete product."
      );
    }
  };
    if(loading)
    return (
      <div className="flex justify-center"><Spinner/></div>
    );
    
  return (
   <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" className="px-4 py-3 w-12">S.N</th> 
              <th scope="col" className="px-4 py-3">Product</th>
              <th scope="col" className="px-4 py-3">Category</th>
              <th scope="col" className="px-4 py-3">Brand</th>
              <th scope="col" className="px-4 py-3">Price</th>
              <th scope="col" className="px-4 py-3">Stock</th>
              <th scope="col" className="px-4 py-3">CreatedAT</th>
              <th scope="col" className="px-4 py-3"><FaCog/></th>
            </tr>
          </thead>
          <tbody>
            {
              products.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4">No Products.</td>
              </tr>
              ):(
            products.map((product, index) => {
              const serialNumber = (currentPage - 1) * productsPerPage + index + 1;

            return (
              <tr key={product._id} className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{serialNumber}</td>
              <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.imageUrls.length > 0 ? (
                  <Image src={product.imageUrls[0]} 
                  alt={product.name} 
                  height={64} 
                  width={64} 
                  className="w-8 h-8 mr-3 object-cover rounded" />
                ):(
                <FaImage className="w-8 h-8 mr-3 rounded text-gray-500"/>
                )}
                <span className="font-medium">{product.name}</span>
              </th>
              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{product.category}</span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">{product.brand}</td>
                   <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">Rs. {product.price}</td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  <div className={`inline-block w-4 h-4 mr-2 rounded-full ${
                    product.stock<=10?"bg-red-700"
                    :product.stock <= 30?"bg-yellow-500"
                    :"bg-green-700"}`} 
                    />
                  {product.stock}
                </div>
              </td>
               <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{format(product.createdAt, "dd MMM, yyyy")}</td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex gap-2">
                <Link href={`${PRODUCT_MANAGEMENT_ROUTE}/${product._id}/edit`} ><FaPencil className="text-blue-600"/></Link>
                <button type="button" onClick={()=> handleDelete(product._id)
                }><FaTrash className="text-red-600 cursor-pointer"/></button>
                </div>
               </td>
              </tr>
              );
             })
            )}
          </tbody>
        </table>
      </div>
  );
};

export default ProductsTable;
