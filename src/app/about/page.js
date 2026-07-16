export const metadata = {
  title: "About",
};

import { CONTACT_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import trust from "@/assets/images/trust.jpg"
import collection from "@/assets/images/collection.jpg"

const AboutPage = () => {
  return (
     <section id="about" className="py-12">
      <h1 className="text-4xl text-center font-black">About Us</h1>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-6 p-6 lg:p-10 gap-8 items-center ">
        <div className="w-full lg:w-1/2 flex items-center justify-center border-gray-100 p-1 rounded-2xl shadow-xs relative">
          <Image src={collection} alt="banner-footwear-collection" className="max-w-auto h-full object-contain rounded-2xl" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">
            Welcome to StepStyle
          </h2>
          <p className="text-gray-600 font-medium mb-4 dark:text-gray-200">
          StepStyle is an independent online footwear e-store launched in 2026 to change how you buy shoes online. We bring a curated collection of premium, trend-forward footwear directly to your doorstep. By eliminating the middleman, we deliver designer-level quality and exceptional comfort without the traditional retail markup.</p>
          <div  className="text-white flex gap-x-4">
            <Link href={CONTACT_ROUTE} className="bg-blue-700 hover:bg-blue-600 py-2 px-6 rounded-full shadow-sm transition cursor-pointer">
              Learn More
            </Link>
            <Link href={PRODUCTS_ROUTE} className="bg-primary hover:bg-primary/90 py-2 px-6 rounded-full shadow-sm transition cursor-pointer" >
              View Product
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-6 p-6 lg:p-10 gap-8 items-center ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-4">
            Designed for Your Digital Lifestyle
          </h2>
          <p className="text-gray-600 font-medium mb-4 dark:text-gray-200">
           We know that buying shoes online requires trust and accuracy. That is why StepStyle combines cutting-edge footwear engineering with an effortless digital shopping experience. From detailed sizing guides to crystal-clear high-definition imagery, we ensure that what you see on your screen matches exactly how perfectly it fits your feet.</p>
        <div  className=" text-white flex gap-x-4">
            <Link href={CONTACT_ROUTE} className="bg-blue-700 hover:bg-blue-600 py-2 px-6 rounded-full shadow-sm transition cursor-pointer">
              Learn More
            </Link>
            <Link href={PRODUCTS_ROUTE} className="bg-primary hover:bg-primary/90 py-2 px-6 rounded-full shadow-sm transition cursor-pointer" >
              View Product
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center border-gray-100 p-1 rounded-2xl shadow-xs relative">
          <Image src={trust} alt="trust-banner" className="max-w-auto h-full object-contain rounded-2xl" />
        </div>
      </div>
     </section>
  );
};

export default AboutPage;

