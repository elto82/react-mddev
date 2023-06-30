import { useState, useEffect, useRef } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("the search field is empty");
      return;
    }
    if (search.length < 3) {
      setError("The search query must be more than 3 characters.");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};
