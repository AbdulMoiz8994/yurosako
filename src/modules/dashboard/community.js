import React, { useEffect } from "react";
import "./scss/index.scss";
import Community from "../../assests/Community/Community.webp";
import { Button } from "../../components";
import NavigationLogo from "../../assests/Yurosako/Navigation-Logo.png";
import twitter from "../../assests/Social media/Twitter2.png";
import instagram from "../../assests/Social media/Instagram2.png";
import discord from "../../assests/Social media/Discord2.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const CommunitySection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="community-section">
      <div
        className="heading-coreteam flex items-center justify-center w-full"
        data-aos="zoom-in-down"
      >
        <img src={Community} alt="CoreTeam" width={"50%"} />
      </div>
      <div
        className="desc-team text-left  text-white text-xl w-1/2 mx-auto"
        data-aos="flip-down"
      >
        <p className="py-5">
          We see strength in community and have curated an inclusive space for
          all. We will be introducing a community wallet and global activations.
          Want to keep up with all the latest news on the Yurosako world?
        </p>
        <p className="py-5">
          We keep our active community informed and engaged with new content on
          Discord first.
        </p>
      </div>
      <div className="btn-text" data-aos="fade-right">
        <div className="check"></div>
        <Button value={"Discord"} />
        <div className="checktwo"></div>
      </div>
      <div className="flex justify-center py-4 mt-20" data-aos="flip-left">
        <img src={NavigationLogo} alt="NavigationLogo" width={"180px"} />
      </div>
      <div className="social-icons flex justify-center my-3 items-center gap-4">
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
        <img src={discord} alt="discord" />
      </div>
      <div className="copywrite">
        <p>Copyright © Yurosako, Inc. 2022</p>
        <p>TERMS & USE</p>
      </div>
    </div>
  );
};
