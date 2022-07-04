import React from 'react';
import "./scss/index.scss";
import {Header} from "../../layout";
import BannerCharacter  from "../../assests/Header/Banner-character.webp"
import logo from "../../assests/Header/HeaderLogo.webp"

export const Dashboard = () => {
  return (
    <div className='main-page'>
       <Header/>
    {/* Image section */}
       <div className='div-section'>
    {/* <h1 style={{color: 'white'}}>heloo</h1> */}
          <div className='content-section flex justify-between items-center flex-wrap  w-4/5 mx-auto'>
            <div className='text w-2/4'>
             <img src={logo} alit="logo" />   
             <h1>Helo This is NFT site</h1>
            </div>
            <div className='w-2/4 h-full pt-14' >
            <img  src={BannerCharacter} alt="BannerCharacter"/>
            </div>
          </div>
       </div>
    </div>
  )
}
