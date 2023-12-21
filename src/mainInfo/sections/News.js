import React from "react";
import Group_83 from "../../images/Group 83.png";
import Vector from "../../images/Vector.png";
import Ellipse_41 from "../../images/Ellipse 41.png";
import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";

function News() {
  return (
    <section className="news">
      <div className="news-head">
        <img className="news-line" src={Group_83} />
        <p className="news-text-1">Read News about web</p>
        <img className="vector" src={Vector} />
      </div>

      <div className="news-bottom">
        <div className="news-texts" style={{ order: 2 }}>
          <p className="news-text-2">Lorem ipsum dolor amet</p>
          <p className="news-text-3">11 November 2021</p>
          <p className="news-text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            condimentum scelerisque viverra magna sollicitudin vestibulum. Augue
            augue elementum massa vestibulum, vitae cras tempor, vulputate
            risus. Facilisis tristique lorem cras porttitor ultrices cursus
            tristique. Ipsum lectus pretium rhoncus id.
          </p>
          <div className="news-button">
            <img className="elipse" src={Ellipse_41} />
            <p className="news-text-5">Read more</p>
          </div>
        </div>
        <div className="news-img-con">
          <img className="news-img" src={news1} />
          <div className="gradient1"></div>
        </div>
      </div>
      <div className="news-bottom">
        <div
          style={{ alignItems: "flex-start", transform: "translateX(6.5rem)" }}
          className="news-texts news-texts-2"
        >
          <p className="news-text-2">Lorem ipsum dolor amet</p>
          <p className="news-text-3">11 November 2021</p>
          <p className="news-text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            condimentum scelerisque viverra magna sollicitudin vestibulum. Augue
            augue elementum massa vestibulum, vitae cras tempor, vulputate
            risus. Facilisis tristique lorem cras porttitor ultrices cursus
            tristique. Ipsum lectus pretium rhoncus id.
          </p>
          <div className="news-button">
            <img className="elipse" src={Ellipse_41} />
            <p className="news-text-5">Read more</p>
          </div>
        </div>
        <div
          style={{ transform: "translateX(-5rem)" }}
          className="news-img-con"
        >
          <img className="news-img" src={news2} />
          <div className="gradient2"></div>
        </div>
      </div>
    </section>
  );
}

export default News;
