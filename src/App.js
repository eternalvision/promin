import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Components, RouteComponents } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteComponents.Main />} />
        <Route path="/teroprofile" element={<RouteComponents.Profile />} />
      </Routes>
      <Components.ResableComponents.Footer />
    </Router>
  );
}

export default App;
