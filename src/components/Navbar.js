import React from 'react'
import "../styles/navbar.css"
import logo from "../assets/cara.png";
import { useState } from 'react';
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const { cart } = useSelector(state => state.cart)

    // console.log(...cart)

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    // const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        // setShow4(false)

    }

    const showHandler2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        // setShow4(false)

    }

    const showHandler3 = () => {
        setShow3(true)
        setShow(false)
        setShow2(false)
        // setShow4(false)
    }

    // const showHandler4 = () => {
    //     setShow4(true)
    //     setShow(false)
    //     setShow2(false)
    //     setShow3(false)

    // }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        // setShow4(false)


    }

    return (
        <div>

            <header className="banner" role="banner">

                <nav className='navbar'>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className='menuNav'>
                        <li className='dropdown nav-link' onMouseOver={showHandler}>BEST SELLERS
                            {show && <ul className='dropdown-nav nav1' onMouseLeave={dontShowHandler}>
                                <BestSellers />
                            </ul>
                            }
                        </li>
                        <li className='dropdown nav-link' onMouseOver={showHandler2}>GIFT SETS
                            {show2 &&
                                <ul className='dropdown-nav nav2' onMouseLeave={dontShowHandler}>
                                    <GiftSets />
                                </ul>
                            }
                        </li>
                        <li className='dropdown nav-link' onMouseOver={showHandler3}>SHOP RANGE
                            {show3 &&
                                <ul className='dropdown-nav nav3' onMouseLeave={dontShowHandler}>
                                    <Body />
                                </ul>
                            }
                        </li>
                    </ul>
                    <Link to="/cart" className='cart-div'>
                        <span className={cart.length > 0 && "cart-cir"}>{cart.length > 0 && cart.length}</span>
                        <FaShoppingBag className='cart-icon' />
                    </Link>
                </nav>


            </header >

        </div >
    )
}

export default NavBar