import React from 'react'
import "../styles/featuresHold.css"
import { FaShippingFast } from "react-icons/fa"
import { FaLock } from 'react-icons/fa';
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";


const FeaturesHold = () => {
    return (
        <div className='u20Features'>

            <div className='u20Features-item'>
                <FaShippingFast className='u20Features-item-icon' />
                <p> 2 DAY DELIVERY </p>
            </div>
            <div className='u20Features-item'>
                <FaLock className='u20Features-item-icon' />
                <p> secure checkout </p>
            </div>
            <div className='u20Features-item'>
                <BsCurrencyDollar className='u20Features-item-icon' />
                <p> royalty points </p>
            </div>
            <div className='u20Features-item'>
                <img src={better} alt="" />
                <p> easy returns </p>
            </div>

        </div>
    )
}

export default FeaturesHold