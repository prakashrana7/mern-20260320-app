"use client";

import { addProduct, updateProduct } from "@/api/product";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCloudArrowUp } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductForm = ({product, isEditing=false})=>{
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
      values:product,
    });

    const [loading, setLoading]= useState(false);
    const [productImages, setProductImages] = useState([]);
    const [localImageUrls, setLocalImageUrls] = useState([]);
    const [imageError, setImageError] = useState("");

    function prepareData(data) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("brand", data.brand);
        formData.append("category", data.category);
        formData.append("price", data.price);
        formData.append("stock", data.stock);
        
        if (data.description) formData.append("description", data.description);
        
        if (productImages.length > 0){
            productImages.map((image) => {
                formData.append("images", image);
            });
        }
        return formData;
    }

    async function upsertProduct(input) {
      if(isEditing){
        return updateProduct(product._id, input);
      }
      return addProduct(input);
    }

    function submitForm(data){
       const totalImages = productImages.length;

    if (!isEditing && totalImages === 0) {
        setImageError("At least 1 product image is required.");
        toast.error("Oops! Please upload at least 1 image.");
        return;
    }

    if (totalImages > 4) {
        setImageError("You can upload up to 4 images per product.");
        toast.error("Oops! Please select 4 images or fewer.");
        return;
    }
        setLoading(true);
        const input = prepareData(data)

        upsertProduct(input)
        .then((res)=>{
          if(isEditing){
        toast.success("Product updated successfully.");
        setProductImages([]);
        setLocalImageUrls([]);
      }else{
        toast.success("Product added successfully.");
        setProductImages([]);
        setLocalImageUrls([]);
        setImageError("");
        reset();
          }        
        })
        .catch((error)=> {
            console.log(error);
            toast.error(error.response?.data || "An error occured.");
        })
        .finally(()=>setLoading(false));
    }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name<span className="text-red-600 font-extrabold">*</span></label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" {...register("name", { 
            required: "Product name is required.", 
            minLength: { value: 3, message: "Product name must be at least 3 characters long." }})} />
          {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name.message}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand<span className="text-red-600 font-extrabold">*</span></label>
          <input type="text" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" {...register("brand", { 
            required: "Brand name is required.", 
            minLength: { value: 3, message: "Brand name must be at least 3 characters long." }
          })} />
        {errors.brand && <p className="mt-1 text-xs text-red-600 font-medium">{errors.brand.message}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price<span className="text-red-600 font-extrabold">*</span></label>
          <input type="number" id="price" min="1" step="any" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs. 4999" {...register("price", { 
              required: "Price value is required.",
              min: { value: 1, message: "Price must be at least Rs. 1." },
              max: { value: 1000000, message: "Price must be upto Rs. 10,00,000." },
              valueAsNumber: true 
            })}/>
            {errors.price && <p className="mt-1 text-xs text-red-600 font-medium">{errors.price.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category<span className="text-red-600 font-extrabold">*</span></label>
          <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Category" {...register("category", { 
            required: "Category classification is required.",
             minLength: { value: 3, message: "Category must be at least 3 characters long." } 
            })} 
          />
          {errors.category && <p className="mt-1 text-xs text-red-600 font-medium">{errors.category.message}</p>}
        </div>

        <div>
          <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock<span className="text-red-600 font-extrabold">*</span></label>
          <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={1} {...register("stock", { 
              required: "Stock value is required.",
              min: { value: 0, message: "Stock cannot be negative values." },
              valueAsNumber: true
            })}
          />
          {errors.stock && <p className="mt-1 text-xs text-red-600 font-medium">{errors.stock.message}</p>}
        </div> 

        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Images<span className="text-red-600 font-extrabold">*</span></label>    
         <div className="flex items-center justify-center w-full ">
        <label htmlFor="images" className={`block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-dashed ${imageError ? 'border-red-600 dark:border-red-600' : 'border-gray-400'} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}>
        <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
        
      <FaCloudArrowUp className="w-8 h-8 mb-4"/>
      <p className="mb-2 text-sm">Click here to upload from your local storage</p>
      <p className="text-xs"> PNG, JPG or WEBP</p>
     </div>
    <input id="images" type="file" className="hidden" multiple accept=".png,.jpg,.jepg,.webp" 
    onChange={(event) => {
        const files = [];
        const urls = [];

        Array.from(event.target.files).map((file) => {
            files.push(file);
            urls.push(URL.createObjectURL(file));
        });
        setProductImages(files);
        setLocalImageUrls(urls);

         if (files.length > 0) setImageError("");
        }}
     />
  </label>
    </div>
     {imageError && <p className="mt-1 text-xs text-red-600 font-medium">{imageError}</p>}

    {localImageUrls.length > 0 &&
    (<div className="flex py-4 gap-2">
    {localImageUrls.map((imageUrl, index)=> (
    <div key={index} className="p-0.5 border rounded-lg border-gray-200 dark:border-gray-700">
        <Image src={imageUrl} 
    alt="" height={64} width={64} 
    className="h-16 w-16 object-cover rounded"/>
    </div>
    ))}
    </div>
)}
</div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"{...register("description")} />
        </div>
      </div>
      <button type="submit" className="inline-flex gap-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary hover:bg-primary/90 cursor-pointer" disabled={loading}>
        {isEditing? "Update Product":"Add Product"}
        {loading && <Spinner className="h-5! w-5!"/>}
      </button>
    </form>
  );
};

export default ProductForm;
