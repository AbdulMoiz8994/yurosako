import React, { useEffect } from "react";
import "./scss/index.scss";
import logo from "../../assests/Header/HeaderLogo.webp";
import twitter from "../../assests/Social media/Twitter2.png";
import instagram from "../../assests/Social media/Instagram2.png";
import discord from "../../assests/Social media/Discord2.png";
import { Sidebar } from "../index";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="main-header  bg-black h-16 w-full">
      <div className="netsed-header flex">
        {/* side colors */}
        <div className="flex justify-start items-start">
          <div className="h-16 w-2.5 bg-red-600"></div>
          <div className="h-16 w-2.5 bg-blue-400"></div>
          <div className="h-16 w-2.5 bg-yellow-400"></div>
        </div>
        {/* end side color */}
        {/* logo */}
        <div className="flex justify-between items-center flex-wrap w-full">
          <div
            className="flex justify-center items-center ml-5"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <img src={logo} alt="logo" width={"140px"} height="120px" />
          </div>
          {/* links */}
          <div className="links">
            <ul className="ul-header">
              <li data-aos="slide-left">Story</li>
              <li data-aos="slide-left">Customize</li>
              <li data-aos="slide-left">Roadmap</li>
              <li data-aos="slide-left">manga</li>
              <li data-aos="slide-left">Whitepaper</li>
              <li data-aos="slide-left">Shop</li>
            </ul>
            {/* social media links */}
            <div className="social-meida">
              <img src={twitter} alt="twitter" data-aos="slide-left" />
              <img src={instagram} alt="twitter" data-aos="slide-left" />
              <img
                src={discord}
                alt="twitter"
                data-aos="slide-left"
                data-aos-delay="100"
              />
            </div>
          </div>
          <div className="sidebar-mob">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
