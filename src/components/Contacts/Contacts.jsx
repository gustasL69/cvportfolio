import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
        <h1>Kontaktai</h1>
        <ul className="contacts-ul">
            <li><img className="contacts-img" src="src/assets/facebook.png"/> Gustas Laurinavičius</li>
            <li><img className="contacts-img" src="src/assets/telephone.png"/> +37069028313</li>
            <li><img className="contacts-img" src="src/assets/gmail.png"/> glaurazas@gmail.com</li>
        </ul>
    </div>
  );
}

export default Contacts;