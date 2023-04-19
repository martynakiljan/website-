/** @format */
import "./buger.scss";
import React from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <Hamburger
      color="#4d4b4a"
      className={`burger ${isOpen ? "menu-is-open " : ""}`}
      direction="right"
      toggled={isOpen}
      toggle={setIsOpen}
      onClick={() => setIsOpen((oldState) => !oldState)}
    >
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};
export default Burger;
