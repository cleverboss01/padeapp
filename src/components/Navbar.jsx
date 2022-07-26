import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import "./Navbar.css";
import { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#cdebf5" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              pade
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaRegTimesCircle /> : <MdOutlineSegment />}
            </div>
            <li className="nav-btn">
              {button ? (
                <Link
                  to="/sign-up"
                  className="btn-link"
                  style={{ display: "none" }}
                >
                  <Button buttonStyle="btn--outline"></Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Get early access
                  </Button>
                </Link>
              )}
            </li>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  How it works
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
