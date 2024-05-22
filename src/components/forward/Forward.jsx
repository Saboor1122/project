import React from 'react'
import './Forward.css'
import { RiArrowRightLine } from "react-icons/ri"; 
const Forward = () => {
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
    <div className='forward'>
        <div className="forward-top">
            <h1>See Forward with Nansen’s Blockchain Analytics</h1>
            <h5>Looking for new possibilities? Discover them now</h5>
        </div>
        <div className="forward-bottom">
            <button className="start"><p>Start for free</p> <RiArrowRightLine style={buttonStyle}/></button>
            <button className="f-contact"><p>Contact Sales</p>  <RiArrowRightLine style={secondStyle}/></button>
        </div>
    </div>
  )
}

export default Forward