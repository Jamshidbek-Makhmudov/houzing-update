import React, { useState } from "react";
import { navbar } from "../../../utils/navbar";
import { Wrapper } from "./style";
import "./style.css";
import facebook from "./../../../assets/icons/svg/facebookIcon.svg";
import twitter from "./../../../assets/icons/svg/twittericon.svg";
import instagram from "./../../../assets/icons/svg/instagramIcon.svg";
import linkedin from "./../../../assets/icons/svg/linkedinIcon.svg";
import { Link} from "react-router-dom";

const NavbarForPhone = () => {
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive((current) => !current);
  };
  return (
    <>
      <section>
        <Wrapper onClick={() => handleClick()} className="iconWr">
          <div
            style={{
              transform: active ? "rotate(45deg)" : "",
              backgroundColor: active ? "black" : "white",
              top: active ? "50%" : "calc(50% - 8px)",
            }}
            className="menuline menuline1"
          ></div>
          <div
            style={{
              transform: active ? "rotate(-45deg)" : "",
              top: active ? "50%" : "calc(50% + 8px)",
              backgroundColor: active ? "black" : "white",
            }}
            className="menuline menuline2"
          ></div>
          <div
            style={{
              transform: active ? "translate(-100%)" : "",
              top: active ? "" : "",
            }}
            className="menuline menuline3"
          ></div>
        </Wrapper>
        <div
          style={{
            background: active ? "white" : "white",
            display: active ? "" : "none",
            width: active ? "100%" : "0",
            // maxWidth: active ? "1440px" : "0",
            minWidth: active ? "0px" : "0",
          }}
          className="kategory"
        >
          <div
            style={{
              display: active ? "" : "none",
            //   width: active ? "300px" : "50px",
            }}
            className="categories"
          >
            <div className="container">
              <div className="pglink">
                {navbar.map(
                  (value, index) => !value.hidden && <Link onClick={()=>handleClick()} className="Link" to={value.path} key={index} >{value.title}</Link>
                )}
              </div>
              <div className="social-media-icon">
                <a href="https://facebook.com/">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://twitter.com/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://instagram.com/">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://facebook.com/">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarForPhone;
