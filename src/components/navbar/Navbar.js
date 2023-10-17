import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const nav = [
    { route_name: "/todo-app", nav_name: "Todo App" },
    { route_name: "movie-app", nav_name: "Movie App" },
  ];

  const [tab, setTab] = useState("");

  const onUpdated = (newTab, event) => {
    event.preventDefault();
    // setTab(newTab);
    console.log("nav");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          {nav.map((navbarData, navbarIndex) => (
            <li
              key={navbarIndex}
              className={
                tab === navbarData.route_name
                  ? "navbar-item active"
                  : "navbar-item"
              }
              // onClick={(e) => onUpdated(navbarData.route_name, e)}
            >
              <Link to={navbarData.route_name} className="navbar-link">
                {navbarData.nav_name}
              </Link>
              {/* <a to={navbarData.route_name} className="navbar-link">
                {navbarData.nav_name}
              </a> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
