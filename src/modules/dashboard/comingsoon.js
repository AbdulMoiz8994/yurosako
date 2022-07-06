import React from 'react'
import "./scss/index.scss";
import comingsoon from "../../assests/Manga/Coming-soon-poster.webp"
export const ComingSoon = () => {
  return (
    <div className='coming-section  px-10 py-8'>
     <div className="coming-heading">
        <h1><span>N</span>EWLY RELEASED VOLUMES</h1>
     </div>
     <div className="coming-soon-box">
        <div>
        <img src={comingsoon} alt="comingsoon" /> 
        {/* <div className="coming-desc"></div> */}
        <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
              <p className="text-xs uppercase font-bold">
                volume <span>2</span>
              </p>
              <p className="date">8/7/2022</p>
            </div>
        </div>
        <div>
        <img src={comingsoon} alt="comingsoon" /> 
        {/* <div className="coming-desc"></div> */}
        <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
              <p className="text-xs uppercase font-bold">
                volume <span>3</span>
              </p>
              <p className="date">8/7/2022</p>
            </div>
        </div>
        <div>
        <img src={comingsoon} alt="comingsoon" /> 
        {/* <div className="coming-desc"></div> */}
        <div className="coming-soon-text my-3 text-white flex  items-center  justify-between  w-full">
              <p className="text-xs uppercase font-bold">
                volume <span>4</span>
              </p>
              <p className="date">8/7/2022</p>
            </div>
        </div>
        <div className='hide'>
        <img src={comingsoon} alt="comingsoon" /> 
        {/* <div className="coming-desc"></div> */}
        <div className="coming-soon-text my-3 text-white flex  items-center  justify-between w-full ">
              <p className="text-xs uppercase font-bold">
                volume <span>5</span>
              </p>
              <p className="date">8/7/2022</p>
            </div>
        </div>
        <div className='hide'>
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
  )
}
