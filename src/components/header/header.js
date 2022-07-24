import React from "react";
import "./header.css";
import * as ActionData from "../reducer/action";
import { useDispatch, useSelector } from "react-redux";
let Header = () => {
  let dispatch = useDispatch();

  //useselector to get an reducer attribute
  let data = useSelector((values) => {
    // console.log(values);
    return values.option;
  });

  //to using some logic to become menu bar display none;
  function hidingData(valPass) {
    if (valPass === "clicked") {
      return "none";
    } else if (valPass === "closed") {
      return "block";
    }
  }
  return (
    <header>
      <span className="head-first bubble"></span>
      <section className="logo">
        <li>
          <a href="/">
            <i class="fa-brands fa-slack"></i>&nbsp;Vksite
          </a>
        </li>
      </section>
      <section className="left-side">
        <li>
          <a href="/">
            <i class="fa-solid fa-circle-info"></i>&nbsp;Help
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa-solid fa-right-to-bracket"></i>&nbsp;Signup
          </a>
        </li>
      </section>
      <section className="right-side">
        <li>
          <a href="/">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>

        <li>
          <button>
            <i class="fa-solid fa-cloud-arrow-down"></i> Downlode
          </button>
        </li>
        <span className="head-second bubble"></span>
      </section>

      <li
        className="menu-bar"
        onClick={() => {
          dispatch(ActionData.ClickedMenu());
        }}
        style={{ display: hidingData(data) }}
      >
        <i class="fa-solid fa-bars"></i>
      </li>
    </header>
  );
};

export default Header;
