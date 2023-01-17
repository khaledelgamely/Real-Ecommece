import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri"
import { cartActions } from "../redux/redux-store"
import CartAdditionalFeatures from './CartAdditionalFeatures ';
import Feature2 from './Feature2';
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const CartDetails = () => {

    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const getTotalPrice = cart.reduce((acc, product) => {
        acc += product.totalPrice
        return acc
    }, 0)
    return (
        <div>
            {cart.length === 3 ?
                <div className="cartContainer threeItemsCart">
                    <div>
                        <div className="cartAddress mt-3">
                            <p className=" my-3 fw-bolder fs-4">YOUR CART</p>
                            <p className=" my-3 fw-medium fs-4">{cart.length} Items</p>
                        </div>


                        {cart.map(product => (
                            <div className="cartItems">
                                <div className="cartItem">
                                    <img src={product.primaryImage} alt="" className='cartImg' />
                                    <div className="cartItemsDetails">
                                        <p className='fw-bold'>{product.name}</p>
                                        <p className='fs-3'>{product.price}$</p>
                                        <div className="qtyChangeHold">
                                            <RiSubtractFill className='fs-1 text-white' type="button" onClick={() => dispatch(cartActions.removeItemFromCart(product))} />
                                            <p className='fs-3'>{product.quantity}</p>
                                            <MdAdd className='fs-1' type="button" onClick={() => dispatch(cartActions.addToCart(product))} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="subtotal">
                        <div className="subShip ">
                            <div className="subtotalCount d-flex justify-content-between fw-800 fs-2">
                                <p className='subtotalCountTitle'>SubTotal</p>
                                <p className='subtotalCountNum'>{getTotalPrice}$</p>
                            </div>
                            <div className="shipping d-flex justify-content-between">
                                <p className="shipping">Shipping</p>
                                <p className="shippingPrice">30$</p>
                            </div>
                            <div className="taxes d-flex justify-content-between">
                                <p className="tax mb-4">INCL, TAX</p>
                                <p className="taxNum">15$</p>
                            </div>
                        </div>
                        <p className='text-center my-3 fs-4'>TOTAL : ${getTotalPrice + (20 + 15)}</p>

                        <div className='gPayBtnHold'>
                            <GooglePayButton className='gPayHold' environment='TEST' paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: "CARD",
                                        parameters: {
                                            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                            allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                                        },

                                        tokenizationSpecification: {
                                            type: "PAYMENT_GATEWAY",
                                            parameters: {
                                                gateway: "example",
                                                gatewayMerchantId: "exampleGatewayMerchantId",


                                            },
                                        },

                                    },
                                ],
                                merchantInfo: {
                                    merchantId: "17613812255336763067",
                                    merchantName: "Demo Only"
                                },

                                transactionInfo: {

                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: "Total",
                                    totalPrice: "500",
                                    currencyCode: "USD",
                                    countryCode: "US",
                                },
                            }}
                                onLoadPaymentData={paymentData => {
                                    console.log(paymentData.paymentMethodData);
                                }} />
                        </div>

                        <div className='paypalHold my-2'>
                            <PayPalScriptProvider>
                                <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: "100",
                                                },
                                            },
                                        ],
                                    });
                                }}>

                                </PayPalButtons>
                            </PayPalScriptProvider>
                        </div>

                        {cart.length > 1 ? <div className=''>

                            <p className='secretlyCheckout'> SECURELY CHCECKOUT WITH </p>

                            <CartAdditionalFeatures />
                            {cart.length > 2 ? <Feature2 /> : ""}
                        </div>
                            :
                            ""
                        }
                    </div>
                </div>
                :
                cart.length === 2 ?
                    <div className="cartContainer mobDisappear">
                        <div>
                            <div className="cartAddress mt-3">
                                <p className=" my-3 fw-bolder fs-4">YOUR CART</p>
                                <p className=" my-3 fw-medium fs-4">{cart.length} Items</p>
                            </div>


                            {cart.map(product => (

                                <div className="cartItems">
                                    <div className="cartItem">
                                        <img src={product.primaryImage} alt="" className='cartImg' />
                                        <div className="cartItemsDetails">
                                            <p className='fw-bold'>{product.name}</p>
                                            <p className='fs-3'>{product.price}$</p>
                                            <div className="qtyChangeHold">
                                                <RiSubtractFill className='fs-1 text-white' type="button" onClick={() => dispatch(cartActions.removeItemFromCart(product))} />
                                                <p className='fs-3'>{product.quantity}</p>
                                                <MdAdd className='fs-1' type="button" onClick={() => dispatch(cartActions.addToCart(product))} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className="subtotal">
                            <div className="subShip ">
                                <div className="subtotalCount d-flex justify-content-between fw-800 fs-2">
                                    <p className='subtotalCountTitle'>SubTotal</p>
                                    <p className='subtotalCountNum'>{getTotalPrice}$</p>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <p className="shipping">Shipping</p>
                                    <p className="shippingPrice">30$</p>
                                </div>
                                <div className="taxes d-flex justify-content-between">
                                    <p className="tax mb-4">INCL, TAX</p>
                                    <p className="taxNum">15$</p>
                                </div>
                            </div>
                            <p className='text-center my-3 fs-4'>TOTAL : ${getTotalPrice + (20 + 15)}</p>
                            <div className='gPayBtnHold flex justify-center'>


                                <GooglePayButton className='gPayHold' environment='TEST' paymentRequest={{
                                    apiVersion: 2,
                                    apiVersionMinor: 0,
                                    allowedPaymentMethods: [
                                        {
                                            type: "CARD",
                                            parameters: {
                                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                                allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                                            },

                                            tokenizationSpecification: {
                                                type: "PAYMENT_GATEWAY",
                                                parameters: {
                                                    gateway: "example",
                                                    gatewayMerchantId: "exampleGatewayMerchantId",


                                                },
                                            },

                                        },
                                    ],
                                    merchantInfo: {
                                        merchantId: "17613812255336763067",
                                        merchantName: "Demo Only"
                                    },

                                    transactionInfo: {

                                        totalPriceStatus: 'FINAL',
                                        totalPriceLabel: "Total",
                                        totalPrice: "500",
                                        currencyCode: "USD",
                                        countryCode: "US",
                                    },
                                }}
                                    onLoadPaymentData={paymentData => {
                                        console.log(paymentData.paymentMethodData);
                                    }}

                                />
                            </div>

                            <div className='paypalHold my-2'>
                                <PayPalScriptProvider>
                                    <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "100",
                                                    },
                                                },
                                            ],
                                        });
                                    }}>

                                    </PayPalButtons>
                                </PayPalScriptProvider>
                            </div>

                            {cart.length > 1 ? <div className=''>

                                <p className='secretlyCheckout'> SECURELY CHCECKOUT WITH </p>

                                <CartAdditionalFeatures />
                                {cart.length > 2 ? <Feature2 /> : ""}
                            </div>
                                :
                                ""
                            }
                        </div>

                    </div>
                    :
                    <div className="cartContainer">
                        <div>
                            <div className="cartAddress mt-3">
                                <p className=" my-3 fw-bolder fs-4">YOUR CART</p>
                                <p className=" my-3 fw-medium fs-4">{cart.length} Items</p>
                            </div>


                            {cart.map(product => (
                                <div className="cartItems">
                                    <div className="cartItem">
                                        <img src={product.primaryImage} alt="" className='cartImg' />
                                        <div className="cartItemsDetails">
                                            <p className='fw-bold'>{product.name}</p>
                                            <p className='fs-3'>{product.price}$</p>
                                            <div className="qtyChangeHold">
                                                <RiSubtractFill className='fs-1 text-white' type="button" onClick={() => dispatch(cartActions.removeItemFromCart(product))} />
                                                <p className='fs-3'>{product.quantity}</p>
                                                <MdAdd className='fs-1' type="button" onClick={() => dispatch(cartActions.addToCart(product))} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="subtotal">
                            <div className="subShip ">
                                <div className="subtotalCount d-flex justify-content-between fw-800 fs-2">
                                    <p className='subtotalCountTitle'>SubTotal</p>
                                    <p className='subtotalCountNum'>{getTotalPrice}$</p>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <p className="shipping">Shipping</p>
                                    <p className="shippingPrice">30$</p>
                                </div>
                                <div className="taxes d-flex justify-content-between">
                                    <p className="tax mb-4">INCL, TAX</p>
                                    <p className="taxNum">15$</p>
                                </div>
                            </div>
                            <p className='text-center my-3 fs-4'>TOTAL : ${getTotalPrice + (20 + 15)}</p>

                            <div className='gPayBtnHold'>
                                <GooglePayButton className='gPayHold' environment='TEST' paymentRequest={{
                                    apiVersion: 2,
                                    apiVersionMinor: 0,
                                    allowedPaymentMethods: [
                                        {
                                            type: "CARD",
                                            parameters: {
                                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                                allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                                            },

                                            tokenizationSpecification: {
                                                type: "PAYMENT_GATEWAY",
                                                parameters: {
                                                    gateway: "example",
                                                    gatewayMerchantId: "exampleGatewayMerchantId",


                                                },
                                            },

                                        },
                                    ],
                                    merchantInfo: {
                                        merchantId: "17613812255336763067",
                                        merchantName: "Demo Only"
                                    },

                                    transactionInfo: {

                                        totalPriceStatus: 'FINAL',
                                        totalPriceLabel: "Total",
                                        totalPrice: "500",
                                        currencyCode: "USD",
                                        countryCode: "US",
                                    },
                                }}
                                    onLoadPaymentData={paymentData => {
                                        console.log(paymentData.paymentMethodData);
                                    }} />
                            </div>

                            <div className='paypalHold my-2'>
                                <PayPalScriptProvider>
                                    <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "100",
                                                    },
                                                },
                                            ],
                                        });
                                    }}>

                                    </PayPalButtons>
                                </PayPalScriptProvider>
                            </div>

                            {cart.length > 1 ? <div className=''>

                                <p className='secretlyCheckout'> SECURELY CHCECKOUT WITH </p>

                                <CartAdditionalFeatures />
                                {cart.length > 2 ? <Feature2 /> : ""}
                            </div>
                                :
                                ""
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default CartDetails