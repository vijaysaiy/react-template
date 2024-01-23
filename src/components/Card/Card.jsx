import React from "react";

const Card = ({ className, children }) => {
  return (
    <div className={`card-container ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
