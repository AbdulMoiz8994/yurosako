import React from "react";
import "./scss/index.scss";
import bigknife from "../../assests/Yurosako/bigknife.webp";
import Yurosako from "../../assests/Yurosako/Yurosako.webp";
// import { ReadMoreToggler } from 'read-more-read-less-toggler'

export const AboutYurosako = () => {
  return (
    <div className="content-yuros py-16">
      <div className="knife">
        <img src={bigknife} alt="bigknife" />
      </div>
      <div className="desc">
        {/* <h1></h1> */}
        <img src={Yurosako} alt="Yurosako" />
        <div>
          <p>
            Yurosako follows the journey of 9,000 individuals that got sucked
            into the Sake world and received some special powers and weapons
            along the way. These Sako must now learn to live a new life in this
            mysterious world with features, powers, and gear inspired by the
            most memorable protagonists and antagonists anime has to offer. Each
            Sako is algorithmically generated from a random combination of over
            240 beautifully drawn traits across 7 different categories that
            influence their rarity, power, and uniqueness.
          </p>
          <p>
            Each character is a 1/1 digital collectible that doubles as your
            entrance ticket into the Sako world. Using the characters we have
            designed, we will build out a full world: our very own Yurosako,
            driven by the community. The scope of this project is beyond just
            the NFT collectible and by owning an Sako, you will have access to
            all of it. Holding an Sako allows you to be directly involved in
            influencing the story for our future manga book series by voting at
            regular intervals on story details and plot points. As a member of
            the Sake, you will also be funding and supporting emerging indie
            authors and artists to publish their own manga series and to create
            additional story lines, immersive games, and experiences for the
            Yurosako. Every holder will receive special airdrops of NFTs from
            the creative process of the funded authors. Your decisions will have
            a direct impact on the growth of our project and this new form of
            content creation on a scale never before possible. How cool is
            that?!
          </p>
          <p>
            This is just the start and the future is bright; join us to make
            Yurosako the best anime themed NFT project on any blockchain!
          </p>
        </div>
      </div>
    </div>
  );
};
