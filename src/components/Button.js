import React from "react";

const baseButtonStyles = {
  backgroundColor: "#a276f5",
  color: "#f5f3f0",
  borderRadius: "1rem"
}

function Button({ children, disabled = false, handleClick = () => { console.log('pass handleClick prop as a function')} }) {
  return (
    <button onClick={handleClick} disabled={disabled} style={baseButtonStyles}>
      {children}
    </button>
  )
}

export default Button;
