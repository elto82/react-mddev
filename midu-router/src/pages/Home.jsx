import { Link } from "../Link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <Link to="/about">Ir a About</Link>
    </>
  );
}