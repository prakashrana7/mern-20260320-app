import { PRODUCTS_ROUTE } from "@/constants/routes"
import Image from "next/image"
import Link from "next/link"
import { FaImage } from "react-icons/fa"

const OrderTable = ({order}) => {
  return (
   <div className="relative overflow-x-auto py-5">
     <table className="w-full text-sm text-left rtl:text-right text-body">
    <thead className="text-sm text-body border-b border-gray-200 text-gray-500">
      <tr>
        <th scope="col" className="px-6 py-3 font-medium">
          Product
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
     {order.orderItems?.map((item, index)=>(
        <tr key={index} className="border-b border-gray-200 text-gray-700 dark:text-white">
        <td className="w-full px-6 py-4 font-semibold text-heading">
         <div className="flex items-center gap-5 ">
           {item.product.imageUrls.length> 0 ?(
            <Image src={item.product.imageUrls[0]} 
            alt="" height={100} width={100} 
            className="h-15 w-15 rounded-md object-cover" />
            ):(
            <div className='h-15 w-15 flex items-center justify-center rounded-2xl bg-primary/10'>
            <FaImage className='text-5xl text-gray-500'/>
            </div>
             )}
            <h4 className="whitespace-nowrap mr-10">{item.product.name}</h4>
         </div>
        </td>
        <td className="min-w-32 px-6 py-4">x{item.quantity}</td>
        <td className="min-w-32 px-6 py-4 font-semibold text-heading">Rs. {item.product.price}</td>
        <td className="min-w-32 px-6 py-4">
          <Link href={`${PRODUCTS_ROUTE}/${item.product._id}`} className="font-medium text-blue-600 hover:underline">View</Link>
        </td>
      </tr>
        ))}
    </tbody>
  </table>
   </div>
  )
}

export default OrderTable 
