import React, { useEffect } from "react";
import "./scss/index.scss";
import customization from "../../assests/Customization/Customization.webp";
import multiNFT from "../../assests/Customization/multiNFT.webp";
import ladyNFT from "../../assests/Customization/ladyNFT.webp";
import { CustomDesign, CustomDesignMob } from "../index";
// import { Unity, useUnityContext } from "react-unity-webgl";

import Aos from "aos";
import "aos/dist/aos.css";

export const Customization = () => {
  // const { unityProvider } = new useUnityContext({
  //   loaderUrl: "build/Build/Customization-Desktop.loader.js",
  //   dataUrl: "build/Build/Customization-Desktop.data",
  //   frameworkUrl: "build/Build/Customization-Desktop.framework.js",
  //   codeUrl: "build/Build/Customization-Desktop.wasm",
  // });
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="customization py-3">
      <div className="netsed-customizd">
        {/* <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 , background: "#231F20" }}
        /> */}
        <div
          className="heading-cust flex items-center justify-center w-full"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img src={customization} alt="customization" width={"50%"} />
        </div>
        <div
          className="desc-cust text-center uppercase text-white text-2xl w-1/2 mx-auto"
          data-aos="flip-right"
          data-aos-delay="300"
        >
          <p className="">
            Release your creativity and customize your favorite look of Yurosako
          </p>
        </div>

        {/* <div className="images-cust flex justify-between flex-wrap w-4/5 mx-auto items-center my-5">
          <img
            src={ladyNFT}
            alt="ladyNFT"
            width={"50%"}
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <img
            src={multiNFT}
            alt="multiNFT"
            width={"50%"}
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </div> */}
      </div>
      <div className="webCustomDesign">
        <CustomDesign />
      </div>
      <div className="mobileCustomDes">
        <CustomDesignMob />
      </div>
    </div>
  );
};
