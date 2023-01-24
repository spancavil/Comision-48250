import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore"; 
// import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()

  /* useEffect(()=> {
    saveFromJSONToFirebase()
  }, []) */

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data()
        }
        productosFirebase.push(product)
      });
      setProducts(productosFirebase)
    }

    getProducts();

    /* fetch('https://fakestoreapi.com/products')
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
      }); */

  }, [categoryId])

  return (
    <ItemList productos={products}/>
  )
}

export default ItemListContainer