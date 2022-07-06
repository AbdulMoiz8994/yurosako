import React from "react";
import "./scss/index.scss";
import CoreTeam from "../../assests/Core Team/Core-Team.webp";
import aliRaad from "../../assests/Core Team/Snake-Slayer.png";
import maryamhamdan from "../../assests/Core Team/Volcano-Sako.png";
import SameerBalcoh from "../../assests/Core Team/Tiger-slayer.png";
import twitter from "../../assests/Social media/Twitter.png";
import instagram from "../../assests/Social media/Instagram.png";

export const Coretaam = () => {
  return (
    <div className="core-team">
      <div className="heading-coreteam flex items-center justify-center w-full">
        <img src={CoreTeam} alt="CoreTeam" width={"50%"} />
      </div>
      <div className="desc-team text-center uppercase text-white text-2xl w-1/2 mx-auto">
        <p className="">
          YUROSAKO TEAM IS A MIX OF PROFESSIONALS SPECIALISED IN IT, CRYPTO,
          TECHNOLOGY, AND ART
        </p>
      </div>
      <div className="team-section">
        <div className="team-member-one">
          <img src={aliRaad} alt="aliRaad" />
          <p>ALI RAAD</p>
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
        <div className="team-member-two">
          <img src={maryamhamdan} alt="maryamhamdan" />

          <p>MARIAM HAMDAN</p>
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
        <div className="team-member-three">
          <img src={SameerBalcoh} alt="SameerBalcoh" />

          <p>SAMEER BALOCH</p>
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
