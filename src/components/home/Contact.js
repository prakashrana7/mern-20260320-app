const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="container max-w-7xl mx-auto px-4 mt-0.5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223297.76006996067!2d80.17393114999999!3d29.0161757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1aeabbe14f1d3%3A0x6a96f25c77a58cbe!2sBhimdatta!5e0!3m2!1sen!2snp!4v1782569738336!5m2!1sen!2snp" width={600} height={200} style={{border: 0, width: '100%', borderRadius: '2rem'}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8">
          <form className="flex flex-col gap-3" action="#">
            <input type="text" id="name" name="name" required placeholder="Your name" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" />
            <input type="email" id="email" name="email" required placeholder="Email address" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" />
            <input type="phone" id="phone" name="phone" required placeholder="Phone number" className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" />
            <textarea name="message" id="message" placeholder="Your Message..." rows={5} className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary dark:bg-gray-900 dark:border-primary" defaultValue={""} />
            <button className="bg-primary rounded-3xl text-white px-10 py-3 transition duration-300 ease cursor-pointer max-w-fit mt-2">
              Send Message
            </button>
          </form>
          <div className="info">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-light dark:text-gray-100 text-sm my-4">
              Have any Questions? Please reach out to us.
            </p>
            <a href="https://maps.app.goo.gl/7VMYau6uVzXk4kJ99" target="_blank" className="m-1 text-sm block hover:text-primary">📍 Mahendranagar, Kanchanpur, Sudurpaschim Pardesh</a>
            <a href="mailto:footwearshop@gmail.com" className="m-1 text-sm block hover:text-primary">📨 stepstylefootwearshop@gmail.com</a>
            <a href="tel:+977 9810302011" className="m-1 text-sm block hover:text-primary">📞 +977 9810302011</a>
            <a href="https://wa.me/9810302011" className="m-1 text-sm block hover:text-primary">💬 9810302011</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
