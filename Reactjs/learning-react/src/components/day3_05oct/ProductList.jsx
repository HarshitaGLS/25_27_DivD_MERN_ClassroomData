import React from 'react'
import productlist from './productlist.js'
import ProductMapList from './ProductMapList.jsx'
const ProductList = () => {
  return (
    <div>
      {/* {productlist} */}
      {/* {JSON.stringify(productlist)} */}
      {/* {JSON.stringify(productlist[0])} */}

      {/* {productlist.map((product,i)=><React.Fragment key={i}>{JSON.stringify(product)}</React.Fragment>)} */}

        <ProductMapList products={productlist}/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

    <table border="2" cellSpacing={0}>
        <thead>
            <th>ID</th>  <th>Name</th>  <th>Image</th>
            <th>Price</th> <th>Quantity</th> <th>Action</th>
        </thead>
        <tbody>
            {/* {productlist.map((product)=><tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.image} style={{width:"100px",height:"100px"}}/></td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td><button type="button">Edit</button>
                <button type="button">delete</button></td>
            </tr>)} */}
               {/* {productlist.map((product)=>
                {
               return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.image} style={{width:"100px",height:"100px"}}/></td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td><button type="button">Edit</button>
                <button type="button">delete</button></td>
            </tr>
})} */}
  {/* {productlist.map((product)=>
                {
                let {id,image,name,price,qty} = product
               return <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td><img src={image} style={{width:"100px",height:"100px"}}/></td>
                <td>{price}</td>
                <td>{qty}</td>
                <td><button type="button">Edit</button>
                <button type="button">delete</button></td>
            </tr>
})} */}

        </tbody>
    </table>

    </div>
  )
}

export default ProductList
