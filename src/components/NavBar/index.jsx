import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import CartWidget from "../CartWidget";
import { useNavigate } from "react-router-dom";

let categorias = [
  {
    id: "1",
    nombre: "Rugby",
    href: "rugby",
  },
  {
    id: "2",
    nombre: "Hockey",
    href: "hockey",
  },
  {
    id: "3",
    nombre: "Merchandising",
    href: "merchandising",
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src="/logo.jpg" width={50} height={50} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Shop Los Cardos</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {categorias.map((categoria) => (
                <NavDropdown.Item
                  key={categoria.id}
                  href={`/categoria/${categoria.href}`}
                >
                  {categoria.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav.Link href="/cart">
            <CartWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
