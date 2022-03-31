import React from 'react'
import Cart from '../Cart/Cart'
import { onAddComprarAhora } from '../../../utils/events'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

function ItemListCart(props) {
    
    console.log("ItemListCart")

    const {vaciarCarrito} = useCartContext()
    let total = 0

    function onClearCart() {
        vaciarCarrito()
    }

    function calcularTotal(items) {

        let total = 0
        for (let index = 0; index < items.length; index++) {        
            total += items[index].item.precio * parseInt(items[index].cantidad) 
        }
        return total

    }

    // Calcula el total
    total = parseFloat(calcularTotal(props.items)).toFixed(2) 

    return (
        <>

            {    
                // Llama a Itemproducto para renderizar cada imagen y le pasa parametros   
                props.items.map(item => <Cart key={item.id}
                                              item={item}
                                              cantidad={item.cantidad}/>
                )   
            }

            <div className="container container-sm container-md container-lg mt-5">

                <div className="row text-muted align-items-center">                            
                    <div className="col-6">
                    </div>
                    <div className="col fw-bold fs-4">
                        Total
                    </div>
                    <div className="col fw-bold fs-4">
                        {/* $ 1000.00 */}
                        $ {total}
                    </div>
                    <hr className="mt-4 solid"></hr>
                </div>

                <div className="row text-muted align-items-center mt-5">

                    <div className="col-8">      
                    </div>
                    
                    <div className="col">

                        <div className="d-flex justify-content-around"> 

                            <button type="button p-5 w-100" 
                                    onClick={onClearCart} 
                                    className="btn btn-dark">
                                
                                Vaciar carrito
                            
                            </button>
                        
                            <Link to='/terminarCompra'>
                                <button type="button" 
                                        onClick={onAddComprarAhora} 
                                        className="btn btn-dark w-100">
                                        
                                    Terminar compra
                                    
                                </button>
                            </Link>

                        </div>

                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default ItemListCart
