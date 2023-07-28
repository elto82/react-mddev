import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="minPriceFilterId">Rango de precios</label>
        <input
          type="range"
          id={minPriceFilterId}
          name="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          onChange={handleChangeCategory}
          id={categoryFilterId}
          name="category"
        >
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
