import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "../styles/FollowUs.css";
import { store } from '../productsStore/Store';
import "react-alice-carousel/lib/alice-carousel.css";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import { ExternalLink } from 'react-external-link';

const FollowUs = () => {
    const responsive = {
        2000: {
          items: 11,
        },
        1600: {
          items: 6
        },
        1200: {
          items: 5,
        },
        780: {
          items: 3,
        },
        500: {
          items: 2,
        },
      };
    
      return (
        <div className='followHold'>
          <p className='text-center fs-1 fw-semibold my-5'> FOLLOW US ON INSTAGRAM </p>
    
          <AliceCarousel autoPlay={true} infinite={true} responsive={responsive} autoPlayInterval={1000} disableButtonsControls={true} disableDotsControls={true} >
    
            <ExternalLink href='https://www.instagram.com/reel/Ck6akcopA_F/' >
              <img src={i1} className='carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/Ck9DOsWLEdw/'>
            <img src={i2} className= 'carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/Ck_u9AjOJFh/'>
            <img src={i3} className=' carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src={i4} className=' carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/p/CkeOeuMvliW/'>
            <img src={i5} className='carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src={i6} className='carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src={i7} className=' carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/CkjTteAMPaZ/'>
            <img src={i8} className=' carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/CklzQFcJW9a/'>
            <img src={i9} className=' w-60 rounded-2xl  mrMl carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/CkwQD6KO1WP/'>
            <img src={i10} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
            </ExternalLink>
    
            <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src={i11} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
            </ExternalLink>
    
    
    
          </AliceCarousel >
    
        </div>
    
    
    
      )
    }
    
export default FollowUs;