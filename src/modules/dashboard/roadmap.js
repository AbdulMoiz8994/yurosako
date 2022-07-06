import React, { useState } from "react";
import "./scss/index.scss";
import roadmaplogo from "../../assests/RoadMap/Roadmap.webp";
import yuroosakoface from "../../assests/RoadMap/Yurosako-Face.png";
import EmptyCircle from "../../assests/RoadMap/EmptyCircle.png";
import FillCircle from "../../assests/RoadMap/FillCircle.png";

export const Roadmap = () => {
  const [changeicon, setChangeIcon] = useState(false);
  return (
    <div className="roadmap-div">
      <div className="nested-roadmap">
        <div className="heading-roadmap flex items-center justify-center w-full">
          <img src={roadmaplogo} alt="roadmaplogo" width={"50%"} />
        </div>
        <div className="desc-roadmap text-center uppercase text-white text-2xl w-1/2 mx-auto">
          <p className="">
            If you want to read more about our yurosako Roadmap Please Click our
            Article
          </p>
        </div>

        <div className="data-roadmap flex justify-center  gap-x-8 items-center w-4/5 mx-auto">
          <div className="face-img">
            <img
              src={yuroosakoface}
              alt="yuroosakoface"
              width={"100%"}
              className="border-b-2 border-red-600 face"
            />
          </div>
          <div className="menu-roadmap flex items-center   gap-4">
            <div className="icons flex justify-center flex-col gap-4">
              {/* <button onClick={() => setChangeIcon(!changeicon)}> */}
              <a href="#first">
              <div onClick={() => setChangeIcon(!changeicon)}>
                {changeicon ? (
                  <img src={EmptyCircle} alt="EmptyCircle" width={"80px"} />
                ) : (
                  <img src={FillCircle} alt="FillCircle" width={"80px"} />
                )}
              </div>
              </a>
              {/* </button> */}
              <img src={EmptyCircle} alt="EmptyCircle" width={"80px"} />
              <img src={EmptyCircle} alt="EmptyCircle" width={"80px"} />
              <img src={EmptyCircle} alt="EmptyCircle" width={"80px"} />

              <img src={EmptyCircle} alt="EmptyCircle" width={"60px"} />
              <a href="#last">
                <div onClick={() => setChangeIcon(!changeicon)}>
                  {changeicon ? (
                    <img src={FillCircle} alt="FillCircle" width={"60px"} />
                  ) : (
                    <img src={EmptyCircle} alt="EmptyCircle" width={"60px"} />
                  )}
                </div>
              </a>
            </div>
            <div className="contents-roadmap ">
              <div className="desc-roadmap-carosal w-full mb-10">
                <a id="first"></a>
                <h1 className="text-white">
                  {" "}
                  <span> 01.</span> Anime Manga:
                </h1>
                <p>
                  We believe that we have something special when it comes to our
                  art, why don’t we all come together to create a Yurosako Manga
                  series? After our 1st chapter we will then have our community
                  decide the rest!.
                </p>
              </div>
              <div className="desc-roadmap-carosal mb-10">
                <h1 className="text-white">
                  {" "}
                  <span> 02.</span> Merchandise:
                </h1>
                <p>
                  Creating our own merchandising. Offering quality garments and
                  other wearables to our Yurosako holders in limited quantities.
                  Later down the road, we are aiming to release this line of
                  merchandise into the digital world as well. Our goal is to
                  release the first part of this merchandise as soon as
                  possible.
                </p>
              </div>
              <div className="desc-roadmap-carosal mb-10">
                <h1 className="text-white">
                  {" "}
                  <span> 03.</span> Physical masks:
                </h1>
                <p>
                  Identical physical Yurosako masks which can be worn on face.
                  The masks are made of a high-quality soft resin material,
                  strong and not plastic. The mask has elastic straps and
                  buckles for easy carrying and wearing without impeding vision
                  and breathing.
                </p>
              </div>
              <div className="desc-roadmap-carosal mb-10">
                <h1 className="text-white">
                  {" "}
                  <span> 04.</span> Physical and digital artworks:
                </h1>
                <p>
                  We plan to release physical and digital prints of Yurosako art
                  for holders. Physical prints will be released in limited
                  quantities.
                </p>
              </div>
              <div className="desc-roadmap-carosal mb-10">
                <h1 className="text-white">
                  {" "}
                  <span> 05.</span> Collectibles and Figurines:
                </h1>
                <p>
                  Bridging the digital and physical world together through
                  releasing multiple high-quality collectibles. Our collectible
                  collection will expand over time and we aim to show the
                  prototypes as soon as we can, The collectibles for now are: ‍
                </p>
                <ul className="text-white">
                  <li>- Vinyl figurine(s)</li>
                  <li>- Artbook documenting the creating of Yurosako</li>
                </ul>
              </div>

              <div className="desc-roadmap-carosal mb-10">
                <a id="last"></a>
                <h1 className="text-white">
                  {" "}
                  <span> 06.</span> Mega Box:
                </h1>
                <p>
                  Do you want to see the real Yurosako without mask? There is
                  only ONE Yurosako without mask and unique traits. Find it and
                  you will get a Physical Mega Box that contains, Manga book,
                  Physical masks of Yurosako, Merchandise, Collectibles,
                  figurines, digital artworks, Making of Yurosako Video format
                  and 3 ETH.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
