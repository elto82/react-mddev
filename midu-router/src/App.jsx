import { useEffect, useState } from 'react';
import './App.css';

const NAVIGATION_EVENT = 'pushState';

function navigate(href) {
  window.history.pushState({}, '', href);
  //crear evento personalizado para cambiar la url
  const navigationEvent = new Event(NAVIGATION_EVENT);
  //enviar el evento
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a About</button>
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
      <button onClick={() => navigate('/')}>Ir a Home</button>
    </>
  );
}

function App() {
  const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };


  }, []);

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  );
}

export default App;
