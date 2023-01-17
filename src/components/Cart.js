
import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/cart.css"
import EmptyCart from './EmptyCart';
import AutoPlayMethods from './AutoPlayMethods';
import CartPageFaq from './CartPageFaq';
import Footer from './Footer';
import CartDetails from './CartDetails';


const Cart = () => {

    const { cart } = useSelector(state => state.cart)


    return (
        <div>
            {cart.length < 1 ?
                 <EmptyCart />
                  :
                <div>
                    <CartDetails />
                    <AutoPlayMethods />
                    <CartPageFaq />
                    <Footer />
                </div>
            }

        </div>


    )
}

export default Cart