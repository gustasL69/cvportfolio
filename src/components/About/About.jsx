import "./About.css";
import { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);

  const toggleAbout = () => setIsOpen(prev => !prev);
  const toggleSkills = () => setIsOpenSkills(prev => !prev);

  return (
    <div className="about">
      <h1>Apie mane</h1>

      <button className="button" onClick={toggleAbout}>
        {isOpen ? "Sumažinti" : "Plačiau apie mane"}
      </button>
      {isOpen && (
        <p>
          Esu kūrybingas ir atsakingas programuotojas, turintis patirties React, JavaScript ir
          CSS srityse. Mėgstu kurti tvarkingas ir interaktyvias interneto svetaines.
        </p>
      )}

      <button className="button" onClick={toggleSkills}>
        {isOpenSkills ? "Sumažinti" : "Atskleisti Įgudžius"}
      </button>
      {isOpenSkills && (
        <>
          <h3>Mano Įgūdžiai</h3>
          <ul className="about-ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default About;