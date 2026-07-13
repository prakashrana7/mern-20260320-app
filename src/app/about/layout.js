import collection from "@/assets/images/collection.jpg"
import { CONTACT_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";


const AboutLayout = ({children}) => {
  return (
    <>
      <section id="about" className="h-full py-12 dark:bg-gray-900">
      <h1 className="text-4xl text-center font-black dark:text-white ">About Us</h1>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-6 p-6 lg:p-10 gap-8 items-center ">
        <div className="w-full lg:w-1/2 flex items-center justify-center border-gray-100 p-1 rounded-2xl shadow-xs relative">
          <Image src={collection} alt="banner-footwear-collection" className="max-w-auto h-full object-contain rounded-2xl" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-black text-dark mb-4 dark:text-white">
            Welcome to StepStyle
          </h2>
          <p className="text-gray-600 font-medium mb-4 dark:text-gray-100">
          StepStyle is an independent online footwear e-store launched in 2026 to change how you buy shoes online. We bring a curated collection of premium, trend-forward footwear directly to your doorstep. By eliminating the middleman, we deliver designer-level quality and exceptional comfort without the traditional retail markup.</p>
          <div  className="flex gap-x-4">
            <Link href={CONTACT_ROUTE} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-sm transition cursor-pointer">
              Learn More
            </Link>
            <Link href={PRODUCTS_ROUTE} className="bg-primary text-white py-2 px-6 rounded-full shadow-sm transition cursor-pointer" >
              View Product
            </Link>
          </div>
        </div>
      </div>
     </section>
        {children}
    </>
  )
}

export default AboutLayout
