import "./Navbar.css";

export const Navbar = ({ onTab, updateTab }) => {
  const nav = [
    { route_name: "todo", nav_name: "Todo App" },
    { route_name: "movie-app", nav_name: "Movie App" },
  ];

  const onUpdated = (newTab, event) => {
    event.preventDefault();
    updateTab(newTab);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          {nav.map((navbarData, navbarIndex) => (
            <li
              key={navbarIndex}
              className={
                onTab === navbarData.route_name
                  ? "navbar-item active"
                  : "navbar-item"
              }
              onClick={(e) => onUpdated(navbarData.route_name, e)}
            >
              <a href="!#" className="navbar-link">
                {navbarData.nav_name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
