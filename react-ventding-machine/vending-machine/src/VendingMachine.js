import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h2>Welcome to the Vending Machine!</h2>
      <h3>Select a Snack</h3>
      <ul>
        <li>
          <Link to="/snack1">Snack 1</Link>
        </li>
        <li>
          <Link to="/snack2">Snack 2</Link>
        </li>
        <li>
          <Link to="/snack3">Snack 3</Link>
        </li>
        {/* Add more snacks as needed */}
      </ul>
    </div>
  );
}

export default VendingMachine;
