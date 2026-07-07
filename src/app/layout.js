import Header from "@/components/header";
import "./globals.css";

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
      <body><Header/>{children}</body>
      </html>
  );
};

export default RootLayout;
