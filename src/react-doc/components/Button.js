import React from "react";

function Button({ title,tc, bc }) {
  return (
    <button
      style={{
        color: `${tc}`,
        backgroundColor: `${bc}`,
        padding: "5px",
        margin: "5px",
      }}
    >
      {title}
    </button>
  );
}

export default Button;
