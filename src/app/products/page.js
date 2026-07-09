import { getProducts } from "@/api/product";
import Link from "next/link";
import ProductCard from "./_components/Card";

export const metadata = {
  title: "Products",
};

const ProductsPage = async ({ searchParams }) => {
  const products = await getProducts();

  return (
   <>
    <h2 className=" mb-8 text-2xl dark:text-white">Featured products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard {...product} key={index}/>
        ))}
    </div>
    </>
  );  
};

export default ProductsPage;
