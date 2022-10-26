import React from "react";
import { Link } from "react-router-dom";

function LeftContent() {
  return (
    <>
      <li className="Left-header-content">
        <Link to="/">
          <ul className="Logo">
            <li>
              <p>
                ПРОМIНЬ.<span className="ukr">U</span>
                <span className="aine">А</span>
              </p>
            </li>
          </ul>
        </Link>
      </li>
    </>
  );
}

export default LeftContent;
