import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
import withoutResults from "../mocks/no-results.json";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    console.log("memoMovies");
    return sort
      ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
      : movies;
  }, [sort, movies]);
  return { movies: sortedMovies, getMovies, loading };
};
