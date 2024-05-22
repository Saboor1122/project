import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import './Hero.css'
import video from '../../assets/video.mp4'
const Hero = () => {

const buttonStyle={
width:'30px',
height:'30px',
justify:'center',
align:'center',
background:'transparent',
}
const secondStyle={
width:'30px',
height:'30px',
justify:'center',
align:'center',
background:'transparent',
color:' #00FFA7',
}
return (
<div className='HERO'>
    <div className='hero'>
        <div className="hero-top">
            <h1>Onchain Data Platform Trusted by the Best</h1>
        </div>
        <div className="hero-middle">
            <p>Empowering crypto Investors with deep insights to make more informed decisions</p>
        </div>
        <div className="hero-bottom">
            <button className="fill">
                <p>Launch App</p>
                <IoIosArrowRoundForward style={buttonStyle} />
            </button>
            <button className="transparent">
                <p>Explore Pricing</p>
                <IoIosArrowRoundForward style={secondStyle} />
            </button>
        </div>
    </div>
    <div className="video">
    <video className='video-player' width="100%" height="auto"  autoPlay 
        loop 
        muted 
        playsInline>
        <source src={video} type="video/mp4"/>

    </video>
    </div>
</div>
)
}

export default Hero