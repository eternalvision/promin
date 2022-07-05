import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Components, RouteComponents } from "./components";

function App() {
  return (
    <Router>
      <Components.ResableComponents.Header />
      <main>
        <RouteComponents.Main />
        <Routes>
          {/* <Route path="/" element={<RouteComponents.Main />} /> */}
          <Route path="/popular" element={<RouteComponents.LayoutPages.Popular />} />
          <Route path="/new" element={<RouteComponents.LayoutPages.New />} />
          <Route path="/my/new" element={<RouteComponents.LayoutPages.MyNew />} />
          <Route path="/bookmarks" element={<RouteComponents.LayoutPages.Bookmarks />} />
          <Route path="/design" element={<RouteComponents.LayoutPages.Design />} />
          <Route path="/development" element={<RouteComponents.LayoutPages.Development />} />
          <Route path="/videos" element={<RouteComponents.LayoutPages.Videos />} />
          <Route path="/music" element={<RouteComponents.LayoutPages.Music />} />
          <Route path="/articles" element={<RouteComponents.LayoutPages.Articles />} />
          <Route path="/teroprofile" element={<RouteComponents.Profile />} />
        </Routes>
      </main>
      <Components.ResableComponents.Footer />
    </Router>
  );
}

export default App;
