import React from "react";
import Group_31 from "../../images/Group 31.png";
import Group_32 from "../../images/Group 32.png";
import Group_33 from "../../images/Group 33.png";
import Group_34 from "../../images/Group 34.png";
import Group_35 from "../../images/Group 35.png";
import Group_36 from "../../images/Group 36.png";
import Group_83 from "../../images/Group 83.png";
import Vector from "../../images/Vector.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services">
      <div className="ser-head">
        <div>
          <img src={Group_83} />
        </div>
        <div className="ser-title">
          <p>Services</p>
          <Link
            style={{ textDecoration: "none" }}
            to="something"
            className="links"
          >
            <img className="vector serv-vec" src={Vector} />
          </Link>
        </div>
      </div>

      <div className="ser-bottom">
        <div className="text-with-photos">
          <div className="square-2"></div>
          <div className="ser-img" style={{ justifyContent: "end" }}>
            <img src={Group_36} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-num-title">
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
            }}
            className="square-1 group-1"
          ></div>
        </div>
        {/* <div className="ser-head for-responsive">
          <div>
            <img className="group-83" src={Group_83} />
          </div>
          <div className="ser-title">
            <p>Services</p>
            <Link
              style={{ textDecoration: "none" }}
              to="something"
              className="links"
            >
              <img className="vector serv-vec" src={Vector} />
            </Link>
          </div>
        </div> */}

        <div className="text-with-photos ">
          <div
            style={{ order: "2", justifyContent: "start" }}
            className="ser-img"
          >
            <img src={Group_35} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-num-title">
              <span className="ser-nums">02.</span> Wireframing
            </p>
            <p className="ser-text">
              Our experienced UI/UX designers will create wireframes to
              visualize the client’s concept and ideas that clearly define the
              user journey
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #1FB0F3 -0.4%, #7B5DFA 99.14%)",
            }}
            className="square-1 group-2"
          ></div>
        </div>

        <div className="text-with-photos">
          <div style={{ justifyContent: "end" }} className="ser-img">
            <img src={Group_34} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-num-title">
              <span className="ser-nums">03.</span> Prototyping
            </p>
            <p className="ser-text">
              We lead the industry with best in class prototype design
              techniques that give you an earlier heads up on the look and feel,
              during the development cycle.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F -0.4%, #7B5DFA 99.14%)",
            }}
            className="square-1 group-1"
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
            <p className="ser-num-title">
              <span className="ser-nums">04.</span> Design & code
            </p>
            <p className="ser-text">
              We use Human Interface Guidelines and follow industry best
              practices during our design and coding process. Our capabilities
              deliver sleek and responsive apps to give you a competitive edge.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F 13.59%, #FB634F 99.14%)",
            }}
            className="square-1 group-2"
          ></div>
        </div>

        <div className="text-with-photos">
          <div style={{ justifyContent: "end" }} className="ser-img">
            <img src={Group_32} className="ser-images" />
          </div>
          <div className="ser-texts">
            <p className="ser-num-title">
              <span className="ser-nums">05.</span> Testing & QA
            </p>
            <p className="ser-text">
              We rigorously test the performance app performance to Industry
              standards to evaluate its scalability, responsiveness, and
              stability.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F31F46 -0.4%, #FB634F 99.14%)",
            }}
            className="square-1 group-1"
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
            <p className="ser-num-title">
              <span className="ser-nums">06.</span> Deployment
            </p>
            <p className="ser-text">
              Once the app fulfills our client’s requirements and expectations,
              we deploy the app according to the launch plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
