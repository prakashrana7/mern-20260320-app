export const metadata = {
  title: "About",
};

import { CONTACT_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import trust from "@/assets/images/trust.jpg"

const AboutPage = () => {
  return (
    <section id="about" className="h-full py-12 dark:bg-gray-900">
    <div className="bg-gray-100 dark:bg-gray-400">
       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-6 p-6 lg:p-10 gap-8 items-center ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-black text-dark mb-4 dark:text-gray-800">
           Designed for Your Digital Lifestyle
          </h2>
          <p className="text-gray-600 font-medium mb-4 dark:text-gray-200">
          We know that buying shoes online requires trust and accuracy. That is why StepStyle combines cutting-edge footwear engineering with an effortless digital shopping experience. From detailed sizing guides to crystal-clear high-definition imagery, we ensure that what you see on your screen matches exactly how perfectly it fits your feet.</p>
        <div  className="flex gap-x-4">
            <Link href={CONTACT_ROUTE} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-sm transition cursor-pointer">
              Learn More
            </Link>
            <Link href={PRODUCTS_ROUTE} className="bg-primary text-white py-2 px-6 rounded-full shadow-sm transition cursor-pointer" >
              View Product
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center rounded-2xl shadow-xs relative">
          <Image src={trust} alt="banner" className="max-w-auto h-full object-contain rounded-2xl" />
        </div>
      </div>
     </div>
     </section>

  );
};

export default AboutPage;

