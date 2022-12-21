import React from 'react'

const Item = ({product}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={product.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <a href="/#" className="btn btn-primary">Go detail</a>
      </div>
    </div>
  )
}

export default Item