import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IS_DEVELOPMEN } from "./config";
import { useFilters } from "./hooks/useFilters";
import Card from "./components/Card";
import { CartProvider } from "./context/Cart";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Card />
      <Products products={filteredProducts} />
      {IS_DEVELOPMEN && <Footer />}
    </CartProvider>
  );
}

export default App;
