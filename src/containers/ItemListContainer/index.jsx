import React from 'react';
import './style.css';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agrego la cantidad ${cantidad} al carrito`);
    }

    return (
        <div className='item-list-container'>
            <h1>{greeting}</h1>
            <span>
            <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
            </span>
        </div>
    )
}

export default ItemListContainer;