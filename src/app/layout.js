import Header from "@/components/header";
import "./globals.css";
import { ToastContainer } from "react-toastify";

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
      <body className="light">
          <Header/> 
          {children}
         <ToastContainer position="top-center" autoClose={2000}/>
        </body>
      </html>
  );
};

export default RootLayout;
