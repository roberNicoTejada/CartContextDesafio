import React from 'react'
import Item from '../Item/Item'

function ItemList(props) {
    
    return (

        <>
            <main>
                <section>

                    <h1 className="text-center p-4">
                        Productos Makeup
                    </h1>

                    <div className="container-sm container-md container-lg">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-3 g-sm-2 ms-md-5">
                            
                            { 
                                // Llama a Itemproducto para renderizar cada imagen y le pasa parametros   
                                props.productos.map(producto => <Item key={producto.id}
                                                                    producto={producto}
                                                                    onAddShoppingCart={props.onAddShoppingCart}/>)   
                            }

                        </div>
                    </div>

                </section>
            </main>

            <div className="separador"></div>
        </>
                                                                  
    )
}

export default ItemList
