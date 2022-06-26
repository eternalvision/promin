import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderComponents, FooterComponents, RouteComponents } from "./components";

function App() {
  return (
    <Router>
      <HeaderComponents.Header />
      <Routes>
        <Route path="/" element={<RouteComponents.Home />} />
      </Routes>
      <FooterComponents.Footer />
    </Router>
  );
}

export default App;
