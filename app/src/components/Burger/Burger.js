/** @format */
import "./buger.scss";
import { Twirl as Hamburger } from "hamburger-react";
import React, { useState } from "react";

const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger
      color="#b8b8b8"
      className="burger"
      toggled={isOpen}
      toggle={setOpen}
      direction="right"
    >
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};
export default Burger;
