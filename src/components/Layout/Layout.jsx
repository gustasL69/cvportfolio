import NavBar from '../NavBar/NavBar.jsx';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './Layout.css';

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, [location.pathname]);

const handleNavClick = (path) => {
  if (location.pathname === path) return;
  setIsLoading(true);
  setTimeout(() => {
    navigate(path);
  }, 300);
};

  return (
    <>
      <NavBar onNavClick={handleNavClick} />
      <div className={`page ${isLoading ? "fade-out" : "fade-in"}`}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;