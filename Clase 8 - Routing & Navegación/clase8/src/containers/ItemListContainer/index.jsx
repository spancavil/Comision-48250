import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(json => {
        console.log(json)
        setProducts(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      });

  }, [])

  console.log(products)

  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer