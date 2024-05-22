import React, { useState, useEffect } from 'react';
import './Insights.css';
import img1 from '../../assets/img.webp';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className='insight'>
      <div className="right">
        <h1>10X Your Insights, Not Your Workload</h1>
        <p>We bring together everything that the most ambitious crypto investors and teams need to make critical decisions. Use data that no one else, however you like, on one single platform.</p>
      </div>
      <div className="left">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Insights;
