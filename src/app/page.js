import { PRODUCTS_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import banner from "@/assets/images/banner.jpg"
import Image from "next/image";
import sneakers from "@/assets/images/sneakers.webp";
import collection from "@/assets/images/collection.jpg"
import ContactPage from "./contact/page";

  const Home = () => {

  return (
     <div>
    <section id="hero" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 lg:gap-16">
           <div>
            <Image src={banner} alt="hero image" className="w-auto rounded-2xl shadow-lg"/>
          </div>
          <div className="" >
            <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-xl">FOOTWEAR COLLECTION</span>
            <h1 className="mt-2 text-4xl text-primary font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Step into Style
            </h1>
            <p className="text-medium py-4 ">
              Discover the perfect pair from our curated collection of premium
              footwear. Quality, Comfort, and Style in every Step.
            </p>
           <Link href={PRODUCTS_ROUTE} className="flex items-center gap-2 bg-primary w-fit rounded-3xl text-white font-bold py-2 px-8 transition ease duration-300 hover:shadow-lg">
           SHOP NOW<FaArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section id="benefits" className="py-12 px-4">
  <div className="container max-w-7xl mx-auto px-4">
    <h2 className="text-center mb-10 font-bold text-2xl md:text-3xl tracking-tight">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-4xl mb-1 text-gray-500">🛍️</span>
        <h4 className="text-base md:text-lg dark:text-gray-200 font-semibold text-gray-900 tracking-tight">
          Massive Product Selection
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-62.5">
          Unlimited styles and exclusive sneaker drops, instantly at your fingertips.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-4xl mb-1 text-gray-500">⏱️</span>
        <h4 className="text-base md:text-lg dark:text-gray-200 font-semibold text-gray-900 tracking-tight">
          24/7 Shopping Convenience
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-62.5">
          Shop your favorite brands instantly, anytime, anywhere.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-4xl mb-1 text-gray-500">🛒</span>
        <h4 className="text-base md:text-lg dark:text-gray-200 font-semibold text-gray-900 tracking-tight">
          Seamless Shopping Experience
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-62.5">
          Smart categories and effortless filters to find your exact match instantly.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-4xl mb-1 text-gray-500">💳</span>
        <h4 className="text-base md:text-lg dark:text-gray-200 font-semibold text-gray-900 tracking-tight">
          Secure Payment
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-62.5">
          Safe payment gateways, Online and Cash on delivery.
        </p>
      </div>
    </div>
  </div>
</section>

    <section id="call-to-action" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className="bg-primary p-8 rounded-2xl flex items-center flex-col text-white gap-4 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-center text-white">
            Pre Booking Subscription
          </h2>
          <p className="text-center text-gray-50">
            Pre-Booking Subscribers Can get Benefited upto 15% off
          </p>
          <button className="bg-white text-red-500 px-8 py-2 rounded-2xl hover:shadow-lg">
            signup to get 15% off...
          </button>
          <dialog id="signupForm" className="w-full bg-transparnet">
            <div className="items-center bg-background dark:bg-gray-700 rounded-3xl flex flex-col h-max justify-center py-8 px-12 left-0 fixed top-1/2 w-full sm:left-1/4 sm:w-1/2">
              <button className="absolute top-0 right-0 px-4 py-2" >
                X
              </button>
              <h2 className="text-dark text-2xl font-bold">
                Subscribe Us
              </h2>
              <form action="#">
                <input type="number" name="number" required placeholder="Whatsapp Number" className="w-full bg-white border border-primary/20 rounded-3xl px-4 py-2" />
                <input type="email" name="email" required placeholder="Email address" className="w-full bg-white border border-primary/20 rounded-3xl px-4 py-2" />
                <button className="w-full bg-primary rounded-3xl px-6 py-2 text-white mt-4 hover:bg-primary-dark">
                  Subscribe
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </section>
    <section id="products" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center mb-8 font-bold text-2xl dark:text-white">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="product-card">
                  <Image className="w-full h-40 object-contain" src={sneakers} alt="featured" height={300} width={400} />
                  <div className="bg-gray-100 dark:bg-gray-900 pt-3 px-4 pb-4">
                    <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Sneakers</span>
                    <h4 className="font-semibold text-xl pt-1 pb-2">White Classic Sneakers</h4>
                    <p>Brand: <strong>Nike</strong></p>
                    <p className="my-1 font-bold text-2xl text-primary">Rs. 2500</p>
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
                 <div className="product-card">
                  <Image className="w-full h-40 object-contain" src={sneakers} alt="featured" height={300} width={400} />
                  <div className="bg-gray-100 dark:bg-gray-900 pt-3 px-4 pb-4">
                    <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Sneakers</span>
                    <h4 className="font-semibold text-xl pt-1 pb-2">White Classic Sneakers</h4>
                    <p>Brand: <strong>Nike</strong></p>
                    <p className="my-1 font-bold text-2xl text-primary">Rs. 2500</p>
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
                 <div className="product-card">
                  <Image className="w-full h-40 object-contain" src={sneakers} alt="featured" height={300} width={400} />
                  <div className="bg-gray-100 dark:bg-gray-900 pt-3 px-4 pb-4">
                    <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Sneakers</span>
                    <h4 className="font-semibold text-xl pt-1 pb-2">White Classic Sneakers</h4>
                    <p>Brand: <strong>Nike</strong></p>
                    <p className="my-1 font-bold text-2xl text-primary">Rs. 2500</p>
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
                 <div className="product-card">
                  <Image className="w-full h-40 object-contain" src={sneakers} alt="featured" height={300} width={400} />
                  <div className="bg-gray-100 dark:bg-gray-900 pt-3 px-4 pb-4">
                    <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-400/20">Sneakers</span>
                    <h4 className="font-semibold text-xl pt-1 pb-2">White Classic Sneakers</h4>
                    <p>Brand: <strong>Nike</strong></p>
                    <p className="my-1 font-bold text-2xl text-primary">Rs. 2500</p>
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
      
    </section>
    <section id="featured" className="py-12 px-6">
  <div className=" container max-w-7xl mx-auto px-2 lg:px-10  rounded-3xl p-6 lg:p-10 gap-8 items-center bg-primary/10 flex flex-col lg:flex-row shadow-sm dark:bg-primary">
    <div className="px-3 py-2 w-full lg:w-1/2 flex items-center justify-center rounded-2xl relative">
      <Image src={collection} alt="banner-footwear-collection" className="max-w-auto h-full object-contain  shadow-sm rounded-2xl" />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl lg:text-3xl font-black p-3 mb-4">
        Footwear Collection for This Season
      </h2>
      <p className="text-gray-600 font-medium p-3 mb-4 dark:text-gray-100">
        Explore the ultimate footwear collection. From sleek, urban
        sneakers to elegant evening wear, find your perfect aesthetic
        with smart categories and seamless navigation crafted to elevate
        your daily style effortlessly....
      </p>
      <div className="px-2">
        <Link href={PRODUCTS_ROUTE} className="bg-primary text-white font-bold text-sm py-3 px-6 rounded-full shadow-sm transition cursor-pointer dark:bg-white dark:text-primary">
          View Product
        </Link>
      </div>
    </div>
  </div></section>

    <ContactPage/>
</div>

  );
};

export default Home;
