import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: "auto", marginTop: 15, cursor: "pointer" }}
      key={product.id}
    >
      <Card.Img
        variant="top"
        src={product.image}
        height={300}
        width={"auto"}
        onClick={() => navigate(`/item/${product.id}`)}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text bsPrefix="precio">{product.precio}</Card.Text>
        <Button
          variant="primary"
          style={{
            width: "100%",
          }}
        >
          AGREGAR AL CARRITO
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
