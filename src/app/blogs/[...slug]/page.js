import React from 'react'

const BlogDetailsPage = async({params}) => {
    const {slug}= await params;
    console.log(slug);
  return (
    <div>
      <aside>menu</aside>
      <div>{slug.join(",")}</div>
    </div>
  )
}

export default BlogDetailsPage
