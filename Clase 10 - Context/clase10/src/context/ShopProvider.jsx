import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()

//HOC o high order component
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart) {
            //Hacer algo
            //Primero vamos a encontra el producto repetido
            const productoRepetido = products.find(element => element.id === product.id)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }
    
    return (
        <Shop.Provider value = {{products, addProduct, countCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider