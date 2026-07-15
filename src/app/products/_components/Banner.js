import Image from "next/image"
import shoeImage from "@/assets/images/shoes.png"

const ProductBanner = () => {
  return (
    <div className="rounded-xl p-6 md:p-10 bg-linear-to-r from-blue-800 via-blue-300 to-blue-700 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-items-center">
      <h2 className="font-black text-white text-4xl sm:text-5xl md:text-6xl text-center">
        New Arrival
      </h2>
      <div className="flex justify-center items-center w-full">
        <Image
        src={shoeImage}
        height={400}
        width={400}
        className="h-28 sm:h-36 w-auto max-w-full object-contain"
        alt="shoes"
      />
      </div>
      <h4 className="flex flex-col items-center justify-center rounded-full bg-white shadow border-4 border-blue-200 w-28 h-28 sm:w-30 sm:h-30 font-bold text-lg sm:text-xl text-center shrink-0 dark:text-black">
        <span className="text-2xl sm:text-3xl text-red-600">50%</span> Off
      </h4>
    </div>
  );
};


export default ProductBanner
