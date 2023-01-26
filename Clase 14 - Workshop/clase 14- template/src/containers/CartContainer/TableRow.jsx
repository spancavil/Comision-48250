import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'

const TableRow = ({product}) => {

  const {removeProduct} = useContext(Shop);

  return (
    <tr>
          <th scope="row">{product.id}</th>
          <td><img src={product.image} alt="table-row" style={{height: 150}}/></td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td><button onClick={()=>removeProduct(product.id)}>Remove</button></td>
    </tr>
  )
}

export default TableRow