import React from "react";


function InsiderCard(props) {
  return (
    <div className="decoration_data">
      <img src={props.src} alt="frontend" className="decoration_img" />
      <h3 className="decoration_title">{props.text}</h3>
      <a href={props.youtube} className="fas" target="_blank">
        {" "}
        View{" "}
      </a>
    </div>
  );
}

export default InsiderCard;