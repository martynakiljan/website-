/** @format */
import "./buger.scss";
import React from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <Hamburger
      color="#e8e8e8"
      className={`burger ${isOpen ? "menu-is-open " : ""}`}
      direction="right"
      toggled={isOpen}
      toggle={setIsOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};
export default Burger;
