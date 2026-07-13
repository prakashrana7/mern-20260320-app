import Header from "@/components/header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/layouts/MainLayout";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "StepStyle",
    template: "%s | StepStyle"
  },
  description: "Online platform for footwear. ",
  keywords: "Online shopping in Nepal, Best footwear items",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
          <MainLayout>
            <Header/> 
          {children}
          
          </MainLayout>
         <ToastContainer position="top-center" autoClose={2000}/>
         <Footer/>
        </body>
      </html>
  );
};

export default RootLayout;
