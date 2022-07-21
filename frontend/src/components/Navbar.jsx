import React from "react";
import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Courses", link: "" },
  { id: 3, title: "Contribute", link: "" },
  { id: 4, title: "Our Team", link: "ourTeam" },
  { id: 5, title: "Login", link: "login" },
];

function Navbar(props) {
  return (
    <header style={{ position: "sticky" }}>
      <nav className="nav bd-container">
        <Link to="/" className="nav_logo">
          Abhyas
        </Link>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            {/* {items.map((item)=>{
              return (<NavbarItems key={item.id} detail={item.title} to={item.link} />)
            })} */}

            <NavbarItems detail="Home" link="/" />
            <NavbarItems detail="Courses" link="" />
            <NavbarItems detail="Contribute" link="" />
            <NavbarItems detail="Our Team" link="ourTeam" />
            {props.user && props.user._id ? (
              <NavbarItems id="logout" detail={props.user.name+", Logout"} link="logout" user={props.user} />
            ) : (
              <NavbarItems detail="Login" link="login" />
            )}
          </ul>
        </div>

        <div className="nav_toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
