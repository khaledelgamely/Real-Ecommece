import React from 'react'
import GiftSubComps from './GiftSubComps'
import photo from "../assets/u20bg.png"
import { Breadcrumb, } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ForHer = () => {
  return (
    <div>
    <div className="category-type">
                <img src={photo} alt="" />
                <div className="category-desc">
                    <h1 className="mb-5 ">FOR HER</h1>
                    <div>Shop Sukin natural and vegan collection of skincare and hair care gifts for her.</div>
                </div>
            </div>
            <Breadcrumb className='breadCrumb'>
                <Link to="/">Home</Link>
                <ChevronRightIcon />
                <Link to="/forHer" >For Her</Link>
            </Breadcrumb>
            <GiftSubComps />
    </div>
  )
}

export default ForHer