import React, { useEffect } from "react";
import "./scss/index.scss";
import CoreTeam from "../../assests/Core Team/Core-Team.webp";
import aliRaad from "../../assests/Core Team/Snake-Slayer.png";
import maryamhamdan from "../../assests/Core Team/Volcano-Sako.png";
import SameerBalcoh from "../../assests/Core Team/Tiger-slayer.png";
import twitter from "../../assests/Social media/Twitter.png";
import instagram from "../../assests/Social media/Instagram.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Coretaam = () => {
  useEffect(() => {
    Aos.init({
      // duration: 1500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="core-team">
      <div
        className="heading-coreteam flex items-center justify-center w-full"
        data-aos="zoom-in-down"
      >
        <img src={CoreTeam} alt="CoreTeam" width={"50%"} />
      </div>
      <div
        className="desc-team text-center uppercase text-white text-2xl w-1/2 mx-auto"
        data-aos="flip-left"
      >
        <p className="">
          YUROSAKO TEAM IS A MIX OF PROFESSIONALS SPECIALISED IN IT, CRYPTO,
          TECHNOLOGY, AND ART
        </p>
      </div>
      <div className="team-section">
        <div className="team-member-one" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="200"		>
          <img src={aliRaad} alt="aliRaad" />
          <p className="mt-3">ALI RAAD</p>
          <p className="level">CO-FOUNDER</p>
          <div className="flex justify-center items-center gap-x-5">
            <img
              src={instagram}
              alt="instagram"
              width={"30px"}
              className="cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              width={"30px"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="team-member-two" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
          <img src={maryamhamdan} alt="maryamhamdan" />

          <p className="mt-3">MARIAM HAMDAN</p>
          <p className="level">LEAD ARTIST</p>
          <div className="flex justify-center items-center gap-x-5">
            <img
              src={instagram}
              alt="instagram"
              width={"30px"}
              className="cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              width={"30px"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="team-member-three" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="700">
          <img src={SameerBalcoh} alt="SameerBalcoh" />

          <p className="mt-3">SAMEER BALOCH</p>
          <p className="level">CONSULTANT</p>
          <div className="flex justify-center items-center gap-x-5">
            <img
              src={instagram}
              alt="instagram"
              width={"30px"}
              className="cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              width={"30px"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
