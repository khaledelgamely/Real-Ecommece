import React from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import "../styles/heroSection.css"

const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <div className="welcomeStore">
                <p className='fs-1 text-center'>WELCOME TO OUR STORE</p>
                <p className='heroDescription text-center fs-5 w-50 m-auto'> The self care brand that's setting a new standard. Natural products, to help
                    you feel good in your own body. </p>
            </div>

            <div className="herSec">
                <div className='heroSecHold '>
                    <img src={one} className=" w-20" alt=''/>
                    <div className="heroSecHoldInfo">
                        <p className='mb-2 fw-semibold fs-5'> Powered By Nature </p>
                        <p> Aliquam venenatis vel lorem id <br /> nuaer mollis eget. </p>
                    </div>
                </div>

                <div className='heroSecHold'>
                    <img src={two} className=" w-20" alt=''/>
                    <div className="heroSecHoldInfo">
                    <p className='mb-2 fw-semibold fs-5'> Skin First Formulas </p>
                        <p> Nulla tincidunt gravida augue, eget <br /> pellentesque. </p>
                    </div>
                </div>

                <div className='heroSecHold'>
                    <img src={three} className=" w-20" alt=''/>
                    <div className="heroSecHoldInfo mb-3">
                        <p className='mb-2 fw-semibold fs-5'> Exceptional Quality </p>
                        <p> Aliquam sed diam fringilla, loborti <br /> sorci nec </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection