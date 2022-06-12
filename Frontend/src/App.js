import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";
import CreateProduct from "./components/CreateProduct";
import ProductState from "./components/context/ProductState";
function App() {
  return (
    <div className="App">
      <ProductState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/createproduct" element={<CreateProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductState>
    </div>
  );
}

export default App;
