import { Routes, Route } from "react-router-dom";
import { DetailPage } from "./pages/detail/detail";
import { ProductsPage } from "./pages/products/products";
import { Header } from "./components/header/header";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
