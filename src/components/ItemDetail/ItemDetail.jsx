import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "../ItemCount";
import "./style.css";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count < product.stock) {
      setCount(count + 1);
    } else {
      alert("No hay stock disponible");
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Container className="container">
      <Row lg={4} bsPrefix="row">
        <Col lg={4} bsPrefix="column">
          <h2>{product.name}</h2>
          <img src={product.image} className="imagen-producto" alt="producto" />
          <span>{product.description}</span>
          <div className="agregar">
            <span className="precio">{product.precio}</span>
            <ItemCount
              count={count}
              handleAdd={handleAdd}
              handleDecrement={handleDecrement}
            />
            <span className="boton-agregar">Agregar al carrito</span>
          </div>
        </Col>
        <Col lg={8}>
          <p className="precio">Descripcion</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          blanditiis reprehenderit maiores odio nostrum exercitationem iste
          quidem sapiente, praesentium corporis voluptatibus vero tenetur autem
          quod laudantium. Aut, mollitia laborum! Sunt. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nemo, quod minima. Libero,
          doloribus necessitatibus! Ducimus ut eaque molestiae repudiandae,
          blanditiis a magnam molestias expedita doloremque reiciendis totam
          recusandae eligendi! Unde?
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
