import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()

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

  return (
    <ItemList productos={products}/>
  )
}

export default ItemListContainer