import React from 'react'
import ProductCard from './ProductCard'

const ProductMapList = ({products}) => {
  return (
    <div className='container'>
      {/* <ProductCard product={products[0]}/> */}

    <div className='row'>
      {products.map((product)=><ProductCard 
      key={product.id}
      product={product} />)}
    </div>
    </div>
  )
}

export default ProductMapList
