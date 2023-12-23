import React from "react";
import Group_83 from "../../images/Group 83.png";
import Vector from "../../images/Vector.png";
import phone from "../../images/phone.png";
import insight from "../../images/insight.png";
import town from "../../images/town.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-head">
        <div className="projects-title">
          <div>Our life’s work</div>
          <Link
            style={{ textDecoration: "none" }}
            to="something"
            className="links"
          >
            <img
              style={{ transform: "rotate(90deg)" }}
              className="vector"
              src={Vector}
            />
          </Link>
        </div>
        <div>
          <img
            style={{ transform: "rotate(180deg)", width: "20.8125rem" }}
            src={Group_83}
          />
        </div>
        <div className="projects-text-con">
          <p className="projects-text">
            <span className="proj-span">Lorem ipsum dolor</span> sit amet,
            consectetur adipiscing elit. Nisi, condimentum scelerisque viverra
            magna sollicitudin vestibulum. Augue augue elementum massa
            vestibulum, vitae cras tempor, vulputate risus. Facilisis tristique
            lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium
            rhoncus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nisi, condimentum scelerisque viverra magna sollicitudin vestibulum.
            Augue augue elementum massa vestibulum, vitae cras tempor, vulputate
            risus. Facilisis tristique lorem cras porttitor ultrices cursus
            tristique. Ipsum lectus pretium rhoncus id.{" "}
          </p>
        </div>
      </div>

      <div className="projects-bottom">
        <p className="projects-text-1">Projects</p>
        <svg
          style={{
            strokeWidth: "2px",
            stroke: " rgba(255, 255, 255, 0.20)",
            width: "100%",
            height: "1rem",
            flexShrink: "0",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="1432"
          height="2"
          viewBox="0 0 1432 2"
          fill="none"
        >
          <path
            d="M1 0.999756L1431 0.999631"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="projects-flex">
          <div className="proj-left">
            <p className="projects-text-2">WeBsite Name</p>
            <p className="projects-text-3">
              Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae
              cras tempor
            </p>
            <Link
              style={{ textDecoration: "none" }}
              to="something"
              className="links"
            >
              <svg
                className="project-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="24"
                viewBox="0 0 81 24"
                fill="none"
              >
                <path
                  d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                  fill="#D0E0EF"
                />
              </svg>
            </Link>
          </div>
          <div className="proj-right">
            <img src={phone} />
          </div>
        </div>
        <div className="projects-flex">
          <div className="proj-left">
            <p className="projects-text-2">WeBsite Name</p>
            <p className="projects-text-3">
              Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae
              cras tempor
            </p>
            <Link
              style={{ textDecoration: "none" }}
              to="something"
              className="links"
            >
              <svg
                className="project-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="24"
                viewBox="0 0 81 24"
                fill="none"
              >
                <path
                  d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                  fill="#D0E0EF"
                />
              </svg>
            </Link>
          </div>
          <div className="proj-right">
            <img src={insight} />
          </div>
        </div>
        <div className="projects-flex">
          <div className="proj-left">
            <p className="projects-text-2">WeBsite Name</p>
            <p className="projects-text-3">
              Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae
              cras tempor
            </p>
            <Link
              style={{ textDecoration: "none" }}
              to="something"
              className="links"
            >
              <svg
                className="project-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="24"
                viewBox="0 0 81 24"
                fill="none"
              >
                <path
                  d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                  fill="#D0E0EF"
                />
              </svg>
            </Link>
          </div>
          <div className="proj-right">
            <img src={town} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
