import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../../utils/getProductos'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [itemSeleccionado, setItemSeleccionado]= useState({}); 
    const [loading, setLoading] = useState(true);

    const { id } = useParams(); //toma el parametro de la url y lo guarda en una variable id.

    useEffect(() => {

        //api Fetch()
        getProductos    
        .then(data => {   
            const item = data.find(producto => producto.id === id)
            setItemSeleccionado(item)
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        // return () => {
        //     console.log('clean')
        // }
    },[id])

    return (
        <div className="container-sm container-md container-lg">

            {
                loading ? <h2>Cargando...</h2> 
                        : <ItemDetail item={itemSeleccionado}/>
            }

        </div>
    )
}

export default ItemDetailContainer
