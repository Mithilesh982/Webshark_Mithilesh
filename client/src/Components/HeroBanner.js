import React from "react";
import Navbar from "./Navbar";
import "./Styles/HeroBanner.css";

function HeroBanner() {
  return (
    <>
      <div className="herobanner-container container-fluid px-0 mx-0">
        <Navbar />
        <div className="m-0">
          <div
            className="conatiner d-flex flex-column justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <div className="">
              <h1 className="text-light fw-bold" style={{ fontSize: "4rem" }}>
                Discover. Learn. Enjoy
              </h1>
            </div>
            <div className="">
              <p className="fw-bold fs-4" style={{ color: "#025162" }}>
                platform for creatives around the world
              </p>
            </div>
            <div
              className="searchbar d-flex justify-content-center align-items-center positon-relative align-items-center"
              style={{ width: "700px" }}
            >
              <span className="" style={{ marginRight: "-30px", zIndex: 2 }}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                style={{
                  width: "100%",
                  zIndex: 1,
                  padding: "15px 45px",
                  border: "none",
                  borderRadius: "40px",
                }}
                name="searchinput"
                placeholder="Desing, Code, Marketing, Finanace"
                id=""
              />

              <button
                style={{
                  marginLeft: "-95px",
                  zIndex: 2,
                  border: "none",
                  background: "#05c1bb",
                  padding:"10px 20px",
                  borderRadius:"30px"
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
