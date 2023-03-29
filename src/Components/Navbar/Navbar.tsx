import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const locations = useLocation();

  let navLinks = [
    {
      route: "/",
      name: "Main Dashboard",
      fontCss: "fa-solid fa-table-columns",
    },
    {
      route: "/user",
      fontCss: "fa-solid fa-user",
      name: "User",
    },
    {
      route: "/groups",
      fontCss: "fa-solid fa-user-group",
      name: "Groups",
    },
    {
      route: "/tickets",
      fontCss: "fa-solid fa-diagram-project",
      name: "Tickets",
    },
    {
      route: "/ticketstatus",
      fontCss: "fa-solid fa-person-running",
      name: "Ticket Status",
    },
    {
      route: "/role",
      fontCss: "fa-solid fa-user-secret",
      name: "Role",
    },
    {
      route: "/project",
      name: "Project",
      fontCss: "fa-solid fa-user",
    },
    {
      route: "/sms",
      name: "Sms / Email",
      fontCss: "fa-solid fa-comments",
    },
  ];
  return (
    <>
      <div className="virtualNavbar"></div>
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
                    }>
                    <span>
                      <i className={item.fontCss} />
                    </span>
                    <span> {item.name}</span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
