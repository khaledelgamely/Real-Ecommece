import React from 'react'
import GiftSubComps from './GiftSubComps'
import photo from "../assets/u20bg.png"
import { Breadcrumb, } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ForHim = () => {
  return (
    <div>
    <div className="category-type">
                <img src={photo} alt="" />
                <div className="category-desc">
                    <h1 className="mb-5 ">UNDER FOR HIM</h1>
                    <div>Shop Sukin natural and vegan collection of skincare and hair care gifts for him.</div>
                </div>
            </div>
            <Breadcrumb className='breadCrumb'>
                <Link to="/">Home</Link>
                <ChevronRightIcon />
                <Link to="/forHim" >For Him</Link>
            </Breadcrumb>
            <GiftSubComps />
    </div>
  )
}

export default ForHim