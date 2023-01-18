import React, { useContext } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';

const Cart = () => {

  const {products} = useContext(Shop);

  console.log(products)

  return (
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Image</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">quantity</th>
          <th scope="col">remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return <TableRow key={product.id} product={product}/>
        })}
      </tbody>
    </table>
  )
}

export default Cart