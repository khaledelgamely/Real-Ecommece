import React from 'react'
import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Feature2 = () => {
    return (
        <div className='d-flex flex-column gap-4 feature2Hold'>

            <div className='featPicHold '>
                <FaShippingFast/>
                <p> 2 DAY SHIPPING </p>
            </div>

            <div className='featPicHold'>
                <img src={better} alt="hey" />
                <p> EASY RETURNS </p>
            </div>

            <div className='featPicHold'>
                <FaLock/>
                <p> SECURE CHECKOUT </p>
            </div>
        </div>
    )
}

export default Feature2