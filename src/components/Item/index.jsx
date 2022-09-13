import React from 'react'
import './style.css';
import { Button } from 'react-bootstrap';

const Item = ({ product }) => {
    return (
        <>
            <div className="tarjeta">
                <div className="titulo">{product.name}</div>
                <div className="cuerpo">
                    <img src="../img/camisetaniño.jpg" alt="img" />
                    {product.precio}
                </div>
                <div className="pie">
                    <button>AÑADIR AL CARRITO</button>
                </div>
            </div>
        </>
    )
}

export default Item