import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={product.image} className="card-img-top" alt={`id-${product.id}`}/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Go detail</Link>
      </div>
    </div>
  )
}

export default Item