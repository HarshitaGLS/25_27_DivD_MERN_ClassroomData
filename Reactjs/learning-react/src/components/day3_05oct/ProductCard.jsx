import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='col-3 mt-3'>
    <div class="card">
  <img src={product.image} class="card-img-top" alt="..."style={{height:"200px"}} />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">
        <b>$ {product.price}</b><br/>
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
  )
}

export default ProductCard
