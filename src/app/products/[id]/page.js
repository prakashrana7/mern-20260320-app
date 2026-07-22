import { getProductById } from "@/api/product";
import ProductImage from "./_components/ProductImage";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import AddToCart from "../_components/AddToCart";
import ProductDescription from "./_components/ProductDescription";
import SuggestedProducts from "./_components/SuggestedProducts";


async function fetchProductById(id) {
  const product = await getProductById(id);

  return product;
}

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const product = await fetchProductById(id);

  return {
    title: product.name,
    description: `${product.name} ${product.brand} ${product.category}`,
  };
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = await fetchProductById(id);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:gap-24 md:grid-cols-2 text-black dark:text-white">
        <ProductImage imageUrls={product.imageUrls} />
        <div className="py-12">
          <span className="bg-blue-500/10 border border-blue-500 text-blue-500 text-xs font-medium px-1.5 py-0.5 rounded-full">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mb-5 mt-2">{product.name}</h1>
          <div className="flex items-center gap-0.5 text-lg text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p className="text-gray-500 ml-3">
              <span className="text-black dark:text-white font-semibold">
                5
              </span>{" "}
              (128 reviews)
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-primary-dark py-3">
            Rs. {product.price}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            We know that buying shoes online requires trust and accuracy. That is why StepStyle combines cutting-edge footwear engineering with an effortless digital shopping experience. From detailed sizing guides to crystal-clear high-definition imagery, we ensure that what you see on your screen matches exactly how perfectly it fits your feet.
          </p>
          <div className="grid grid-cols-[1fr_auto] gap-5 py-5">
            <AddToCart product={product} />
            <button className="border-2 border-primary text-primary px-4 py-2 w-full text-center rounded-3xl mt-2 text-sm font-medium transition duration-300 ease flex items-center gap-2 justify-center">
              Add to Favourite <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="my-12">
        <ProductDescription source={product.description} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold dark:text-white">
          You may also like
        </h2>
        <SuggestedProducts category={product.category} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;