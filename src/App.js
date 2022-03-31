import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nosotros from "./components/nosotros/Nosotros";
import Productos from "./components/productos/ItemListContainer/ItemListContainer.jsx";
import Galeria from "./components/galeria/GaleriaListContainer/GaleriaListContainer";
import Contacto from "./components/contacto/Contacto";
import ItemDetailContainer from "./components/productos/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
// import Cart from './components/carritoCompras/cart/Cart';
import ItemCartContext from "./components/carritoCompras/ItemCartContext/ItemCartContext";
import TerminarCompra from "./components/carritoCompras/TerminarCompra/TerminarCompra";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/productos/:categoriaId" element={<Productos />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/galeria" element={<Galeria />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<ItemCartContext />} />
          <Route exact path="/terminarCompra" element={<TerminarCompra />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
