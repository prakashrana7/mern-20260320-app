import { PRODUCTS_ROUTE } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCart from './AddToCart'
import { FaImage } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const { name, brand, category, price, _id, imageUrls } = product;

  return (
    <div className="product-card bg-white">
      {imageUrls.length > 0 ? (
        <Image className="w-full h-40 object-cover" src={imageUrls[0]} alt="featured" height={300} width={400} />
        
      ):(
        <div className='w-full h-40 flex items-center justify-center bg-primary/10'>
          <FaImage className='text-7xl text-gray-500'/>
        </div>
      )}
        <div className="dark:bg-gray-900 pt-3 px-4 pb-4">
          <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">{category}</span>
          <Link href={`${PRODUCTS_ROUTE}/${_id}`}><h4 className="dark:text-white font-semibold text-xl pt-1 pb-2">{name}</h4>  </Link>
          <p>Brand: <strong>{brand}</strong></p>
          <p className="my-1 font-bold text-2xl text-primary">Rs. {price}</p>
          <div className="grid grid-cols-2 gap-4 items-center w-full mt-2">
          <Link
            href={`${PRODUCTS_ROUTE}/${_id}`}
             className="bg-background dark:bg-gray-800 py-2 w-full text-center rounded-2xl text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300 border border-transparent dark:border-gray-700"
          >
            View
          </Link>
          <AddToCart product={product}/>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
