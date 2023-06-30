import "./App.css";
import useCatImage from "./hooks/useCatImage";
import useCatFact from "./hooks/useCatFact";

export const App = () => {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <h1>Cats App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt="cat" width={"50%"} />}
      </section>
      <button onClick={handleClick}>Get a new cat</button>
    </main>
  );
};
