import React, { useEffect, useState } from 'react';
import './style.css';
import { products } from '../../data/products';
import ItemList from '../../components/ItemList';


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        (async () => {
            const obtenerProductos = new Promise((acept, reject) => {
                setTimeout(() => {
            acept(products)
                }, 3000);
            })

            try {
                const products = await obtenerProductos;
                setProductos(productos)
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    console.log(productos);

    return (
        <div className='item-list-container'>
            <ItemList products={products}/>
        </div>
    )
    }

    export default ItemListContainer;