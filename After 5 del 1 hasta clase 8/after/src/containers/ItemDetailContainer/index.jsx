import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productJson from '../../data/products.json';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //CASO JSON propio
    const getProductDetail = () => {

      const obtenerProducto = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProducto
      .then( productos => {
        if (id) { 
          const detalleProducto = productos.find(producto => producto.id.toString() === id) 
          console.log(detalleProducto) 
          setDetail(detalleProducto) 
        }
      })
      .catch(error => console.log(error))
    }

    getProductDetail()

    //Llamado a la API externa
    
    //Obtengo un DETERMINADO producto (el producto con id 10)
    /* fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(json => {
        console.log(json)
        setDetail(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      }); */

  }, [id])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer