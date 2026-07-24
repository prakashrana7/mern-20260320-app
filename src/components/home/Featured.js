import { getProducts } from "@/api/product";
import ProductCard from "@/app/products/_components/Card";

const Featured = async () => {
  const products = await getProducts({ category: "Sneakers"});

  return (
    <section id="featured" className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center mb-8 font-bold text-2xl dark:text-white">
          Featured products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.slice(0,4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;