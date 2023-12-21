import React from "react";
import Group_31 from "../../images/Group 31.png";
import Group_32 from "../../images/Group 32.png";
import Group_33 from "../../images/Group 33.png";
import Group_34 from "../../images/Group 34.png";
import Group_35 from "../../images/Group 35.png";
import Group_36 from "../../images/Group 36.png";
import Group_83 from "../../images/Group 83.png";
import Vector from "../../images/Vector.png";

function Services() {
  return (
    <section className="services">
      <div className="ser-head">
        <div>
          <img src={Group_83} />
        </div>
        <div className="ser-title">
          Services
          <img className="vector" src={Vector} />
        </div>
      </div>

      <div className="ser-bottom">
        <div className="text-with-photos">
          <div className="square-2"></div>
          <div className="ser-img" style={{ justifyContent: "end" }}>
            <img src={Group_36} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #1FB0F3 -0.4%, #9DDCFA 99.14%)",
              transform: "rotate(312deg)",
            }}
            className="square-1"
          ></div>
        </div>

        <div className="text-with-photos">
          <div
            style={{ order: "2", justifyContent: "start" }}
            className="ser-img"
          >
            <img src={Group_35} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #1FB0F3 -0.4%, #7B5DFA 99.14%)",
              transform: "rotate(45deg)",
            }}
            className="square-1"
          ></div>
        </div>

        <div className="text-with-photos">
          <div style={{ justifyContent: "end" }} className="ser-img">
            <img src={Group_34} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F -0.4%, #7B5DFA 99.14%)",
              transform: "rotate(312deg)",
            }}
            className="square-1"
          ></div>
        </div>

        <div className="text-with-photos">
          <div
            style={{ order: "2", justifyContent: "start" }}
            className="ser-img"
          >
            <img src={Group_33} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F 13.59%, #FB634F 99.14%)",
              transform: "rotate(45deg)",
            }}
            className="square-1"
          ></div>
        </div>

        <div className="text-with-photos">
          <div style={{ justifyContent: "end" }} className="ser-img">
            <img src={Group_32} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F31F46 -0.4%, #FB634F 99.14%)",
              transform: "rotate(132deg)",
            }}
            className="square-1"
          ></div>
        </div>

        <div className="text-with-photos">
          <div className="square-3"></div>
          <div
            style={{ order: "2", justifyContent: "start" }}
            className="ser-img"
          >
            <img src={Group_31} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-title">
              <span className="ser-nums">01.</span> Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
