import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../../utils/getProductos'
import { onAddShoppingCart } from '../../../utils/events'
import ItemList from '../ItemList/ItemList'
import Display404 from '../../404/Display404'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams(); //toma el parametro de la url y lo guarda en una variable categoriaId.

    useEffect(() => {

        //api Fetch()
        getProductos    
        .then(data => {   
            const items = data.filter(producto => producto.categoriaId === categoriaId)
            setProductos(items) 
            console.log(items)  
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        // return () => {
        //     console.log('clean')
        // }
    },[categoriaId])

    let prods=false
    if (productos.length>0) {
        prods=true
    }

    return (
        <>       
            { 
                loading ? <h2>Cargando...</h2> 
                        : prods ? <ItemList productos={productos} onAddShoppingCart={onAddShoppingCart}/>
                                : <Display404/>     
            }
        </>    

    )
}

export default ItemListContainer
