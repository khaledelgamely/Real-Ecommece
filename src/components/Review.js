import React from 'react'
import { AiFillStar } from "react-icons/ai";
import feel from "../assets/feel.png";


const Review = (props) => {

    const reviews = props.rev;
    const starCalc = props.starCalc;
    const oneDigit = Math.floor(Math.random() * 10);


    


    return (
        <div>

            <div className='starHold2 d-flex gap-4 justify-content-center align-items-center'>
                <p className="revSize"> {starCalc}.{oneDigit} </p>
                
                {starCalc === 1 ? <div className='d-flex fs-3'>  <AiFillStar /> </div> : ""}
                {starCalc === 2 ? <div className='d-flex fs-3'> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 3 ? <div className='d-flex fs-3'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 4 ? <div className='d-flex fs-3'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 5 ? <div className='d-flex fs-3'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                <p className='starLine2 fs-4'> {reviews} Reviews </p>
            </div>

            <div className='feelHold my-3'>
                <img src={feel} className="feelImg" alt = ""/>
            </div>
        </div>
    )
}

export default Review;