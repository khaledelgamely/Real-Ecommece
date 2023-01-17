import React from 'react'
import { store } from "../productsStore/Store"
import "../styles/bestseller.css"
import { Link } from 'react-router-dom';

const BestSellers = () => {
  return (
    <div className='bestseller'>
      {store && store.map((item) => {
        if (item.type === "bestSeller")
          return (
            <Link to={`/${item.id}`} key={item.id}>
              <div className="cart">
                <img src={item.primaryImage} alt="" />
                <img src={item.hoverImg} alt="" className='hovered' />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          )
      })}
    </div>
  )
}

export default BestSellers