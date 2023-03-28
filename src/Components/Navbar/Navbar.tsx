import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const locations = useLocation();
  console.log(locations.pathname);

  let navLinks = [
    {
      route: "/",
      name: "Main Dashboard",
    },
    {
      route: "/user",
      name: "User",
    },
    {
      route: "/groups",
      name: "Groups",
    },
    {
      route: "/tickets",
      name: "Tickets",
    },
    {
      route: "/grosdfups",
      name: "sdf",
    },
    {
      route: "/sdf",
      name: "Groupssdf",
    },
    {
      route: "/groups",
      name: "Grosdfsdups",
    },
  ];
  return (
    <nav className="Navbar">
      <ul>
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.route} className="nav_link">
                <div
                  className={
                    item.route === locations.pathname
                      ? "active Lists"
                      : " Lists"
                  }
                >
                  <span> {item.name}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
