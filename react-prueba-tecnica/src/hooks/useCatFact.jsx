import React, { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(() => {
    refreshRandomFact();
  }, []);

  return { fact, refreshRandomFact };
};

export default useCatFact;
