import { ABOUT_ROUTE, PRODUCTS_ROUTE } from '@/constants/routes'
import Image from 'next/image'
import banner from "@/assets/images/banner.jpg"
import Link from 'next/link'

const Hero = () => {
  return (
      <section id="hero" className="py-12 px-4 bg-white dark:bg-gray-900">
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
           <Link href={PRODUCTS_ROUTE} className="bg-primary rounded-3xl text-white py-2 px-8 transition ease duration-300 hover:shadow-lg">
           Shop Now ➔
           </Link>
          <Link href={ABOUT_ROUTE} className="bg-tranparent rounded-3xl border-2 border-primary text-primary px-8 py-2 transition ease duration-300 mx-2 hover:bg-primary hover:text-white">
          Explore
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
