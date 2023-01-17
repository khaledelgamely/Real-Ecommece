import { Link } from "react-router-dom";
import { store } from "../productsStore/Store"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlayMethods extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div className="autoPlay my-5">
            <h1 className="youAlsoTitle">You Also May Like</h1>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {store.map((item) => {
                        if (item.type === "ourBestSellers") {
                            return (
                                <div key={item.id}>
                                <Link to={`/${item.id}`}>
                                    <img src={item.primaryImage} alt= ""/>
                                </Link>
                            </div>
                            )
                        }
                    })}
                </Slider>

            </div>
        );
    }
}