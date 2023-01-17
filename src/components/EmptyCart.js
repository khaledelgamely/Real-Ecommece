import React from 'react'
import cartGif from "../assets/cartGif.gif";


const EmptyCart = () => {
    return (
        <div className=' emptyCartMainParent'>
                <p className ='mt-5 fs-1 fw-800 text-center'>CART IS EMPTY MAYBE ORDER SOMETHING :)</p>
                <img src={cartGif} className="cg" alt=''/>
        </div>
    )
}

export default EmptyCart