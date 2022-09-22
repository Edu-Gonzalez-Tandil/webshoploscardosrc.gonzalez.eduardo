import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
