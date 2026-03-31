import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contacts from "./components/Contacts/Contacts.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"
import Layout from "./components/Layout/Layout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
