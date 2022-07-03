import React from "react";
import { navel, mainPhoto } from "../../../../img";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div>
        <ul className="NameAuthor">
          <li>
            <img src={navel} alt="profile-link" width={145} />
          </li>
          <li>
            <img src={mainPhoto} alt="profile-link" width={110} />
          </li>
          <li>
            ALEXANDR PRYADCHENKO
            <br />
            <span>
              web developer | designer || musician ||| from <span className="ukr">ukr</span>
              <span className="aine">aine</span>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
