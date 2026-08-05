"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

    const DEFAULT_SORT = JSON.stringify({createdAt: -1});
    const DEFAULT_MIN_PRICE = "";
    const DEFAULT_MAX_PRICE = "";
    const DEFAULT_CATEGORY = "";
    const DEFAULT_BRANDS = [];
    const DEFAULT_SEARCH = "";

const Filters = ({brands, categories}) => {
    const [sort, setSort]= useState(DEFAULT_SORT);
    const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
    const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY);
    const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRANDS);
    const [search, setSearch] = useState(DEFAULT_SEARCH);

    const router = useRouter();

    useEffect(() => {
    const params = new URLSearchParams();

    params.set("sort", sort);
    params.set("min", minPrice || "0");
    params.set("max", maxPrice || "10000000");
    params.set("category", categoryFilter);
    params.set("brands", brandsFilter.join(","));
    params.set("name", search);

    router.push(`?${params.toString()}`, { scroll: false });

}, [sort, minPrice, maxPrice, categoryFilter, brandsFilter, search, router]);

    function resetSearchFilters(){
        setSort(DEFAULT_SORT);
        setMinPrice(DEFAULT_MIN_PRICE);
        setMaxPrice(DEFAULT_MAX_PRICE);
        setCategoryFilter(DEFAULT_CATEGORY);
        setBrandsFilter(DEFAULT_BRANDS);
        setSearch(DEFAULT_SEARCH);
        
        router.replace(PRODUCTS_ROUTE, { scroll: false });
    }

    function handleBrandsFilter(brand){
        setBrandsFilter((prev)=>{
           return prev.includes(brand)
            ? prev.filter((item)=>item != brand)
            : [...prev, brand];
        });
    }
    
  return (
<div className="self-start sticky top-20 hidden md:block shadow-md rounded-2xl py-5 px-4 bg-white dark:bg-gray-900">
    <div className='py-2'> 
        <h4 className="font-semibold">Search:</h4>
       <input type="text" name="name" value={search} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 cursor-pointer"
        placeholder="Search Products by Names..." 
        onChange={(event) => {
        const value = event.target.value; 
        setSearch(value.trim() === "" ? "" : value);
        }} 
        />
    </div>

<h3 className='font-semibold mt-4'>Product Filters</h3>
   <div className="flex gap-4 w-full">
    <div className='py-2 w-1/2'> 
        <h4 className="text-sm font-medium mb-1">Sort By:</h4>
        <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 cursor-pointer">
            <option value={JSON.stringify({ createdAt: -1 })}>Newest First</option>
            <option value={JSON.stringify({ price: 1 })}>Price: Low-High</option>
            <option value={JSON.stringify({ price: -1})}>Price: High-Low</option>
            <option value={JSON.stringify({ name: 1 })}>Name: A-Z</option>
        </select>
    </div>
    
    <div className='py-2 w-1/2'> 
        <h4 className="text-sm font-medium mb-1 ">Category:</h4>
        <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 cursor-pointer">
            <option value="">Select Category</option>
            {categories?.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
    </div>
   </div>

    <div className='py-2'> 
    <h4 className="text-sm">Price Range:</h4>
    <div className="flex gap-4 w-full mt-1">
        <div className="w-1/2">
            <label className='text-sm font-medium mb-1 block'>Min Price</label>
            <input 
                type="number" 
                name="min"
                value={minPrice} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="0" 
                min={0} 
                onKeyDown={(event) => {
                    if (event.key === "-" || event.key === "+" || event.key === "e") {
                        event.preventDefault();
                    }
                }}
                onChange={(event) => {
                    const val = event.target.value;
                    if (val === "" || Number(val) >= 0) {
                        setMinPrice(val);
                    }
                }}
            />
        </div>
        <div className="w-1/2">
            <label className='text-sm font-medium mb-1 block'>Max Price</label>
            <input 
                type="number" 
                name="max"
                value={maxPrice}  
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="10000000" 
                min={0}
                onKeyDown={(event) => {
                    if (event.key === "-" || event.key === "+" || event.key === "e") {
                        event.preventDefault();
                    }
                }}
                onChange={(event) => {
                    const val = event.target.value;
                    if (val === "" || Number(val) >= 0) {
                        setMaxPrice(val);
                    }
                }} 
            />
        </div>
    </div>
    </div>
    
    <div  className='py-2'> 
        <h4 className="text-sm mb-1">Brands:</h4>
       <div className="max-h-28 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent cursor-pointer">
        {brands?.map((brand, index)=>(
             <div key={index} className="flex items-center mb-1">
            <input id={brand} type="checkbox"  checked={brandsFilter.includes(brand)} onChange={()=>handleBrandsFilter(brand)} className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft  cursor-pointer" />
            <label htmlFor={brand} className="select-none ms-2 text-sm font-medium text-heading  cursor-pointer">{brand}</label>
        </div> 
        ))}
       </div>
    </div>
    <div className="py-2 px-2 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky bottom-0 z-10 rounded-xl">
        <button type="button" onClick={resetSearchFilters} className="bg-red-600 w-full py-2 text-white rounded-xl cursor-pointer hover:bg-red-700 font-medium text-center">Reset Search & Filters</button>
    </div>
</div>
  );
};

export default Filters;
