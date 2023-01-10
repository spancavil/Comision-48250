import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Ad from '../../components/Ad';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const [adVisibility, setAdVisibility] = useState(true)

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()
  console.log(categoryId)

  //On escape it will close
  useEffect(() => {

    const handleEsc = (event) => {
        console.log(event); //Evento nativo del browser

        if (event.keyCode === 27) {
            console.log("will close");
            setAdVisibility(false)
            window.removeEventListener("keydown", handleEsc);
        }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
        window.removeEventListener("keydown", handleEsc);
    };

  }, []);

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

  const handleCloseAd = (event) => {
    //Evento sintetico de React
    console.log(event);
    setAdVisibility(false)
    //Cerrar el anuncio
  }

  console.log(products)

  //Todos los eventos declarados en el JSX son EVENTOS SINTETICOS.

  return (
    <div>
        <ItemList productos={products}/>
        {
          adVisibility === true
          ?
          <Ad>
            <h3>Queres vender tus alhajas? Ofrecemos a nuestros clientes la máxima seguridad y el mejor precio del mercado</h3>
            <button
              style={{
                width: 100,
                padding: 8,
                border: '2px solid black'
              }}
              onClick = {handleCloseAd}
            >Cerrar</button>
          </Ad>
          :
          null
        }
    </div>
  )
}

export default ItemListContainer