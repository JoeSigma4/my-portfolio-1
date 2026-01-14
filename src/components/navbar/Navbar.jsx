import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setDarkMode(true) : setDarkMode(false);
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`container ${darkMode ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={menuOpen ? " " : "hide-menu"}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>About me</li>
        <li>Contact me</li>
      </ul>
      <MenuIcon
        className="menu-icon"
        fontSize="large"
        sx={{
          color: "#fff",
          cursor: "pointer",
          display: "none",
          "@media (max-width: 840px)": {
            display: "block",
          },
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
