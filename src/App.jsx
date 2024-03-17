import { Header, Footer, ProductsPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto w-full">
        <Header></Header>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
