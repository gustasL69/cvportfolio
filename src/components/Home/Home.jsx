import { useState } from "react";
import "./Home.css";
import foto from "../../assets/foto.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="home">
      <h1>Gustas Laurinavičius</h1> 
      <button className="button" onClick={toggleText}>
        {isOpen ? "Sumažinti" : "Plačiau apie mane"}
      </button>
      {isOpen && (

        <div>
          <h3>Apie mane</h3>
          <p>Mano vardas yra Gustas.</p> 
          <p>Esu mokinys, man yra 16 metų, mokinuosi 10-oje klasėje, gyvenu Lietuvoje.</p>
          <img src={foto} />
        </div>
      )}
    </div>
  );
}

export default Home;