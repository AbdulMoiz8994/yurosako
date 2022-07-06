import React from "react";
import "./scss/index.scss";
import { Button } from "../../components";
import { Header } from "../../layout";
import { AboutYurosako } from "./about-yuk";
import { Invisible } from "./invisble";
import { Customization } from "./customization";
import { Roadmap } from "./roadmap";
import { Mange } from "./manga";
import { ComingSoon } from "./comingsoon";
import BannerCharacter from "../../assests/Header/Banner-character.webp";
import logo from "../../assests/Header/HeaderLogo.webp";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="main-page">
        {/* Image section */}
        <div className="div-section">
          {/* <h1 style={{color: 'white'}}>heloo</h1> */}
          <div className="content-section flex justify-between items-center flex-wrap  w-4/5 mx-auto">
            <div className="text w-2/4">
              <img src={logo} alit="logo" className="main-logo" />
              <p>
                Anime artwork with in depth Details and unmatched utility
                combined
              </p>
              <div className="btn-text">
                <div className="check"></div>
                <Button value={"Purchase"} />
                <div className="checktwo"></div>
              </div>
            </div>
            <div className="w-2/4 h-full pt-14 imgs">
              <img src={BannerCharacter} alt="BannerCharacter" />
            </div>
          </div>
        </div>
      </div>
      <div className="yursako">
        {/* <div className="yur-img"></div> */}
        <AboutYurosako />

        {/* Carosal Section */}
        <Invisible />
        <Customization />
        <Roadmap />
        <Mange />
        <ComingSoon />
      </div>
    </div>
  );
};
