import React from 'react'
import { useCartContext } from "../../../context/CartContext"
import CarritoVacio from '../CarritoVacio/CarritoVacio'
import ItemListCart from '../ItemListCart/ItemListCart'

function ItemCartContext() {

    console.log("ItemCartContext")
    
    const {cartList} = useCartContext()
    let hayItems = false

    if (cartList.length > 0) {
        hayItems = true
    }

    return (
        <>
            {
                hayItems ? <ItemListCart items={cartList}/>
                         : <CarritoVacio/>
            }
        </>
    )
}

export default ItemCartContext
