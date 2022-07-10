import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Components, RouteComponents } from "./components";
// import { Rings } from "react-loader-spinner";

function App() {
  return (
    <Router>
      <div className="preloader">
        <div className="preloader__row">
          <div className="preloader__item"></div>
          <div className="preloader__item"></div>
        </div>
      </div>
      <Components.ResableComponents.Header />
      <main>
        <RouteComponents.Main />
        <Routes>
          <Route path="/" element={<RouteComponents.LayoutPages.Popular />} />
          <Route path="/popular" element={<RouteComponents.LayoutPages.Popular />} />
          <Route path="/new" element={<RouteComponents.LayoutPages.New />} />
          <Route path="/my/new" element={<RouteComponents.LayoutPages.MyNew />} />
          <Route path="/messenger" element={<RouteComponents.LayoutPages.Messenger />} />
          <Route path="/bookmarks" element={<RouteComponents.LayoutPages.Bookmarks />} />
          <Route path="/design" element={<RouteComponents.LayoutPages.Design />} />
          <Route path="/development" element={<RouteComponents.LayoutPages.Development />} />
          <Route path="/videos" element={<RouteComponents.LayoutPages.Videos />} />
          <Route path="/photos" element={<RouteComponents.LayoutPages.Photos />} />
          <Route path="/music" element={<RouteComponents.LayoutPages.Music />} />
          <Route path="/articles" element={<RouteComponents.LayoutPages.Articles />} />
          <Route path="/about" element={<RouteComponents.LayoutPages.About />} />
          <Route path="/teroprofile" element={<RouteComponents.Profile />} />
        </Routes>
      </main>
      {/* <Components.ResableComponents.Footer /> */}
    </Router>
  );
}

export default App;
