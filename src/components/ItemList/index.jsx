import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col lg={3} sm={12} xs={12} key={product.id}>
            <Item product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
