import React from "react";
import { Link } from "react-router-dom";
// import teropureico from "./teropureico.png";

function LeftContent() {
  return (
    <>
      <li className="Left-header-content">
        <Link to="/">
          <ul className="Logo">
            <li title="the eternal radiance of reason">
              {/* <img width={300} height={65} src={teropureico} alt="" /> */}
              TEROR.<span className="ukr">U</span>
              <span className="aine">A</span>
            </li>
          </ul>
        </Link>
      </li>
    </>
  );
}

export default LeftContent;
