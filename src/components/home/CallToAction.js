import { REGISTER_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-12 px-4">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="bg-primary p-8 rounded-2xl flex items-center flex-col gap-4">
              <h2 className="text-2xl font-bold text-center text-white">
                Join StepStyle Footwear
              </h2>
              <p className="text-center text-gray-50">
                You automatically receive up to 10% off your first online order after completing registration.
              </p>
              <Link href={REGISTER_ROUTE} className="bg-white text-red-500 px-8 py-2 rounded-2xl hover:shadow-lg">
                signup to get 10% off...
              </Link>
            </div>
          </div>
        </section>
  )
}

export default CallToAction
