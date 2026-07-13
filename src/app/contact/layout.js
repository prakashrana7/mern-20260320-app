import ContactPage from './page'

const ContactPageLayout = ({children}) => {
  return (
    <>
      <h1 className="text-4xl text-center font-black dark:text-white mt-12 ">Contact Us</h1>
      {children}
    </>
  )
}

export default ContactPageLayout
