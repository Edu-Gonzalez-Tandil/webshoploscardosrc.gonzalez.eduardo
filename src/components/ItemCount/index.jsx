import React, { useState } from 'react';
import './style.css';


const ItemCount = () => {

  const [count , setCount] = useState(0);

  const handleAdd = () => {
    setCount (count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default ItemCount;