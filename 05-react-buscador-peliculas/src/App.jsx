import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/ListOfMovies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new FormData(e.target));
    updateSearch(search);
    getMovies({ search });
  };

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies({ search });
    }, 1500),
    []
  );

  const handleChange = (e) => {
    const newSearch = e.target.value;
    if (newSearch.startsWith(" ")) return;
    updateSearch(newSearch);
    debounceGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>movie search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "2px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="pelis..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      </header>
      <main>{loading ? <p>loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
