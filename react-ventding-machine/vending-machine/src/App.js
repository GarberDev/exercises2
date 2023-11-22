import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack1 from "./snack1";
import Snack2 from "./snack2";
import Snack3 from "./snack3";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Links to navigate between routes */}
          <Link to="/">Home</Link> |<Link to="/snack1">Snack 1</Link> |
          <Link to="/snack2">Snack 2</Link> |<Link to="/snack3">Snack 3</Link>
        </nav>

        <Routes>
          {" "}
          {/* Wrap Route components inside Routes */}
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
