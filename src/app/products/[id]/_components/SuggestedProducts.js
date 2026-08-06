import { getProducts } from "@/api/product";
import ProductCard from "@/app/products/_components/Card";

const SuggestedProducts = async ({ category, currentProductId }) => {
const products = await getProducts({ 
  category, 
  limit: 10, 
});

const suggestedProducts = 
  products?.filter(
  (product) => product._id.toString() !== currentProductId.toString()
    ) || [];

  return (
    <div className="self-start grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      {suggestedProducts.slice(0, 4).map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default SuggestedProducts;