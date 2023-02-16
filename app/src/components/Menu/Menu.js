/** @format */
import "./menu.scss";

const Menu = ({ isOpen }) => {
  return (
    <ul className={`menu__list ${isOpen ? "menu-is-open" : ""}`}>
      <li className="menu__item">
        <a className="menu__link">Home</a>
      </li>
      <li className="menu__item">
        <a className="menu__link">About us</a>
      </li>
      <li className="menu__item">
        <a className="menu__link">Our services</a>
      </li>
      <li className="menu__item">
        <a className="menu__link">Contact</a>
      </li>
    </ul>
  );
};

export default Menu;
