import { getBrands, getCategories, getProducts } from "@/api/product";
import ProductCard from "@/app/products/_components/Card";
import Filters from "./_components/Filters";

export const metadata = {
  title: "Products",
};

const ProductsPage = async ({ searchParams }) => {
  const products = await getProducts(await searchParams);
  const brands = await getBrands();
  const categories = await getCategories();

  return (
   <>
    <h2 className=" mb-8 text-2xl dark:text-white">Featured products</h2>
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]">
      <Filters brands={brands} categories={categories}/>
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-gray-700 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl text-center w-full self-start">
          <span className="text-5xl mb-4">📦</span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            No Products Available
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs px-4">
            We couldn't find any items matching your selected criteria. Try adjusting your search keyword or clearing the filters!
          </p>
        </div>
      ) : (<div className="self-start grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard product={product} key={index}/>
        ))}
       </div>
       )}
    </div>
    </>
  );  
};

export default ProductsPage;
