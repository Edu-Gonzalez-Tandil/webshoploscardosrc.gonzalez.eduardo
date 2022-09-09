import React from 'react';
import './style.css';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='item-list-container'>
            <h1>{greeting}</h1>
            <span>
            <ItemCount/>
            </span>
        </div>
    )
}

export default ItemListContainer;