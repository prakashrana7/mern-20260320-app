"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendContactMessage } from "@/api/contact";
import Spinner from "@/components/Spinner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    setLoading(true);

    try {
      await sendContactMessage(data);

      toast.success("Message sent successfully.");

      reset();
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4 mt-0.5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223297.76006996067!2d80.17393114999999!3d29.0161757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1aeabbe14f1d3%3A0x6a96f25c77a58cbe!2sBhimdatta!5e0!3m2!1sen!2snp!4v1782569738336!5m2!1sen!2snp" width={600} height={200} style={{border: 0, width: '100%', borderRadius: '2rem'}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8">
          <form  onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-3">
            <div>
            <input type="text" placeholder="Your name" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" 
            {...register("name", {
                  required: "Name is required.",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters.",
                  },
                })}
              />

              {errors.name && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
            <input type="email" placeholder="Email address" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" 
             {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/i, 
                    message: "Please enter a valid Gmail, Yahoo, or Outlook email address.",
                  },
                })}
              />

              {errors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
            <input type="tel" placeholder="98********" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" 
              {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^(98|97)\d{8}$/,
                    message:
                      "Phone number must start with 98 or 97 and contain exactly 10 digits.",
                  },
                })}
              />

              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
            <textarea rows={5} placeholder="Your Message..." className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" 
            {...register("message", {
                  required: "Message is required.",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters.",
                  },
                  maxLength: {
                    value: 500,
                    message: "Message cannot exceed 500 characters.",
                  },
                })}
              />

              {errors.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={loading} className="bg-primary rounded-3xl text-white px-10 py-3 transition duration-300 ease cursor-pointer max-w-fit mt-2 disabled:opacity-60">
              Send Message {loading && (
                <Spinner className="absolute right-3 top-2 w-6! h-6!" />
              )}
            </button>
          </form>

          <div className="info">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-light dark:text-gray-100 text-sm my-4">
              Have any Questions? Please reach out to us.
            </p>
            <a href="https://maps.app.goo.gl/7VMYau6uVzXk4kJ99" target="_blank"  rel="noopener noreferrer" className="m-1 text-sm block hover:text-primary">📍 Mahendranagar, Kanchanpur, Sudurpaschim Pardesh</a>
            <a href="mailto:stepstylefootwearshop@gmail.com" className="m-1 text-sm block hover:text-primary">📨 stepstylefootwearshop@gmail.com</a>
            <a href="tel:+977 9810302011" className="m-1 text-sm block hover:text-primary">📞 +977 9810302011</a>
            <a href="https://wa.me/9810302011" target="_blank"  rel="noopener noreferrer" className="m-1 text-sm block hover:text-primary">💬 9810302011</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
