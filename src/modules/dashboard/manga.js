import React from "react";
import "./scss/index.scss";
import Manga from "../../assests/Manga/Manga.webp";
import MangaPoster from "../../assests/Manga/Manga-Poster.webp";
import { Button } from "../../components/button";

export const Mange = () => {
  return (
    <div className="manga-section py-4 ">
      <div className="heading-manga flex items-center justify-center w-full">
        <img src={Manga} alt="Manga" width={"50%"} />
      </div>
      <div className="desc-manga text-center uppercase text-white text-2xl w-1/2 mx-auto">
        <p className="">
          If you want to read more about our yurosako Roadmap Please Click our
          Article
        </p>
      </div>
      <div className="manga-desc flex justify-center mt-6 gap-y-3 gap-x-8  w-4/5 mx-auto">
        <div className="mango-poster">
          <img
            src={MangaPoster}
            alt="MangaPoster"
            width={"100%"}
            className="border-b-2 border-red-600 face"
          />
        </div>
        <div className="menu-manga flex    gap-4">
          <div className="">
            <h1>
              <span> S</span>AVIOR OF SAKO WORLD
            </h1>
            <p className="manga-text">
              In the year 2100, scientists had developed and mastered the craft
              of time travel. They established different machines for that
              purpose and were incrementally updated to make them smaller in
              size and more efficient in function. At Public Security
              Intelligence Agency (PSIA) headquarters, they were worried about a
              machine that had gone missing, purportedly stolen by a criminal
              and he was using it to go back in time as well as the future to
              live his fantasies, rape, kill and wreak havoc on the
              communities.
            </p>
            <div className="volumne gap-x-4 text-white flex items-center justify-start">
              <p className="text-xl uppercase font-bold">
                volume <span>1</span>
              </p>
              <p className="date">8/7/2022</p>
            </div>
            <div className="btn-text table my-6 manga-btn">
              <div className="check"></div>
              <Button value={"Priview"} />
              <div className="checktwo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
