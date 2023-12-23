import React from "react";
import image_3 from "../images/Footer/companies/image 3.png";
import image_4 from "../images/Footer/companies/image 4.png";
import image_5 from "../images/Footer/companies/image 5.png";
import image_6 from "../images/Footer/companies/image 6.png";
import Rectangle_8 from "../images/Footer/companies/Rectangle 8.png";
import Rectangle_9 from "../images/Footer/companies/Rectangle 9.png";
import Rectangle_11 from "../images/Footer/companies/Rectangle 11.png";
import Rectangle_14 from "../images/Footer/companies/Rectangle 14.png";
import Rectangle_16 from "../images/Footer/companies/Rectangle 16.png";
import Rectangle_19 from "../images/Footer/companies/Rectangle 19.png";
import Rectangle_46 from "../images/Footer/companies/Rectangle 46.png";
import Rectangle_35 from "../images/Footer/Rectangle 35.png";
import Rectangle_36 from "../images/Footer/Rectangle 36.png";
import Rectangle_37 from "../images/Footer/Rectangle 37.png";
import vector from "../images/Footer/social media/vector.png";
import ln from "../images/Footer/social media/ln.png";
import twitter from "../images/Footer/social media/twitter.png";
import Group_81 from "../images/Footer/social media/Group 81.png";
import fb from "../images/Footer/social media/fb.png";
import youtube from "../images/Footer/social media/youtube.png";
import dribble from "../images/Footer/social media/dribble.png";
import Group from "../images/Footer/social media/Group.png";
import Line_13 from "../images/Footer/Line 13.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <div>
          <img src={Rectangle_46} />
        </div>

        <div>
          <img src={Rectangle_9} />
        </div>
        <div>
          <img src={Rectangle_14} />
        </div>
        <div>
          <img src={Rectangle_16} />
        </div>
        <div>
          <img src={image_3} />
        </div>
        <div>
          <img src={Rectangle_19} />
        </div>
        <div>
          <img src={image_6} />
        </div>
        <div>
          <img src={Rectangle_8} />
        </div>
        <div>
          <img src={image_4} />
        </div>
        <div>
          <img src={Rectangle_11} />
        </div>
        <div>
          <img src={image_5} />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-logo">
          <div className="footer-web-logos">
            <div>
              <img className="webdoors-logo" src={Rectangle_35} />
            </div>
            <div className="logos-flex">
              <div>
                <img src={Rectangle_36} />
                <img src={Rectangle_37} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-info">
          <div className="footer-social">
            <Link
              style={{ textDecoration: "none" }}
              to="something"
              className="links"
            >
              <div className="media-con">
                <img src={vector} />
                <img src={ln} />
                <img src={twitter} />
                <img src={Group_81} />
                <img src={fb} />
                <img src={youtube} />
                <img src={dribble} />
                <img src={Group} />
              </div>
            </Link>
            <div className="footer-text-info">
              <div className="footer-text-info-left">
                <p>
                  <span className="info-span">Name:</span> JSC Webdoors
                </p>
                <p>
                  <span className="info-span">Gov.Id:</span> 405281216`
                </p>
              </div>
              <div className="footer-text-info-right">
                <div>
                  <p>
                    <span className="info-span">Telephone:</span> +995 571507979
                  </p>
                  <p>
                    <span className="info-span">Telephone2:</span> +995
                    599339099
                  </p>
                  <p>
                    <span className="info-span">Email:</span> Info@Webdoors.Ge
                  </p>
                  <p>
                    <span className="info-span">Address:</span> 97 Akaki
                    Tsereteli Ave
                  </p>
                  <p>
                    <span className="info-span">Zip:</span> 0179
                  </p>
                </div>
              </div>
            </div>
            <div className="line-2">
              <img src={Line_13} />
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <div className="footer-text">
          <p>Copyright © 2018-2022 all rights reserved</p>
        </div>
        <div className="line">
          <img src={Line_13} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
