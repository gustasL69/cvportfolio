import "./Contacts.css";
import facebook from "../assets/facebook.png";
import telephone from "../assets/telephone.png";
import gmail from "../assets/gmail.png";

function Contacts() {
  return (
    <div className="contacts">
        <h1>Kontaktai</h1>
        <ul className="contacts-ul">
            <li><img className="contacts-img" src={facebook}/> Gustas Laurinavičius</li>
            <li><img className="contacts-img" src={telephone}/> +37069028313</li>
            <li><img className="contacts-img" src={gmail}/> glaurazas@gmail.com</li>
        </ul>
    </div>
  );
}

export default Contacts;