import { Link } from "../Link";


export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/D5635AQE2DtdiczxJwg/profile-framedphoto-shrink_100_100/0/1690229908182?e=1691175600&v=beta&t=KDJeOpjAIZ25D6EFRmzGg_tn0Z5hzo-SCqzGRwnwumo" alt="imagen argiro" />
      </div>
      <p>¡Bienvenido a mi perfil!</p>
      <Link to="/">Ir a Home</Link>
    </>
  );
}