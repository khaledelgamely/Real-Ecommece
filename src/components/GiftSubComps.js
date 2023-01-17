import React, { useState } from 'react'
import filterBtn from "../assets/filterBtn.png"
import "../styles/under20.css"
import { store } from "../productsStore/Store"
import { Link } from 'react-router-dom'
import Journal from './Journal'
import FeaturesHold from './FeaturesHold';
import Footer from './Footer';

const GiftSubComps = () => {

    const [showFilter, setShowFilter] = useState(false)
    const [showBodyLotion, setShowBodyLotion] = useState(false)
    const [showScrub, setShowScrub] = useState(false)
    const [showWash, setShowWash] = useState(false)
    const [showAll, setShowAll] = useState(true)

    const showFilterFn = () => {
        setShowFilter(!showFilter)
    }
    const getBodyLotion = () => {
        setShowBodyLotion(true)
        setShowScrub(false)
        setShowWash(false)
        setShowAll(false)
    }
    const getScrub = () => {
        setShowScrub(true)
        setShowBodyLotion(false)
        setShowWash(false)
        setShowAll(false)
    }
    const getWash = () => {
        setShowWash(true)
        setShowScrub(false)
        setShowBodyLotion(false)
        setShowAll(false)
    }
    const getAllProducts = () => {
        setShowWash(false)
        setShowScrub(false)
        setShowBodyLotion(false)
        setShowAll(true)
    }
  return (
    <div>
    <div className="u20BreadCrumbHold ">
    
    <div className="filterSortHold" >
        <img src={filterBtn} className="filter-btn" onClick={showFilterFn} alt = ""/>
        {showFilter && <div className=" py-1 boxSh  filter-category rounded-4"  >
            <p className='scale fil' onClick={getBodyLotion}>BODY LOTION</p>
            <p className='scale fil' onClick={getScrub}>BODY SCRUB</p>
            <p className='scale fil' onClick={getWash}>BODY WASH</p>
            <p className='scale fil' onClick={getAllProducts}>ALL PRODUCTS</p>
        </div>
        }
    </div>
    {showAll && <div className="products my-5">
        {store?.map((item) => {
            if (item.type.includes("all"))
                return (
                    <div className="card p-4 rounded-4 position-relative bs">
                        <img src={item.primaryImage} alt="" />
                        <img src={item.hoverImg} alt="" className='hoveredd ' />
                        <p className=" my-4 text-center">{item.name}</p>
                        <Link to={`/${item.id}`}>
                            <div className="card-actions kwon">
                                <button className="knmBtn">Know More</button>
                                <p className="">{item.price}$</p>
                            </div>
                        </Link>
                    </div>
                )
        })}
    </div>}
    {/*----------------------------*/}
    {showBodyLotion && <div className="products my-5">
        {store?.map((item) => {
            if (item.type.includes("bodyLotion"))
                return (
                    <div className="card p-4 rounded-4 position-relative bs">
                        <img src={item.primaryImage} alt="" />
                        <img src={item.hoverImg} alt="" className='hoveredd ' />
                        <p className=" my-4 text-center">{item.name}</p>
                        <Link to={`/${item.id}`}>
                            <div className="card-actions kwon">
                                <button className="knmBtn">Know More</button>
                                <p className="">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                )
        })}
    </div>}
    {/*----------------------------*/}
    {showScrub && <div className="products my-5">
        {store?.map((item) => {
            if (item.type.includes("bodyScrub"))
                return (
                    <div className="card p-4 rounded-4 position-relative bs">
                        <img src={item.primaryImage} alt="" />
                        <img src={item.hoverImg} alt="" className='hoveredd ' />
                        <p className=" my-4 text-center">{item.name}</p>
                        <Link to={`/${item.id}`}>
                            <div className="card-actions kwon">
                                <button className="knmBtn">Know More</button>
                                <p className="">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                )
        })}
    </div>}
    {/*----------------------------*/}
    {showWash && <div className="products my-5">
        {store?.map((item) => {
            if (item.type.includes("bodywash"))
                return (
                    <div className="card p-4 rounded-4 position-relative bs">
                        <img src={item.primaryImage} alt="" />
                        <img src={item.hoverImg} alt="" className='hoveredd ' />
                        <p className=" my-4 text-center">{item.name}</p>
                        <Link to={`/${item.id}`}>
                            <div className="card-actions kwon">
                                <button className="knmBtn">Know More</button>
                                <p className="">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                )
        })}
    </div>}
</div>

<Journal />
<FeaturesHold />
<Footer />
    
    </div>
  )
}

export default GiftSubComps