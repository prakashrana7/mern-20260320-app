"use client"

import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

const AddToCart = ({product}) => {
    const { addToCart } = useCartStore.getState();

    function handleAddToCart(){
      addToCart(product);

      toast.success("Add to cart successful.");
    }
  return (
    <button onClick={handleAddToCart} className="bg-primary py-2 w-full text-center rounded-2xl text-sm font-medium transition duration-300 ease text-white">
    Add to Cart
    </button>
  )
}

export default AddToCart
