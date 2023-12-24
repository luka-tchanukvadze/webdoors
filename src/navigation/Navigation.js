import React, { useState, useEffect } from "react";
import wb1 from "../images/wb1.png";
import webLogo from "../images/webLogo.png";
import Vector2 from "../images/Vector2.png";
import { Link } from "react-router-dom";

function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const [personIsClicked, setPersonIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Adjust the threshold as needed
      const threshold = 100;

      if (offset > threshold && !isFixed) {
        setIsFixed(true);
      } else if (offset <= threshold && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  useEffect(() => {
    if (menuIsClicked) {
      setPersonIsClicked(false);
    }
    if (personIsClicked) {
      setMenuIsClicked(false);
    }
  }, [personIsClicked, menuIsClicked]);

  const handleClickPerson = () => {
    // alert("heu");
    // return setPersonIsClicked((prev) => !prev);
    setPersonIsClicked((prev) => !prev);
    setMenuIsClicked(false);
  };

  const handleClickMenu = () => {
    // return setMenuIsClicked((prev) => !prev);
    setMenuIsClicked((prev) => !prev);
    setPersonIsClicked(false);
  };

  return (
    <nav className="navigation">
      <section className={`head ${isFixed ? "fixed" : ""}`}>
        <div className="nav-items">
          <Link to="something" className="n">
            Services
          </Link>
          <Link to="something" className="n">
            Projects
          </Link>
          <Link to="something" className="n">
            About
          </Link>

          <div>
            <img
              onClick={handleClickPerson}
              className="person-res"
              src={Vector2}
            />{" "}
            {/* <div
            style={{
              display: `${personIsClicked ? "block" : "none"}`,
              // display: "block",
              position: "absolute",
              top: "5rem",
              left: "2rem",
              backgroundColor: "gray",
              padding: "3rem",
            }}
            >
              something goes here
            </div> */}
          </div>
        </div>

        <div className="logo">
          <img src={wb1} />
        </div>

        <div className="nav-items-right-side">
          <div onClick={handleClickPerson} className="person-con">
            <svg
              className="person"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 13.8438L9.13609 13.8439L9.43769 13.8447C11.9993 13.858 18 14.0845 18 17.935C18 21.5049 13.0716 21.982 9.23812 22L8.56231 21.9997C6.00075 21.9864 0 21.76 0 17.9105C0 14.2651 5.13584 13.8438 9 13.8438ZM9 15.511C4.1658 15.511 1.71385 16.319 1.71385 17.9105C1.71385 19.5176 4.1658 20.3334 9 20.3334C13.8342 20.3334 16.2861 19.5254 16.2861 17.935C16.2861 16.3256 13.8342 15.511 9 15.511ZM9 0C12.3511 0 15.0762 2.65185 15.0762 5.91053C15.0762 9.16921 12.3511 11.8211 9 11.8211H8.96458C7.34328 11.8155 5.82366 11.1964 4.68452 10.0806C3.54424 8.9636 2.91926 7.48097 2.92493 5.9072C2.92493 2.65185 5.64999 0 9 0ZM9 1.66713C6.59604 1.66713 4.63879 3.57099 4.63879 5.91053C4.63425 7.04307 5.08214 8.10447 5.89907 8.9058C6.71715 9.70603 7.80716 10.1495 8.96801 10.1539L9 10.9775V10.1539C11.4051 10.1539 13.3623 8.25007 13.3623 5.91053C13.3623 3.57099 11.4051 1.66713 9 1.66713Z"
                fill="white"
                fill-opacity="0.9"
              />
            </svg>
            <div
              style={{
                display: `${personIsClicked ? "block" : "none"}`,
                // display: "block",
                position: "absolute",
                top: "5rem",
                right: "2rem",
                backgroundColor: "gray",
                padding: "3rem",
              }}
            >
              something goes here!
            </div>
          </div>

          <div onClick={handleClickMenu}>
            <svg
              className="menu"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="29"
              viewBox="0 0 50 29"
              fill="none"
            >
              <path
                d="M2 2H48H2ZM2 14.5H48H2ZM27.875 27H48H27.875Z"
                fill="white"
              />
              <path
                d="M27.875 27H48M2 2H48H2ZM2 14.5H48H2Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              style={{
                display: `${menuIsClicked ? "block" : "none"}`,
                position: "absolute",
                top: "5rem",
                right: "0rem",
                backgroundColor: "gray",
                padding: "3rem",
              }}
            >
              dark mode
            </div>
          </div>
        </div>
      </section>

      <section className="bottom">
        <p className="text-1">
          INTRODUCING <span className="purple">Webdoors</span>
        </p>
        <div className="for-width">
          <p className="text-2">
            DIGITAL{" "}
            <span className="purple" style={{ opacity: 1 }}>
              EXPERIENCE
            </span>
            , RE-IMAGINED
          </p>
          <p className="text-3">
            A full-service digital agency with capabilities across web design
            and development
          </p>

          <Link
            style={{ textDecoration: "none" }}
            to="something"
            className="links"
          >
            <div className="text-4-con">
              <p className="text-4">Need a Website?</p>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="24"
                viewBox="0 0 91 24"
                fill="none"
              >
                <path
                  d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8285 1.17157 13.5 2 13.5L2 10.5ZM90.0607 13.0607C90.6464 12.4749 90.6464 11.5252 90.0607 10.9394L80.5147 1.39343C79.9289 0.807642 78.9792 0.807642 78.3934 1.39343C77.8076 1.97922 77.8076 2.92896 78.3934 3.51475L86.8787 12L78.3934 20.4853C77.8076 21.0711 77.8076 22.0208 78.3934 22.6066C78.9792 23.1924 79.9289 23.1924 80.5147 22.6066L90.0607 13.0607ZM2 13.5L89 13.5V10.5L2 10.5L2 13.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>

          <div>
            <img className="web-logo" src={webLogo} />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
