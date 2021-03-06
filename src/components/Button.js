import React from "react";

function Button({ children, disabled = false }) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;
