import React from "react";
import "./menu.css";
import * as ActionData from "../reducer/action";
import { useDispatch, useSelector } from "react-redux";

function Menus() {
  let dispatch = useDispatch();

  //   let [adjust] = useState({
  //     top: 100,
  //   });

  let Passing_data = (item) => {
    if (item === "clicked") {
      return (item = 70);
    } else if (item === "closed") {
      return (item = -1200);
    }
  };

  let data = useSelector((state) => {
    return state.option;
  });

  return (
    <div
      className="cover-frame"
      style={{ position: "absolute", top: Passing_data(data), zIndex: 20 }}
    >
      <section className="top-side">
        <span
          className="cancel-icon"
          onClick={() => {
            dispatch(ActionData.ClosedMenu());
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
      </section>

      <section className="menu-card">
        <div className="sign-up">
          <i class="fa-solid fa-right-to-bracket"></i>
          <div className="sign-up__datas">
            <h1>
              <a href="/">Sign Up</a>
            </h1>
            <span>Sign Up to upgrade your level</span>
          </div>
        </div>

        <div className="help">
          <i class="fa-solid fa-circle-info"></i>
          <div className="help__datas">
            <h1>
              <a href="/">Help</a>
            </h1>
            <span>Our Company Helps to 24x7 hours </span>
          </div>
        </div>

        <div className="downlode">
          <button>
            <i class="fa-solid fa-cloud-arrow-down"></i> Downlode
          </button>
        </div>
      </section>
    </div>
  );
}

export default Menus;
