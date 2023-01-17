import React from 'react'
import "../styles/Ingredients.css"

import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";


const Ingredients = () => {
    return (
        <div className='ingMainParent'>
            <p className='fs-1 ogtext fw-medium text-center my-5'> OUR INGRIDENTS </p>

            <div className='ingHold'>
                <div className='ingHoldItem'>
                    <img src={ing1} className="zoom2" alt='' />
                    <p>All Natural</p>
                </div>
                <div className='ingHoldItem'>
                    <img src={ing2} className="zoom2" alt='' />
                    <p> Vegetables </p>
                </div>
                <div className='ingHoldItem'>
                    <img src={ing3} className="zoom2" alt='' />
                    <p> Fruits </p>
                </div>
                <div className='ingHoldItem'>
                    <img src={ing4} className="zoom2" alt='' />
                    <p> Vegan </p>
                </div>
                <div className='ingHoldItem'>
                    <img src={ing5} className="zoom2" alt='' />
                    <p> Essential Oils</p>
                </div>
                <div className='ingHoldItem'>
                    <img src={ing6} className="zoom2" alt='' />
                    <p> Botanical </p>
                </div>
            </div>
        </div>
    )
}

export default Ingredients