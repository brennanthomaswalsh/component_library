import React from "react";

const containerStyles = {
  display: "flex",
  width: "25%",
  flexDirection: "column",
  margin: "1rem",
  padding: "1rem",
  backgroundColor: "#d4d1b8",
  borderRadius: "1rem"
}

function Card({ title, description, children }) {

  return (
    <div style={containerStyles}>
      <h1>
        {title}
      </h1>
      <p>
        { description }
      </p>
      { children }
    </div>
  )
}

export default Card;
