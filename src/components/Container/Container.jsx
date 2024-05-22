import React from 'react'
import './Container.css'
import { SiPolygon } from "react-icons/si";
import { SiOpensea } from "react-icons/si";
import { FaHillAvalanche } from "react-icons/fa6";
import { SiChainlink } from "react-icons/si"; 
import { GiGauntlet } from "react-icons/gi";
import { RiContrastDrop2Fill } from "react-icons/ri";

const Container = () => {
  return (
    <div className='container'> 
    <div className="container-top">
        <h2>The Smartest Investors and Crypto Teams Use Nansen to Win</h2>
    </div>
    <div className="container-bottom">
        <ul>
            <li>ACCEL</li>
            <li>coinbase</li>
            <li> <SiChainlink/> Chainlink</li>
            <li>ARBITRUM</li>
            <li> <RiContrastDrop2Fill/> consensys</li>
            <li>a16z</li>
            <li> <GiGauntlet/> Gauntlent</li>
            <li> <FaHillAvalanche/>  Avalanche</li>
            <li><SiPolygon /> Polygon</li>
            <li> <SiOpensea />OpenSea</li>
        </ul>
    </div>
    </div>
  )
}

export default Container