import React from 'react'
import { Link } from 'react-router-dom'
import { store } from "../productsStore/Store"
import "../styles/giftSets.css"


const GiftSets = () => {
  return (
    <div className='giftSets'>
      <div className="category">
        <p className='category-title'>category</p>
        <Link to="/under20" className='p-20'>
          <p className="underline"> Under $20 </p>
        </Link>
        <Link to="/under40">
          <p className="underline"> Under $40 </p>
        </Link>
        <Link to="/forHer">
          <p className="underline"> For Her </p>
        </Link>
        <Link to="/forHim">
          <p className="underline"> For Him </p>
        </Link>
      </div>
      <div className="products">
        <div className='giftProducts'>
          {store.map((item) => {
            if (item.type === "gift") {
             return(
                <Link to={`/${item.id}`} key={item.id}>
                  <div key={item.id} className="cart">
                    <img src={item.primaryImage} alt="" />
                    <img src={item.hoverImg} alt="" className='hovered' />
                    <p >{item.name} </p>
                    <p >${item.price} </p>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default GiftSets