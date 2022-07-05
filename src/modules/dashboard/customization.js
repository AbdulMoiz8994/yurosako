import React from "react";
import "./scss/index.scss";
import customization from "../../assests/Customization/Customization.webp";
import multiNFT from "../../assests/Customization/multiNFT.webp";
import ladyNFT from "../../assests/Customization/ladyNFT.webp";
export const Customization = () => {
  return (
    <div className="customization py-3">
      <div className="netsed-customizd">
        <div className="heading-cust flex items-center justify-center w-full">
          <img src={customization} alt="customization" width={"50%"} />
        </div>
        <div className="desc-cust text-center uppercase text-white text-2xl w-1/2 mx-auto">
          <p className="">
            Release your creativity and customize your favorite look of Yurosako
          </p>
        </div>
        <div className="images-cust flex justify-center flex-wrap gap-x-8 items-center my-5">
        <img src={ladyNFT} alt="ladyNFT" width={"300px"} />
        <img src={multiNFT} alt="multiNFT" width={"300px"} />
        </div>
      </div>
    </div>
  );
};
