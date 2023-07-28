import { createContext, useState } from "react";

//1 crear el contexto - este se consume
export const FiltersContext = createContext();

//2 crear el provider para proveer el contexto - nos da acceso al contexto
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({ category: "all", minPrice: 10 });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
