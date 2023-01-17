import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { store } from "../productsStore/Store"
import "../styles/singlePage.css"
import SinglePageFAQ from './SinglePageFAQ'
import { AiFillStar } from "react-icons/ai";
import AutoPlayMethods from './AutoPlayMethods'
import Review from './Review'
import SearchBox from './SearchBox';
import Journal from './Journal';
import FeaturesHold from './FeaturesHold'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { cartActions } from "../redux/redux-store"

const SinglePage = () => {

    const params = useParams();
    const { id } = params

    const productClicked = store.find((item) => item.id === id)
    var { name, price, primaryImage, hoverImg } = productClicked;


    const [activeImg, SetActiveImg] = useState(primaryImage);
    const [imgChange, SetImgChange] = useState(false);

    const imgSrcTarget = (e) => {
        SetActiveImg(e.target.src)
        SetImgChange(true)
    }
    const defaultImg = () => {
        SetActiveImg(primaryImage)
        SetImgChange(false)
    }

    const dispatch = useDispatch()

    let numOfRev = Math.floor(Math.random() * (4 - 4 + 1)) + 4;
    let reviews = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    return (
        <div >
            <Breadcrumb className='bgGrey h-14 sinLih' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                <Link to='/'>
                <BreadcrumbLink>Home</BreadcrumbLink>
                </Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to='/OurBestSellers'>
                        <BreadcrumbLink >Products</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            {/*------------------------------------- */}
            <div className="singlePageMainPicHold">
                <div className="singleImgContainer">
                    <div className="upperMixPageMainPic">
                        <div className="singlePageMainPic">
                            <img src={hoverImg} alt="" className='sm' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImg} />
                            <img onMouseEnter={imgSrcTarget} onMouseLeave={defaultImg} src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/NO_Lists_for_Site-SIG_21bc4fd3-c2b5-4e21-8244-1f0f61cce160_540x.png?v=1599504641' alt="" className='sm' />
                        </div>
                        <div className="singlePageMainPic">
                            {imgChange ? <img className='lg rounded-4' src={activeImg} alt="" /> : <img className='lg rounded-4' src={primaryImage} alt="" />}
                        </div>
                    </div>
                    <div className="underMixPageMainPic">
                        <img onMouseEnter={imgSrcTarget} onMouseLeave={defaultImg} className='md' src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_image_720x.jpg?v=1599504641' alt="" />
                        <img onMouseEnter={imgSrcTarget} onMouseLeave={defaultImg} className='md' src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_quote-1_720x.jpg?v=1599504641' alt="" />
                    </div>
                </div>

                <div className='accordion'>
                    <div className='namePriceSP'>
                        <p className='fw-bold fs-4 text-center'> {name} </p>
                        <p className='text-center fs-4 my-3'> ${price} </p>
                    </div>
                    
                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                        <div className='d-flex align-items-center gap-2'>
                            {numOfRev === 1 ? <div className='d-flex'>  <AiFillStar /> </div> : ""}
                            {numOfRev === 2 ? <div className='d-flex'> <AiFillStar /> <AiFillStar />  </div> : ""}
                            {numOfRev === 3 ? <div className='d-flex'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                            {numOfRev === 4 ? <div className='d-flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                            {numOfRev === 5 ? <div className='d-flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}

                            <p className='font-semibold l1rem'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviewes </p>
                        </div>
                        <p className='fw-bold'> YOU CAN EARN 50 LOAYLTY POINTS </p>
                        <div className='spBtnHold'>
                            <button className='spAddTOCart' onClick={() => dispatch(cartActions.addToCart(productClicked))}> ADD TO CART </button>
                        </div>
                    </div>
                    <SinglePageFAQ />
                </div>
                {/*------------------------------------- */}
            </div>
            <AutoPlayMethods />
            <Review starCalc={numOfRev} rev={reviews} />
            <SearchBox />
            <Journal />
            <FeaturesHold />
            <Footer />
        </div>
    )
}

export default SinglePage