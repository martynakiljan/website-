/** @format */
import "./menu.scss";

const Menu = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? "menu-is-open" : ""}`}>
      <div className="menu__inner">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#home">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#about">
              About us
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#service">
              Our services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
