import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //Obtengo un DETERMINADO producto (el producto con id 10)
    fetch(`https://fakestoreapi.com/products/${id}`)
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

  }, [id])

  return (
    <div>
        {
          Object.keys(detail).length === 0 
            ? <h2>Loading ...</h2>
            : <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer