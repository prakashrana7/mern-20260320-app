"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import useCartStore from "@/stores/cartStore";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaImage, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import CheckoutButton from "./_components/CheckoutButton";
import shoes from "@/assets/images/shoes.png";

const CartPage = () => {
  const { increaseQuantity, decreaseQuantity,  removeFromCart}= useCartStore.getState();

  const products = useCartStore((state)=> state.products);
   const totalPrice = useCartStore((state)=> state.totalPrice);

  return (
    <section className="py-8 antialiased dark:bg-gray-800 md:py-16">
  <div className="mx-auto max-w-7xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
    {products.length==0? (<div>Cart is empty!</div>):(
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          {products.map((product)=>(
            <div key={product._id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <Link href={`${PRODUCTS_ROUTE}/${product._id}`} className="shrink-0 md:order-1">
                {product.imageUrls.length> 0 ?(<Image className="h-20 w-20 rounded-2xl object-cover" src={product.imageUrls[0]} alt={product.name} height={256} width={256} />
                ):(
                        <div className='h-20 w-20 flex items-center justify-center rounded-2xl bg-primary/10'>
                          <FaImage className='text-5xl text-gray-500'/>
                        </div>
                      )}
                </Link>
              <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="p-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  onClick={()=> decreaseQuantity(product)}>
                    <FaMinus className="dark:text-white"/>
                  </button>
                  <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                    {product.quantity}
                  </span>
                  <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="p-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  onClick={()=> increaseQuantity(product)}>
                    <FaPlus className="dark:text-white"/>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">Rs. {product.price}</p>
                </div>
              </div>
              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <Link href={`${PRODUCTS_ROUTE}/${product._id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product.name}</Link>
                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <FaRegHeart className="mr-2"/>
                    Add to Favorites
                  </button>
                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  onClick={()=>{
                    if(confirm("Are you sure?")){
                       removeFromCart(product);
                    }
                  }}
                  >
                    <LiaTimesSolid className="mr-2"/>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        <div className="hidden xl:mt-8 xl:block">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
          <div className="product-card">
                  <Image className="w-full h-40 object-contain" src={shoes} alt="featured" height={300} width={400} />
                  <div className="bg-gray-100 dark:bg-gray-800 pt-3 px-4 pb-4">
                    <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Sneakers</span>
                    <h4 className="font-semibold text-xl pt-1 pb-2">KTM Sneakers</h4>
                    <p>Brand: <strong>Nike</strong></p>
                    <p className="my-1 font-bold text-2xl text-primary">Rs. 8000</p>
                    <div className="grid grid-cols-2 gap-4 items-center w-full mt-2">
                    <button
                       className="bg-gray-200 dark:bg-gray-800 py-2 w-full text-center rounded-2xl text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300 border border-transparent dark:border-gray-700"
                    >
                      View
                    </button>
                    <button className="bg-primary py-2 w-full text-center rounded-2xl text-sm font-medium transition duration-300 ease text-white">
                      Add to Cart
                    </button>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {totalPrice}</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-600">-Rs. {totalPrice*0.1}</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. 100</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {totalPrice*0.13}</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">Rs. { totalPrice + totalPrice * 0.03 + 100 }</dd>
            </dl>
          </div>
          <CheckoutButton products={products} totalPrice={ totalPrice + totalPrice * 0.03 + 100 }/>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link href={PRODUCTS_ROUTE} title="Continue Shopping" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline ">
              Continue Shopping
              <FaArrowRight/>
            </Link>
          </div>
        </div>
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter voucher code" required />
            </div>
            <button type="button" className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
    )}
  </div>
</section>

  )
};

export default CartPage;
