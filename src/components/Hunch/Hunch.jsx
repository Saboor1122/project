import React from 'react'
import './Hunch.css'
import video from '../../assets/video.mp4'
const Hunch = () => {
  return (
    <div className='hunch'>
        <div className="top">
            <h1>Got a Hunch? Verify It.</h1>
            <p>Know who or what each wallet is. Top investor or rug puller. Hot project or not. Now you can really see who is doing what via Nansen’s labels. Leverage the superpowers of transparency.</p>
            <a href="">See how Nansen traced outflows from FTX before the crash</a>
        </div>
        <div className="bottom">
        <div className="video">
    <video className='video-player' width="100%" height="auto"  autoPlay 
        loop 
        muted 
        playsInline>
        <source src={video} type="video/mp4"/>
    </video>
    </div>
        </div>
    </div>
  )
}

export default Hunch