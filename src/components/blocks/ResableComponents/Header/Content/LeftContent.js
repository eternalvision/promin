import React from "react";
import { Link } from "react-router-dom";
import teropureico from "./teropureico.png";

function LeftContent() {
  return (
    <>
      <li className="Left-header-content">
        <Link to="/popular">
          <ul className="Logo">
            <li>
              {/* <img width={300} height={65} src={teropureico} alt="" /> */}
              TEROPURE
            </li>
          </ul>
        </Link>
      </li>
    </>
  );
}

export default LeftContent;
