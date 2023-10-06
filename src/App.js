import React from "react";
import { Mech } from "./components/Mech";
import { Civil } from "./components/Civil";
import { Elec } from "./components/Elec";
import { Comp } from "./components/Comp";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <Mech />
      <Civil />
      <Elec />
      <Comp />
    </div>
  );
}

export default App;
