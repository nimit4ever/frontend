import { Header, Footer, ProductList, ProductDetail } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto w-full">
        <Header></Header>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
