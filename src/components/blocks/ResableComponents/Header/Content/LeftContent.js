import React from "react";
import { Link } from "react-router-dom";

function LeftContent() {
  return (
    <>
      <li className="Left-header-content">
        <Link to="/popular">
          <ul className="Logo">
            <li>TEROPURE</li>
            {/* <li className="Logo-title">{strings.title}</li> */}
          </ul>
        </Link>
      </li>
    </>
  );
}

export default LeftContent;
