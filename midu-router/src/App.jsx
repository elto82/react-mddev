import { useState } from 'react';

import './App.css';

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <a href="/about">Ir a About</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/D5635AQE2DtdiczxJwg/profile-framedphoto-shrink_100_100/0/1690229908182?e=1691175600&v=beta&t=KDJeOpjAIZ25D6EFRmzGg_tn0Z5hzo-SCqzGRwnwumo" alt="imagen argiro" />
      </div>
      <p>¡Bienvenido a mi perfil!</p>
      <a href="/">Ir a Home</a>
    </>
  );
}

function App() {
  const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  );
}

export default App;
