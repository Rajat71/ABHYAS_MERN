import React from "react";
import { Link } from "react-router-dom";

function NavbarItems(props) {
  function handleClick() {
    props.detail === "Courses" &&
      document.getElementById(props.detail).scrollIntoView();
    props.detail === "Contribute" &&
      document.getElementById(props.detail).scrollIntoView();
      if (props.id === "logout") {
        props.user({});
      }
  }


  return (
    <li className="nav_item">
      {
        <Link onClick={handleClick} to={props.link} className="nav_link">
          {props.detail}
        </Link>
      }
      {/* {props.link === "login" && <form method="get"><button onClick={handleget} method="get" className="nav_link">
        {props.detail}
      </button></form>} */}
    </li>
  );
}

export default NavbarItems;
