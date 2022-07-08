import React from "react";
// import Slider from "react-slick";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import check from "../../assests/Core Team/Snake-Slayer.png";
import Tigerslayer from "../../assests/Core Team/Tiger-slayer.png"
import VolcanoSako from  "../../assests/Core Team/Volcano-Sako.png"
import ladyNFT from "../../assests/Customization/ladyNFT.webp";

// import Carousel from 'react-elastic-carousel';
import Flickity from 'react-flickity-component'
import "flickity/dist/flickity.css";
import "./scss/carosal.scss";





export const Carosal = () => {
    // ('.main-carousel').flickity({
    //     // options
    //     cellAlign: 'left',
    //     wrapAround: true,
    //     freeScroll: true,
    //   });
    
  //   const settings = {
  //     className: "center",
  //       centerMode: true,
  //       infinite: true,
  //       centerPadding: "20px",
  //       slidesToShow: 3,
  //       speed: 500,
  //       rows: 2,
  //       slidesPerRow: 2
  //   };

  //   const responsive = {
  //     superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5,
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 4,
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 3,
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //     },
  //   };
  //   const colors = ["red", "green", "blue", "orange", "yellow", "white"];


  const flickityOptions = {
    initialIndex: 1
}


  return (
    <div className="">
      {/* <div
        className="main-carousel"
        data-flickity='{ "freeScroll": true, "wrapAround": true }'
      >
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
      </div> */}
      <Flickity
      className={'carousel bg-black'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      // disableImagesLoaded={false} // default false
      // reloadOnUpdate // default false
      // static // default false
      data-flickity='{ "wrapAround": true }'
    >
      <img src={check} alt="check"  />
      <img src={Tigerslayer} alt="Tigerslayer"/>
      <img src={VolcanoSako} alt="VolcanoSako"/>
      <img src={ladyNFT} alt="ladyNFT" width={500} /> 
      <img src={check} alt="check"  />
      <img src={Tigerslayer} alt="Tigerslayer"/>
      <img src={VolcanoSako} alt="VolcanoSako"/>
      <img src={ladyNFT} alt="ladyNFT" width={500} />
      <img src={check} alt="check"  />
      <img src={Tigerslayer} alt="Tigerslayer"/>
      {/* <img src={check} alt="check"/> */}
    </Flickity>
    </div>
  );
};
