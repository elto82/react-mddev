import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);
  return (
    <>
      <h1>Shoppin Cart 🛒</h1>
      <Products products={products} />
    </>
  );
}

export default App;
