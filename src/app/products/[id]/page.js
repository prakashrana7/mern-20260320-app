import React from 'react'

const ProductDetailPage = async({params}) => {
    const{id}=await params;
  return (
    <div>
      Product Details of id:{id}
    </div>
  )
}

export default ProductDetailPage
