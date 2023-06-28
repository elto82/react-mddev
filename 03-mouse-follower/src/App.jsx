const FollowMouse = () => {
  const [enable, setEnable] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enable]);

  const toggleEnable = () => {
    setEnable(!enable);
  };

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enable);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: enable ? "#fff" : "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={toggleEnable}>
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <main className={mounted ? "no-cursor" : ""}>
        <FollowMouse />
      </main>
    </>
  );
}

export default App;
