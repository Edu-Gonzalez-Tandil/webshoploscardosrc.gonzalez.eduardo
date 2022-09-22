import React, { useEffect, useState } from "react";
import "./style.css";
import { products } from "../../data/products";
import ItemList from "../../components/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((accept, reject) => {
      setTimeout(() => {
        accept(products);
      }, 1000);
    });

    obtenerProductos
      .then((result) => setProductos(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="item-list-container">
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
