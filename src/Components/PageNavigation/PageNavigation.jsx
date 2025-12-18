import edunityLogo from "../../assets/icon/edunity_logo.svg";
import { Button } from "../Button/Button";
import personicon from "../../assets/icon/personicon.svg";
import searchicon from "../../assets/icon/search.svg";
import "./PageNavigation.css";

export function PageNavigation() {
  return (
    <section className="navigation__page">
    <div className="navigation__page__child"> 
      <div>
        <img src={edunityLogo} alt="Edunity Logo" />
      </div>

      <nav className="page__navigation">
        <ul className="navigation__links">
          <li>
            <a href="#home">Home</a>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="#0E2A46;"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.14498L1.275 0.85498L4.5 4.07998L7.725 0.85498L9 2.14498L4.5 6.64498L0 2.14498Z"
                fill="#0E2A46;"
              />
            </svg>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#courses">Courses</a>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="#0E2A46;"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.14498L1.275 0.85498L4.5 4.07998L7.725 0.85498L9 2.14498L4.5 6.64498L0 2.14498Z"
                fill="#0E2A46;"
              />
            </svg>
          </li>

          <li>
            <a href="#blog">Blog</a>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="#0E2A46;"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.14498L1.275 0.85498L4.5 4.07998L7.725 0.85498L9 2.14498L4.5 6.64498L0 2.14498Z"
                fill="#0E2A46;"
              />
            </svg>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="navigation__icons">
        <img src={searchicon} alt="Search Icon" />
                <img src={personicon} alt="Person Icon" />
                <Button
                 text="Contact"
                />
      </div>
      </div>
    </section>
  );
}
