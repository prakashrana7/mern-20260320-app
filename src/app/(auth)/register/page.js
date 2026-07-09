'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HOME_ROUTE, LOGIN_ROUTE } from '@/constants/routes'
import { useForm } from 'react-hook-form'
import { signup } from '@/api/auth'
import PasswordInput from '@/components/PasswordInput'
import useAuthStore from '@/stores/authStore'
import { toast } from 'react-toastify'
import Spinner from '@/components/Spinner'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
   const {register, handleSubmit} = useForm();

    const {registerUser}= useAuthStore.getState();
     const [loading, setLoading]= useState(false);
   
     const router = useRouter();
    function submitForm(data){
      setLoading(true);
      signup({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        address: {
          city: data.city,
          province: data.province,
        },
      })
      .then((response) => {
         registerUser({user: response.data});
        
         router.replace(HOME_ROUTE);

         toast.success("Register Successful")
       })
       .catch((error) => {
         console.log(error);
         toast.error(error.response.data);
       })
       .finally(()=>setLoading(false));
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex items-center justify-center py-0 md:py-20">
    <div className="w-full rounded-lg dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prakash Rana" required {...register("name")} />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="98********" required {...register("phone")} />
          </div>
           <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kanchanpur" required {...register("city")} />
           <select 
            id="province" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required {...register("province")}
          ><option value="Bagmati">Bagmati</option>
          <option value="Koshi">Koshi</option>
          <option value="Gandaki">Gandaki</option>
          <option value="Lumbini">Lumbini</option>
          <option value="Madhesh">Madhesh</option>
          <option value="Karnali">Karnali</option>
          <option value="Sudurpaschim">Sudurpaschim</option>
           </select>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="prakash07@gmail.com" required {...register("email")} />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <PasswordInput id="password" {...register("password")} />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
            </div>
          </div>
          <button type="submit" className="relative w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-85"
          disabled={loading}>Create an Account 
          {loading && (
            <Spinner className="absolute right-3 top-2 w-6! h-6!"/>)}
             </button><p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? 
            <Link href={LOGIN_ROUTE} 
            className="font-medium text-primary hover:underline"
            >
              Login here
              </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default RegisterPage
