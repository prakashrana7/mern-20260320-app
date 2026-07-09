import Image from "next/image";

async function fetchProductsById(id) {
  const product = await fetch(
    `http://localhost:8000/api/products/${id}`,
  ).then((data) => data.json());
  
  if(!product.name){
    throw "Product not found";
  }
  return product;
}

export const generateMetadata = async ({ params }) => {
  const{ id } = await params;

  const product = await fetchProductsById(id);
  return{
    title: product.name,
    description: `${product.name} ${product.brand} ${product.category}`,
  };
};

const ProductDetailPage = async({ params }) => {
    const{ id } = await params;

  const product = await fetchProductsById(id);
 
  return (
    <div>
      <Image src={product.imageUrls[0]} alt={product.name} height={400} width ={600} className="w-auto h-64"/>
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>Rs. {product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetailPage
