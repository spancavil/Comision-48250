import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()
  console.log(categoryId)

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(products => {
        //En base a la categoryId vamos a hacer el filtro de productos
        if (categoryId) {
          const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
          console.log(productosFiltradosPorCategoria)
          setProducts(productosFiltradosPorCategoria)
        } else {
          setProducts(products)
        }
      })
      .catch((err) => {
        alert("Hubo un error")
      });

  }, [categoryId])

  console.log(products)

  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer