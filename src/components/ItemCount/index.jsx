import React, { useState, useEffect } from 'react';
import './style.css';


const ItemCount = ({stock , initial , onAdd}) => {

  const [count , setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount (count + 1)
    }
    else{
    alert("No hay stock disponible");
    }
  }

  const handleDecrement = () => {
    if (count > initial) {
      setCount(count - 1);
  }
  }
  
  useEffect (()=>{
    console.log ("Se monto el item count")
  }, [])

  useEffect (()=>{
    console.log ("Se actualiza el estado")
  }, [count])

  return (
    <div>
      <button onClick={handleDecrement}>Borrar</button>
      <h2>{count}</h2>
      <button onClick={handleAdd}>Añadir</button>
      <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;