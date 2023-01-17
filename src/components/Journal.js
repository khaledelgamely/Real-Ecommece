import React from 'react'
import "../styles/journal.css"
// import "../styles/under20.css"
import { Link } from 'react-router-dom'

const Journal = () => {
    return (
        <div className='journal px-5'>
            <div className="journal-desc">
            <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992' alt='hey' className=' w-50' />
                <p className='my-4 text-center'>Discover the world of natural through our<br/>
                eyes! From skincare tips, lifestyle and<br/>
                environmental hacks to inspirational<br/>
                interviews! Explore it all.</p>
                <Link to="/journal/april">
                    <button className='readBtn'>READ THE JOURNAL</button>
                </Link>
            </div>
            <div className="Journal-examples">
                <div className="journal-cart-image">
                <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/400x400_blog_540x.jpg?v=1652511342' alt='hey' className='jsImg rounded-4' />
                    <p className='mt-2'>APRIL BLOG: PROTECTIVE HAIRCARE<br/>
                        STYLE AND TIPS</p>
                </div>
                <div className="journal-cart-image">
                <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/BBQ_1200x440_7b63676b-f505-4b21-9192-e1b43a53be32_540x.jpg?v=1625596357' alt='hey' className='jsImg rounded-4' />
                    <p className='mt-2'>SUKINS GUIDE TO A BACKYARD BBQ</p>
                </div>
            </div>
        </div>
    )
}

export default Journal