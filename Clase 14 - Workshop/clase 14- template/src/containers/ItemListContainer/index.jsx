import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';
// import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase';

const ItemListContainer = () => {

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()
  
  const [products, loading, error] = useFirebase(categoryId)

  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
          <h1>Cargando... </h1>
          : <ItemList productos={products}/>
      }
    </>
  )
}

export default ItemListContainer