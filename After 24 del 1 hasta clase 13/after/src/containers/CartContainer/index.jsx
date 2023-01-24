import React, { useContext, useState } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormComp from '../../components/Form';
import Spinner from 'react-bootstrap/Spinner';


const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop);
  
  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  console.log(products)

  const confirmPurchase = async (dataDelFormulario) => {
    const {phone: telefono, nombre, email} = dataDelFormulario
    try {
      setLoader(true);
  
      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })
  
      // setFormVis(true);
      console.log(order);
  
      //Almacenar la order en firebase y con el ID autogenerado por firebase, mostramos un alert de confirmación de compra.
  
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      //Posteriormente actualizar el stock de los productos existentes.
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Orden confirmada con ID: " + docRef.id);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  }

  return (
    <>
      {
        products.length !== 0 ?
        <>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Image</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return <TableRow key={product.id} product={product}/>
              })}
            </tbody>
          </table>
          {
            loader ?
            <Spinner animation="grow" variant="success"/>
            :
            <button onClick={()=> setFormVis(true)}>Confirm purchase</button>
          }
        </>
        :
        <>
          <h1>No hay productos en el carrito.</h1>
          <button>
            <Link to = "/">Home</Link>
          </button>
        </>
      }
      { formVis ? 
        <FormComp 
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
    </>
  )
}

export default Cart