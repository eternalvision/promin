import React from "react";

import { Content } from "./Content";

function Header() {
  return (
    <header>
      <ul className="Menu-list">
        <Content.LeftContent />
        <Content.CentralContent />
        <Content.RightContent />
      </ul>
    </header>
  );
}

export default Header;
