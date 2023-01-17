import React from 'react'
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";




const CartAdditionalFeatures = () => {
    return (
        <div className='paymentIconHold'>
            <FaCcVisa className=' w-96 h-44' />
            <FaCcPaypal className=' w-96 h-44' />
            <FaCcMastercard className=' w-96 h-44' />
            <FaCcStripe className=' w-96 h-44' />
        </div>
    )
}

export default CartAdditionalFeatures