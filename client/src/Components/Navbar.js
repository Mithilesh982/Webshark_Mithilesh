import React from "react";
import "./Styles/Navbar.css"

function Navbar() {
  return (
    <>
      <div
        className="conatiner-fluid navbar-container d-flex justify-content-between align-items-center mx-0 px-5 "
        style={{ height: "10vh" }}
      >
        <div className="brand">
          {/* <span>
            <i className="fa-solid fa-square position-relative"></i>
            <i className="fa-regular fa-square position-absolute" style={{"left":"-0%"}}></i>
          </span> */}
          <h2>Topic</h2>
        </div>
        <div className="navlinks">
          <ul className="hstack gap-3" style={{ listStyle: "none" }}>
            <li>Home</li>
            <li>Browse Topic</li>
            <li>How it works</li>
            <li>Faq</li>
            <li>contact</li>
            <li>
              <select name="" id="" style={{border:"none"}}>
                <option value="pages" selected>
                  PAGES
                </option>
              </select>
            </li>
          </ul>
        </div>
        <div className="profile text-center">
          <div className="bg-light" style={{borderRadius:"50px" ,padding:"5px 10px"}}>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
