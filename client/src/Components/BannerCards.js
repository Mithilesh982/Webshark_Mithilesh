import React from "react";
import WebDesignimg from "./images/undraw_Remote_design_team_re_urdx.png";

function BannerCards() {
  return (
    <>
      <div
        className="banner_card_Container conatiner-fluid mx-0 justify-content-center align-items-center"
        style={{
          height: "50vh",
          background: "#05c1bb",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div
              className="col col-4 p-4"
              style={{
                background: "white",
                border: "none",
                borderRadius: "10px",
                marginTop: "-15vh",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6>Web Design</h6>
                <span
                  style={{
                    background: "rgb(39, 181, 237)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "3px 6px",
                  }}
                >
                  14
                </span>
              </div>
              <p>
                When you search for free CSS template , You will notice that
                TemplateMo is one of the best websites.
              </p>
              <img
                src={WebDesignimg}
                className="img-fluid"
                // style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div
              className="col col-5 p-4"
              style={{
                background: "transparent",
                border: "none",
                borderRadius: "10px",
                marginTop: "-15vh",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6>Web Design</h6>
                <span
                  style={{
                    background: "rgb(39, 181, 237)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "3px 6px",
                  }}
                >
                  14
                </span>
              </div>
              <p>
                When you search for free CSS template , You will notice that
                TemplateMo is one of the best websites.
              </p>
              <img
                src={WebDesignimg}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerCards;
