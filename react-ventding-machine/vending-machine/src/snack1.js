import React from "react";
import { Link } from "react-router-dom";

function Snack1() {
  return (
    <div>
      <h2>Snack 1</h2>
      <p>Details about Snack 1...</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack1;
