import React from "react";
import "./content.css";
import { useSelector } from "react-redux";
import Img from "./cs.png";

let Content = () => {
  let Passing_data = (item) => {
    if (item === "clicked") {
      return (item = "rgba(0,0,0,0.9");
    } else if (item === "closed") {
      return (item = "");
    }
  };

  let data = useSelector((state) => {
    return state.option;
    // console.log(state);
  });

  return (
    <main
      style={{
        position: "absolute",
        background: Passing_data(data),
        zIndex: 1,
      }}
    >
      <section className="md-container">
        <div className="row menu">
          <div className="col-md-6">
            <h1 className="heading">The Beautiful design System</h1>
            <span className="second-heading">
              Completed With&nbsp;Examples✌️
            </span>

            <span className="content-first bubble"></span>
            <span className="content-second bubble"></span>
            <p className="site-content">
              The site was devloped purely for React.js,I was so interested to
              learn programming skills and build own website too,and using some
              basic stuff and redux for menu dropdown.
            </p>
            <div className="button-group">
              <button className="start">
                <i class="fa-solid fa-play"></i> Get Started
              </button>
              <button>
                <i class="fa-solid fa-eye"></i> View More
              </button>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 d-flex">
            <span className="img-bubble-left bubble"></span>
            <div className="img-banner">
              <img src={Img} className="banner" alt="vk"></img>
            </div>
            <span className="img-bubble-right bubble"></span>
          </div>
        </div>
      </section>
      <br></br>

      <div className="row all-cards container">
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-2 box mb-5">
          <div className="card card-body">
            <div className="icon-group">
              <i class="fa-solid fa-code"></i>
              <i class="fa-solid fa-tags"></i>
            </div>

            <h2 className="card-title-1">FrontEnd Project</h2>
            <p>
              Note that the development build is not optimized now we ready to
              bulid it dude.y an programmer:And ready to crack.!
            </p>
            <div className="button-group">
              <button>Try Free pack</button>

              <button>Get Perimium</button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2 box mb-5">
          <div className="card card-body">
            <div className="icon-group">
              <i class="fa-solid fa-database"></i>
              <i class="fa-solid fa-tags"></i>
            </div>

            <h2 className="card-title-2">BackEnd Project</h2>
            <p>
              Note that the development build is not optimized now we ready to
              bulid it dude.y an programmer:And ready to crack.!
            </p>
            <div className="button-group">
              <button>Try Free pack</button>

              <button>Get Perimium</button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2 box mb-5">
          <div className="card card-body">
            <div className="icon-group">
              <i class="fa-solid fa-file-code"></i>
              <i class="fa-solid fa-tags"></i>
            </div>

            <h2 className="card-title-3">FullStack&nbsp;Project</h2>
            <p>
              Note that the development build is not optimized now we ready to
              bulid it dude.y an programmer:And ready to crack.!
            </p>
            <div className="button-group">
              <button>Try Free pack</button>

              <button>Get Perimium</button>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,320L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default Content;
