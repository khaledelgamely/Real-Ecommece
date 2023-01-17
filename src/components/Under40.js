import React from 'react'
import photo from "../assets/u20bg.png"
import GiftSubComps from './GiftSubComps'
import { Breadcrumb, } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Under40 = () => {
  return (
    <div>
      <div className="category-type">
        <img src={photo} alt="" />
        <div className="category-desc">
          <h1 className="mb-5 ">UNDER 40$</h1>
          <div>Shop Sukin natural and vegan collection of skincare and hair care gifts under $40.</div>
          </div>
          <Breadcrumb>
                    <Link to="/">Home</Link>
                    <ChevronRightIcon />
                    <Link to="/under40" >Under 40</Link>
          </Breadcrumb>
      </div>
      <GiftSubComps />
    </div>
  )
}

export default Under40