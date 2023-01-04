import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //Obtengo un DETERMINADO producto (el producto con id 10)
    fetch('https://fakestoreapi.com/products/10')
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
      });

  }, [])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer