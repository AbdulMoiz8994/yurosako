import React, { useEffect } from "react";
import "./scss/index.scss";
import { Button } from "../../components";
import { Header } from "../../layout";
import { AboutYurosako } from "./about-yuk";
import { Invisible } from "./invisble";
import { Customization } from "./customization";
import { Roadmap } from "./roadmap";
import { Mange } from "./manga";
import { ComingSoon } from "./comingsoon";
import { Coretaam } from "./coretaam";
import { Carosal } from "./carosal";
import { CommunitySection } from "./community";
import BannerCharacter from "../../assests/Header/Banner-character.webp";
import logo from "../../assests/Header/HeaderLogo.webp";
import Aos from "aos";
import "aos/dist/aos.css";

export const Dashboard = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease-out',
      once: false,
    });
  });
  return (
    <div>
      <Header />
      <div className="main-page">
        {/* Image section */}
        <div className="div-section">
          {/* <h1 style={{color: 'white'}}>heloo</h1> */}
          <div className="content-section flex justify-between items-center flex-wrap  w-4/5 mx-auto">
            <div className="text w-2/4" data-aos-delay="200" data-aos="fade-right">
              <img src={logo} alit="logo" className="main-logo" />
              <p>
                Anime artwork with in depth Details and unmatched utility
                combined
              </p>
              <div className="btn-text">
                <div className="check"></div>
                <Button value={"Purchase"} />
                {/* <div className="gap"></div> */}
                <div className="checktwo"></div>
              </div>
            </div>
            <div className="w-2/4 h-full pt-14 imgs" data-aos-delay="200" data-aos="fade-left">
              <img src={BannerCharacter} alt="BannerCharacter" />
            </div>
          </div>
        </div>
      </div>
      <div className="yursako">
        {/* <div className="yur-img"></div> */}
        <AboutYurosako />
        <Carosal initialIndex={3} />
        {/* Carosal Section */}
        <Invisible />
        <Customization />
        <Roadmap />
        <Mange />
        <ComingSoon />
        <Coretaam />
        <CommunitySection />
      </div>
    </div>
  );
};
