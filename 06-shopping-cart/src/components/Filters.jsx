import { useState } from "react";
import "./Filters.css";

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Rango de precios</label>
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select onChange={handleChangeCategory} id="category" name="category">
          <option value="all">Todas</option>
          <option value="home-decoration">Decoración del hogar</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Teléfonos inteligentes</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Belleza</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
};
