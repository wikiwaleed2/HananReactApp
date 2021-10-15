import React, { useEffect, useState } from 'react';
// import { accountService } from '@/_services';
import Slider from 'react-slick';
import bottle from '../../_assets/images/bottle.png';
import shareIcon from '../../_assets/images/social-share.png';
import arrowIcon from '../../_assets/images/arrow-icon.svg';


function SilderComponent() {
    const [slideCounter, setSlideCounter] = useState('01');
    const [isPlaying, setIsPlaying] = useState(false);
    const [animateCounter, setAnimateCounter] = useState(true);
    const [soldCount, setSoldCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    let calculateSlideCounter = (currentSlide) => {
        // console.log(e, slick, currentSlide);
        let counter = currentSlide + 1;
        setSlideCounter('0' + counter)
    }

    let playVideo = (id) => {
        let video = document.getElementById(id);
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    }

    let startCount = (value) => {
        console.log(value);
        setAnimateCounter(value);
        if (!value) {

            let current = 1;
            var startTime = new Date().getTime();
            let counter = setInterval(() => {
                current++;
                // Update the contents of the element
                setSoldCount(current)
                if (current === 20) {
                    setAnimateCounter(true);
                    clearInterval(counter);
                    return;
                }

                // if(new Date().getTime() - startTime > 2000){
                //     // setSoldCount(20)
                //     setAnimateCounter(true);
                //     clearInterval(counter);
                //     return;
                // }


                console.log(current);
                // return current;
            }, 300  );

            // return current;
        }

        // return () => {
        //     clearInterval(counter);
        // };
    }
    return (

        <section className="other sliderStyle1">

        <div className="container-fluid">

            <div className="card-head static-card-header">

                <h1 className="headingStyle5 font-fancy">win</h1>

                <div className="box">

                    <h5 className="sold-items">1</h5>

                    <p>SOLD</p>

                    <p>OUT OF</p>

                    <h5 className="total-items">60</h5>

                </div>

            </div>



            <div className="other-compaigns container">

                {(() => {

                    let settings = {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: false,
                        // arrows: false,
                        nextArrow: <span className="arrow-next other-compaigns-arrow-next"><img src={arrowIcon} alt="" /></span>,
                        prevArrow: <span className="arrow-prev other-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></span>,
                        dots: false,
                        responsive: [
                            {
                                breakpoint: 1501,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    arrows: true,
                                    // prevArrow: '.h-prev',
                                    // nextArrow: '.h-next',
                                    dots: false,
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    arrows: false,
                                    dots: false
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: true,
                                    centerPadding: '15%',
                                    slidesToScroll: 1,
                                    arrows: false,
                                    // prevArrow: '.h-prev',
                                    // nextArrow: '.h-next',
                                    dots: false,
                                }
                            }


                        ]
                    }

                    return (
                        <Slider {...settings}>

                            <div>
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy" >win</h1>

                                        <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div>

                                    </div>

                                    <div className="card-img">

                                        <div className="campaigns-card-overlay"></div>

                                        <div className="card-cnt">

                                            <h1>Maldives Trip</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Prize Details</a>

                                                <a href="#">Product Details</a>

                                            </div>

                                        </div>

                                        <div className="btl-img">

                                            <img src={bottle} alt="" />

                                        </div>

                                        <div className="card-icon">
                                            <img src={shareIcon} alt="" />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p className="buy-bottle">Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p className="small-text">Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy">win</h1>

                                        <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div>

                                    </div>

                                    <div className="card-img">

                                        <div className="campaigns-card-overlay"></div>

                                        <div className="card-cnt">

                                            <h1>Maldives Trip</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Prize Details</a>

                                                <a href="#">Product Details</a>

                                            </div>

                                        </div>

                                        <div className="btl-img">

                                            <img src={bottle} alt="" />

                                        </div>

                                        <div className="card-icon">
                                            <img src={shareIcon} alt="" />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p className="buy-bottle">Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p className="small-text">Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy">win</h1>

                                        <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div>

                                    </div>

                                    <div className="card-img">

                                        <div className="campaigns-card-overlay"></div>

                                        <div className="card-cnt">

                                            <h1>Maldives Trip</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Prize Details</a>

                                                <a href="#">Product Details</a>

                                            </div>

                                        </div>

                                        <div className="btl-img">

                                            <img src={bottle} alt="" />

                                        </div>

                                        <div className="card-icon">
                                            <img src={shareIcon} alt="" />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p className="buy-bottle">Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p className="small-text">Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy">win</h1>

                                        <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div>

                                    </div>

                                    <div className="card-img">

                                        <div className="campaigns-card-overlay"></div>

                                        <div className="card-cnt">

                                            <h1>Maldives Trip</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Prize Details</a>

                                                <a href="#">Product Details</a>

                                            </div>

                                        </div>

                                        <div className="btl-img">

                                            <img src={bottle} alt="" />

                                        </div>

                                        <div className="card-icon">
                                            <img src={shareIcon} alt="" />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p className="buy-bottle">Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p className="small-text">Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy">win</h1>

                                        <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div>

                                    </div>

                                    <div className="card-img">

                                        <div className="campaigns-card-overlay"></div>

                                        <div className="card-cnt">

                                            <h1>Maldives Trip</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Prize Details</a>

                                                <a href="#">Product Details</a>

                                            </div>

                                        </div>

                                        <div className="btl-img">

                                            <img src={bottle} alt="" />

                                        </div>

                                        <div className="card-icon">
                                            <img src={shareIcon} alt="" />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p className="buy-bottle">Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p className="small-text">Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>


                        </Slider>

                    );

                })()}

            </div>



            <div className="card-footer static-card-footer">

                <div>

                    <div>

                        <p>Buy a water Bottle</p>

                        <h3>AED 720.00</h3>

                    </div>

                    <a href="#" className="buy-now">Buy Now</a>

                </div>

                <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

            </div>



            {/* <div className="arrow-prev other-compaigns-arrow-prev">

                <img src={arrowIcon} alt="" />

            </div>

            <div className="arrow-next other-compaigns-arrow-next">

                <img src={arrowIcon} alt="" />

            </div> */}

        </div>

    </section>
    )
}

export {SilderComponent};
