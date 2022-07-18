import React, { useEffect } from "react";
import "./scss/index.scss";
import comingsoon from "../../assests/Manga/Coming-soon-poster.webp";
import Aos from "aos";
import "aos/dist/aos.css";
export const ComingSoon = () => {
  useEffect(() => {
    Aos.init({
      // duration: 500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="coming-section  px-10 py-8">
      <div className="coming-heading" data-aos="fade-up">
        <h1 className="py-4">
          <span>N</span>EWLY RELEASED VOLUMES
        </h1>
      </div>
      <div className="coming-soon-box">
        <div data-aos="flip-right" data-aos-duration="1000"	 >
          <img src={comingsoon} alt="comingsoon" />
          {/* <div className="coming-desc"></div> */}
          <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
            <p className="text-xs uppercase font-bold">
              volume <span>2</span>
            </p>
            <p className="date">8/7/2022</p>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500">
          <img src={comingsoon} alt="comingsoon" />
          {/* <div className="coming-desc"></div> */}
          <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
            <p className="text-xs uppercase font-bold">
              volume <span>3</span>
            </p>
            <p className="date">8/7/2022</p>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1600">
          <img src={comingsoon} alt="comingsoon" />
          {/* <div className="coming-desc"></div> */}
          <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
            <p className="text-xs uppercase font-bold">
              volume <span>4</span>
            </p>
            <p className="date">8/7/2022</p>
          </div>
        </div>
        <div className="hide" data-aos="flip-right" data-aos-duration="1700">
          <img src={comingsoon} alt="comingsoon" />
          {/* <div className="coming-desc"></div> */}
          <div className="coming-soon-text my-3 text-white flex  items-center  justify-between w-full ">
            <p className="text-xs uppercase font-bold">
              volume <span>5</span>
            </p>
            <p className="date">8/7/2022</p>
          </div>
        </div>
        <div className="hide" data-aos="flip-right" data-aos-duration="1800">
          <img src={comingsoon} alt="comingsoon" />
          {/* <div className="coming-desc"></div> */}
          <div className="coming-soon-text my-3 text-white flex  items-center justify-between w-full ">
            <p className="text-xs uppercase font-bold">
              volume <span>6</span>
            </p>
            <p className="date">8/7/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
