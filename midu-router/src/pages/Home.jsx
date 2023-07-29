import { navigate } from "../Link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a About</button>
    </>
  );
}