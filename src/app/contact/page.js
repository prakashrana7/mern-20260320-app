import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return (
   <div>
    <h1 className="text-4xl text-center font-black dark:text-white mt-12 ">Contact Us</h1>
     <Contact/>
   </div>
  )
};

export default ContactPage;
