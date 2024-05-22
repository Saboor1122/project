import React, { useEffect, useState } from 'react'
import './Query.css'
import { RiArrowRightLine } from "react-icons/ri"; 
import img1 from '../../assets/img.webp';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
const Query = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

    const buttonStyle={
        width:'30px',
        height:'30px',
        justify:'center',
        align:'center',
        background:'transparent',
        }
  return (
    <div className='query'>
        <div className="query-left">
            <h1>Nansen Query for Crypto Teams: The Most Powerful Blockchain Data Platform</h1>
            <button className="contact"><p>Contact Sales</p> <RiArrowRightLine style={buttonStyle}/> </button>
        </div>
        <div className="query-right">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
    </div>
  )
}

export default Query