import React from 'react'
import { Link } from 'react-router'

const Products = () => {
  return (
    <div>
      PRoducts Page
      <Link
        type="button" to="/"
        class="btn btn-primary"
      >
        Go to home page
      </Link>
      
    </div>
  )
}

export default Products
