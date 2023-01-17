import React, { useState } from 'react'
// import "../App"
import "../styles/body.css"
import { Link } from 'react-router-dom'
import { store } from "../productsStore/Store"


const Body = () => {

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const showHandler1 = () => {
    setShow(true)
    document.querySelector(".bodyContent").classList.add("transition");
    setShow2(false)
    setShow3(false)
    setShow4(false)

  }

  const showHandler2 = () => {
    setShow2(true)
    document.querySelector(".hairContent").classList.add("transition2");

    setShow(false)
    setShow3(false)
    setShow4(false)
  }

  const showHandler3 = () => {
    setShow3(true)
    document.querySelector(".travelContent").classList.add("transition3");

    setShow(false)
    setShow2(false)
    setShow4(false)

  }
  const showHandler4 = () => {
    setShow4(true)
    document.querySelector(".newContent").classList.add("transition4");
    setShow(false)
    setShow2(false)
    setShow3(false)

  }


  const dontShowHandler = () => {
    setShow(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)


  }

  return (
    <div className='body mt-5'>
      <div className="categoryHold ">
        <div className="bodyHold" onMouseMove={showHandler1}><p
          className='fe hover-underline-animation '>BODY</p></div>
        <div className="hairHold" onMouseMove={showHandler2}><p
          className='fe hover-underline-animation '>HAIR</p></div>
        <div className="travelHold" onMouseMove={showHandler3}><p
          className='fe hover-underline-animation '>TRAVEL</p></div>
        <div className="newHold" onMouseMove={showHandler4}><p
          className='fe hover-underline-animation '>NEW</p></div>
      </div>
      {show &&
        <div className="bodyContent bNd" onMouseLeave={dontShowHandler}>

          <div className="bodyAndHand mx-3">
            <p>BODY WASH</p>
            <p>BODY SCRUB</p>
            <p>BODY LOTIONS</p>
            <p>BODY OIL</p>
            <p>HAND WASH</p>
            <p>HAND CREAMS</p>
          </div>

          <div className="bodyTypeHold mb-3">
            {store?.map((item) => {
              if (item.type === "navbar-BodyType") {
                return (
                  <Link to={`/${item.id}`} key={item.id}>
                    <div key={item.id} className="cart bodyTypeIndividual">
                      <img src={item.primaryImage} alt="" />
                      <img src={item.hoverImg} alt="" className='hovered' />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      }
      {show2 &&
        <div className="hairContent bNd" onMouseLeave={dontShowHandler}>

          <div className="hairCategory">
            <p>CATEGORY</p>
            <p>SHAMPOOS</p>
            <p>CONDITIONERS</p>
            <p>TREATMENTS</p>
          </div>
          <div className="hairState">
            <p>HAIR CONCERN</p>
            <p>DEEP CLEANSE</p>
            <p>OILY</p>
            <p>DRY</p>
            <p>VOLUME</p>
            <p>NORMAL</p>
          </div>

          <div className='hairImageHold '>

            <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/Natural_Balance_Shampoo_02_540x.jpg?v=1550710011' alt='' className=' rounded-xl w-52' />
            <p >Make The Switch! Why Natural Haircare Is Best</p>
          </div>

          <div className='hairImageHold'>
            <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/ee7ea9c87918e493665a3a84bdf6c00a_large_1b25100f-7d60-451b-9d01-e74d104141d5_540x.jpg?v=1550710009' alt='' className=' rounded-xl w-52' />
            <p >How to lead a natural & sustainable lifestyle</p>
          </div>

        </div>
      }
      {show3 && <div className='z-50 travelContent' onMouseLeave={dontShowHandler}>
        <div className='flex flex-row'>
          <div className='TravelStoreHold'>
            {store.map((item) => {
              if (item.type === "navbar-TravelType") {
                return (
                  <Link to={`/${item.id}`} key={item.id}>

                    <div key={item.id} className="cart TravelIndividual">
                      <img src={item.primaryImage} alt="" />
                      <img src={item.hoverImg} alt="" className='hovered' />
                      <p className='my-2 fs-6'> {item.name} </p>
                      <p className=''> ${item.price} </p>
                    </div>
                  </Link>
                )
              }
            })}
          </div>

        </div>
      </div>}

      {show4 && <div className='newContent' onMouseLeave={dontShowHandler}>
        <div className='newCategoryHold '>
          <p className='font-weight-bold'>  CATEGORY </p>

          <p>  Brightening Range </p>

          <p>  Facial Masks </p>

          <p>  Rosehip Range </p>

          <p>  Shop All New Arrivals </p>
        </div>
        <div className='newTypeHold'>
          {store.map((item) => {
            if (item.type === "navbar-NewType") {
              return (
                <Link to={`/${item.id}`} key={item.id}>

                  <div className='cart newIndividual'>
                    <img src={item.primaryImage} alt="" />
                    <img src={item.hoverImg} alt="" className='hovered' />
                    <p className='m-1 text-center'> {item.name} </p>
                    <p className='text-center'> ${item.price} </p>
                  </div>
                </Link>
              )
            }
          })}
        </div>

      </div>}
    </div>
  )
}

export default Body