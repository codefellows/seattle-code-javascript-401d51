import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import Storefront from './Components/Storefront';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
