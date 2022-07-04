import React from 'react'
import "./scss/index.scss";
import logo from "../../assests/Header/HeaderLogo.webp"
import twitter from "../../assests/Social media/Twitter2.png";
import  instagram from "../../assests/Social media/Instagram2.png";
import discord from "../../assests/Social media/Discord2.png";
import {Sidebar} from "../index"


export const Header = () => {
  return (
    <div className='main-header  bg-black h-16 w-full'>
        <div className='netsed-header flex'> 
        {/* side colors */}
             <div className='flex justify-start items-start'>
             <div className='h-16 w-2.5 bg-red-600'></div>
             <div className='h-16 w-2.5 bg-blue-400'></div>
             <div className='h-16 w-2.5 bg-yellow-400'></div>
             </div>
{/* end side color */}
{/* logo */}
        <div className='flex justify-between items-center flex-wrap w-full'>
        <div className='flex justify-center items-center ml-5'>
          <img src={logo} alt='logo' width={"140px"} height="120px" />
          </div>      
          {/* links */}
            <div className='links'>
                 <ul className='ul-header'>
                  <li>Story</li>
                  <li>Customize</li>
                  <li>Roadmap</li>
                  <li>manga</li>
                  <li>Whitepaper</li>
                  <li>Shop</li>
                 </ul>
                 {/* social media links */}
                 <div className='social-meida'>
                    <img src={twitter} alt='twitter'/>
                    <img src={instagram} alt='twitter'/>
                    <img src={discord} alt='twitter'/>
                 </div>

              </div>       
              <div className='sidebar-mob'>
                  <Sidebar/>
              </div>
              </div>
        </div>
    </div>
  )
}
