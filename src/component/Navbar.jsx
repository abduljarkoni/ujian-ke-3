import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Abdul Jarkoni</h2>
      <div className="menu">
        <NavLink to="/radio"> RADIO </NavLink>
        <NavLink to="/cekbox"> CHECKBOX </NavLink>
        <NavLink to="/essay"> ESSAY </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
