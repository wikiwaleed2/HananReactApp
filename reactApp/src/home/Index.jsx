import './index.less';
import React, { useEffect, useState } from 'react';
// import { accountService } from '@/_services';
import { Header } from '../_shared/header/index.jsx';
import sliderImg from '@/_assets/images/top-banner.svg';
import angleRight from '@/_assets/images/angle-double-right-solid.svg';
import angleLeft from '@/_assets/images/angle-double-left-solid.svg';
import twitterIcon from '@/_assets/images/twitter-icon.svg';
import facebookIcon from '@/_assets/images/facebook-icon.svg';
import instaIcon from '@/_assets/images/instagram-icon.svg';
import prizeIcon from '@/_assets/images/order-confirmation.svg';
import couponIcon from '@/_assets/images/coupon-icon.svg';
import camIcon from '@/_assets/images/cam-icon.svg';
import separatorIcon from '@/_assets/images/separator.svg';
import appBanner from '@/_assets/images/app-banner-1.svg';
import topBanner from '@/_assets/images/top-banner-2.png';
import maldives from '@/_assets/images/four-seasons-landaa-giraavaru.png';
import bottle from '@/_assets/images/bottle.png';
import shareIcon from '@/_assets/images/social-share.png';
import cashAlt from '@/_assets/images/cash-alt.svg';
import calendar from '@/_assets/images/calendar.svg';
import arrowIcon from '@/_assets/images/arrow-icon.svg';
import playIcon from '@/_assets/images/play-solid.svg';
import pauseIcon from '@/_assets/images/pause-solid.svg';
import qouteIcon from '@/_assets/images/quote-left-solid.svg';
// import pic4 from '@/_assets/images/sample-pic-4.jpg';
import charity from '@/_assets/images/charity.jpg';
import chevronPrev from '@/_assets/images/chevron-left.svg';
import chevronNext from '@/_assets/images/chevron-right.svg';
import heart from '@/_assets/images/heart.svg';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import fb from '@/_assets/images/facebook-blue.png';
import insta from '@/_assets/images/insta-blue.png';
import linked from '@/_assets/images/linkedin-blue.png';
import twitter from '@/_assets/images/twitter-blue.png';
import dubaiEco from '@/_assets/images/dubai_eco.png';
import footerLogo from '@/_assets/images/footer-logo.svg';
import paymentOpt from '@/_assets/images/payment-opt.svg';
import appstore from '@/_assets/images/appstore-icons.png';
import playstore from '@/_assets/images/playstore-icons.png';
import Slider from 'react-slick';
import Wave from 'react-wavify';
import styled, { keyframes } from 'styled-components';
import { fadeOutUp } from 'react-animations';
import { getCookie, setCookie } from '../_services/cookies.service';

const fadeOutUpAnimation = keyframes`${fadeOutUp}`;
const FadeOutUpDiv = styled.div`animation: 0.5s ${fadeOutUpAnimation};`;

function Home() {
    // const user = accountService.userValue;

    const [slideCounter, setSlideCounter] = useState('01');
    const [isPlaying, setIsPlaying] = useState(false);
    const [animateCounter, setAnimateCounter] = useState(true);
    const [soldCount, setSoldCount] = useState(20);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let modal = getCookie("modal");
        if (!modal) {
            setCookie("modal", true, 7);
            setShowModal(true)
        }

    }, [])

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
            }, 300);

            // return current;
        }

        // return () => {
        //     clearInterval(counter);
        // };
    }

    return (
        <>

            <Header></Header>

            <section className="home-page">

                {(() => {

                    let settings = {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        arrows: false,
                        dots: true,
                        responsive: [
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: true,
                                    prevArrow: '.h-prev',
                                    nextArrow: '.h-next',
                                    dots: false,
                                }
                            }
                        ]
                    }

                    return (
                        <section className="carousel-section home-slider">

                            <div className="header-carousel" id="main-carousel">


                                <Slider afterChange={(currentSlide) => calculateSlideCounter(currentSlide)} settings={settings}>
                                    <div className="images ">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>
                                        {/* <img src={sliderImg} alt="" /> */}

                                        <div className="carousel-cnt">

                                            <h1>Maldives </h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Buy now</a>

                                                <a href="#">learn more</a>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="images">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>
                                        {/* <img src={sliderImg} alt="" /> */}

                                        <div className="carousel-cnt">

                                            <h1>Maldives</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Buy now</a>

                                                <a href="#">learn more</a>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="images">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>
                                        {/* <img src={sliderImg} alt="" /> */}

                                        <div className="carousel-cnt">

                                            <h1>Maldives</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <a href="#">Buy now</a>

                                                <a href="#">learn more</a>

                                            </div>

                                        </div>

                                    </div>
                                </Slider>

                            </div>



                            <div className="social-icons m-none">

                                <ul>

                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <img src={twitterIcon} />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src={facebookIcon} />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src={instaIcon} />
                                        </a>
                                    </li>

                                </ul>

                            </div>


                            <div className="slide-counter m-none">
                                <p id="currentslide">{slideCounter}</p>&nbsp;/&nbsp;
                                <p id="totalslides">03</p>

                            </div>

                            <div className="line m-none"></div>

                            <div className="h-prev">
                                <img src={angleLeft} />
                            </div>

                            <div className="h-next">
                                <img src={angleRight} />
                            </div>

                            <span className="m-block">
                                Swipe for more
                            </span>

                        </section>
                    );

                })()}

                {/* How it works */}
                <section id="how-it-works" className="">
                    <div className="works-item">
                        <div className="item-wrapper">
                            <img src={prizeIcon} />
                            <span className="text-box">
                                <h3 className="number-text">1.</h3>
                                <h3 className="para-text">
                                    SELECT THE PRIZE YOU<br />
                                    WANT TO WIN <br />
                                    <span>from our website</span>
                                </h3>
                            </span>
                        </div>
                        <div className="separator-icon">
                            <img src={separatorIcon} />
                        </div>

                    </div>
                    <div className="works-item">
                        <div className="item-wrapper">
                            <img src={couponIcon} />
                            <span className="text-box">
                                <h3 className="number-text">2.</h3>
                                <h3 className="para-text">
                                    BUY THE PRODUCT TO GET<br />
                                    COMPLIMENTARY ENTRY <br />
                                    <span>for a chance to win amazing prizes</span>
                                </h3>
                            </span>
                        </div>
                        <div className="separator-icon">
                            <img src={separatorIcon} />
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="item-wrapper">
                            <img src={camIcon} />
                            <span className="text-box">
                                <h3 className="number-text">3.</h3>
                                <h3 className="para-text">
                                    WAIT FOR LIVE DRAW<br />
                                    <span>winner will be announced <br />
                                        during live draw
                                    </span>
                                </h3>
                            </span>
                        </div>
                    </div>
                </section>


                <section className="ads-section-1">

                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-md-6 col-sm-12">

                                <div className="left-ad-1">

                                    <img src={appBanner} alt="" />

                                </div>

                            </div>

                            <div className="col-md-6 m-none">

                                <div className="right-ad-1 m-none">

                                    <img src={topBanner} alt="" />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="explore">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Explore Campaigns</h1>

                        {/* <!-- For Desktop --> */}

                        <div className="win-card m-none">

                            <h1 className="headingStyle2 m-none font-fancy">WIN</h1>

                            <div className="bckg">

                                <div className="row">

                                    <div className="col-sm-6">

                                        <div className="image">

                                            <img src={maldives} alt="" />


                                            <div className="bottel-img">

                                                <img src={bottle} alt="" />

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-sm-6">

                                        <div className="img-cnt">

                                            <div className="title-box">
                                                <h1 className="headingStyle3">Maldives Trip</h1>
                                                <p className="paraStyle1">
                                                    Mesmerizing Maldives With Sun Island
                                                </p>
                                            </div>

                                            <div className="price-box">
                                                <p className="paraStyle2">Buy a water Bottle and make it yours!</p>
                                                <h1 className="headingStyle4">AED 720.00</h1>
                                                <div className="btnStyle2">
                                                    <a href="#">Buy Now</a>
                                                    <a href="#">Prize Details</a>
                                                </div>
                                            </div>

                                            <div className="bottom-box">
                                                <p className="paraStyle3">Max draw date: December 02, 2021 or <br />when the campaign is sold out. Which ever is earlier.</p>

                                                <div className="icon">
                                                    <img src={shareIcon} />
                                                </div>

                                                <div className="details-banner">

                                                    <div className="misc-box">
                                                        <span>
                                                            <img src={couponIcon} alt="" />
                                                            <small>2 tickets<br />per entry</small>
                                                        </span>
                                                        <span>
                                                            <img src={cashAlt} alt="" />
                                                            <small>cash alternative<br />available</small>
                                                        </span>
                                                        <span>
                                                            <img src={calendar} alt="" />
                                                            <small>Aug 13, 7:05 PM</small>
                                                        </span>
                                                    </div>

                                                    <p className="paraStyle3">In partnership with DFRE</p>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="sold-counter" id="counter-1" onMouseEnter={() => startCount(false)}>
                                    <Wave fill='#eabe00'
                                        id=""
                                        paused={animateCounter}
                                        options={{
                                            height: 20,
                                            amplitude: 20,
                                            speed: 0.5,
                                            points: 1
                                        }}
                                    />
                                    <Wave fill='#ffcf00'
                                        paused={animateCounter}
                                        options={{
                                            height: 40,
                                            amplitude: 22,
                                            speed: 0.7,
                                            points: 1
                                        }}
                                    />

                                    <FadeOutUpDiv>
                                        <span className="sold-cnt">{soldCount}</span>
                                    </FadeOutUpDiv>


                                    <span className="text">Sold <br /> out of</span>

                                    <span className="total-cnt">60</span>
                                </div>

                                {/* <div className="progress-box">

                                    <span>1</span>

                                    <span className="text">Sold <br /> out of</span>

                                    <span>60</span>

                                </div> */}

                            </div>

                        </div>

                        <div className="win-card m-none">

                            <h1 className="headingStyle2 m-none font-fancy">WIN</h1>

                            <div className="bckg">

                                <div className="row">

                                    <div className="col-sm-6">

                                        <div className="image">

                                            <picture>

                                                <img src={maldives} alt="" />

                                            </picture>

                                            <div className="bottel-img">

                                                <img src={bottle} alt="" />

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-sm-6">

                                        <div className="img-cnt">

                                            <div className="title-box">
                                                <h1 className="headingStyle3">Maldives Trip</h1>
                                                <p className="paraStyle1">
                                                    Mesmerizing Maldives With Sun Island
                                                </p>
                                            </div>

                                            <div className="price-box">
                                                <p className="paraStyle2">Buy a water Bottle and make it yours!</p>
                                                <h1 className="headingStyle4">AED 720.00</h1>
                                                <div className="btnStyle2">
                                                    <a href="#">Buy Now</a>
                                                    <a href="#">Prize Details</a>
                                                </div>
                                            </div>

                                            <div className="bottom-box">
                                                <p className="paraStyle3">Max draw date: December 02, 2021 or <br />when the campaign is sold out. Which ever is earlier.</p>

                                                <div className="icon">
                                                    <img src={shareIcon} />
                                                </div>

                                                <div className="details-banner">

                                                    <div className="misc-box">
                                                        <span>
                                                            <img src={couponIcon} alt="" />
                                                            <small>2 tickets<br />per entry</small>
                                                        </span>
                                                        <span>
                                                            <img src={cashAlt} alt="" />
                                                            <small>cash alternative<br />available</small>
                                                        </span>
                                                        <span>
                                                            <img src={calendar} alt="" />
                                                            <small>Aug 13, 7:05 PM</small>
                                                        </span>
                                                    </div>

                                                    <p className="paraStyle3">In partnership with DFRE</p>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="progress-box">

                                    <span>1</span>

                                    <span className="text">Sold <br /> out of</span>

                                    <span>60</span>

                                </div>

                            </div>

                        </div>

                        <div className="win-card m-none">

                            <h1 className="headingStyle2 m-none font-fancy">WIN</h1>

                            <div className="bckg">

                                <div className="row">

                                    <div className="col-sm-6">

                                        <div className="image">

                                            <img src={maldives} alt="" />


                                            <div className="bottel-img">

                                                <img src={bottle} alt="" />

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-sm-6">

                                        <div className="img-cnt">

                                            <div className="title-box">
                                                <h1 className="headingStyle3">Maldives Trip</h1>
                                                <p className="paraStyle1">
                                                    Mesmerizing Maldives With Sun Island
                                                </p>
                                            </div>

                                            <div className="price-box">
                                                <p className="paraStyle2">Buy a water Bottle and make it yours!</p>
                                                <h1 className="headingStyle4">AED 720.00</h1>
                                                <div className="btnStyle2">
                                                    <a href="#">Buy Now</a>
                                                    <a href="#">Prize Details</a>
                                                </div>
                                            </div>

                                            <div className="bottom-box">
                                                <p className="paraStyle3">Max draw date: December 02, 2021 or <br />when the campaign is sold out. Which ever is earlier.</p>

                                                <div className="icon">
                                                    <img src={shareIcon} />
                                                </div>

                                                <div className="details-banner">

                                                    <div className="misc-box">
                                                        <span>
                                                            <img src={couponIcon} alt="" />
                                                            <small>2 tickets<br />per entry</small>
                                                        </span>
                                                        <span>
                                                            <img src={cashAlt} alt="" />
                                                            <small>cash alternative<br />available</small>
                                                        </span>
                                                        <span>
                                                            <img src={calendar} alt="" />
                                                            <small>Aug 13, 7:05 PM</small>
                                                        </span>
                                                    </div>

                                                    <p className="paraStyle3">In partnership with DFRE</p>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="progress-box">

                                    <span>1</span>

                                    <span className="text">Sold <br /> out of</span>

                                    <span>60</span>

                                </div>

                            </div>

                        </div>



                        {/* <!-- For Mobile --> */}

                        <div className="row m-block">
                            <div className="col-sm-12">
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5 font-fancy">win</h1>

                                        <div className="sold-counter-mobile" id="counter-1" onMouseEnter={() => startCount(false)}>
                                            <Wave fill='#eabe00'
                                                id=""
                                                paused={animateCounter}
                                                options={{
                                                    height: 20,
                                                    amplitude: 20,
                                                    speed: 0.5,
                                                    points: 1
                                                }}
                                            />
                                            <Wave fill='#ffcf00'
                                                paused={animateCounter}
                                                options={{
                                                    height: 40,
                                                    amplitude: 22,
                                                    speed: 0.7,
                                                    points: 1
                                                }}
                                            />

                                            {/* <FadeOutUpDiv> */}
                                            {/* <span className="sold-cnt">{soldCount}</span>
                                            </FadeOutUpDiv>


                                            <span className="text">Sold <br /> out of</span>

                                            <span className="total-cnt">60</span> */}

                                            <h5 className="sold-cnt">{soldCount}</h5>

                                            <p>SOLD <br />
                                                OUT OF
                                            </p>

                                            <h5 className="total-cnt">60</h5>
                                        </div>

                                        {/* <div className="box">

                                            <h5>1</h5>

                                            <p>SOLD</p>

                                            <p>OUT OF</p>

                                            <h5>60</h5>

                                        </div> */}

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
                                            <img src={shareIcon} />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p>Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p>Max draw date: December 02, 2021 or when the campaign 
                                            is sold out. Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12">
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
                                            <img src={shareIcon} />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p>Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p>Max draw date: December 02, 2021 or when the campaign 
                                            is sold out. Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12">
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
                                            <img src={shareIcon} />
                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <div>

                                            <div>

                                                <p>Buy a water Bottle</p>

                                                <h3>AED 720.00</h3>

                                            </div>

                                            <a href="#" className="buy-now">Buy Now</a>

                                        </div>

                                        <p>Max draw date: December 02, 2021 or when the campaign
                                            is sold out. Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>

                <section className="other sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Other Campaigns</h1>

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

                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>


                <section className="lifestyle sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Lifestyle Compaigns</h1>

                        <div className="card-head static-card-header">

                            <h1 className="headingStyle5 font-fancy">win</h1>

                            <div className="box">

                                <h5 className="sold-items">1</h5>

                                <p>SOLD</p>

                                <p>OUT OF</p>

                                <h5 className="total-items">60</h5>

                            </div>

                        </div>



                        <div className="lifestyle-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <span className="arrow-next lifestyle-compaigns-arrow-next"><img src={arrowIcon} alt="" /></span>,
                                    prevArrow: <span className="arrow-prev lifestyle-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></span>,
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
                                                slidesToScroll: 1,
                                                arrows: false,
                                                centerMode: true,
                                                centerPadding: '15%',
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


                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>

                <section className="trip sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Trip Campaigns</h1>

                        <div className="card-head static-card-header">

                            <h1 className="headingStyle5 font-fancy">win</h1>

                            <div className="box">

                                <h5 className="sold-items">1</h5>

                                <p>SOLD</p>

                                <p>OUT OF</p>

                                <h5 className="total-items">60</h5>

                            </div>

                        </div>



                        <div className="trip-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <span className="arrow-next trip-compaigns-arrow-next"><img src={arrowIcon} alt="" /></span>,
                                    prevArrow: <span className="arrow-prev trip-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></span>,
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
                                                slidesToScroll: 1,
                                                arrows: false,
                                                centerMode: true,
                                                centerPadding: '15%',
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


                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>

                <section className="sold-out sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Sold Out Campaigns</h1>

                        <div className="sold-out-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <span className="arrow-next sold-out-compaigns-arrow-next"><img src={arrowIcon} alt="" /></span>,
                                    prevArrow: <span className="arrow-prev sold-out-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></span>,
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
                                                slidesToScroll: 1,
                                                arrows: false,
                                                centerMode: true,
                                                centerPadding: '15%',
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

                                                <div className="card-img">

                                                    <div className="overlay"></div>

                                                    <div className="overlay-text">
                                                        <h3 >Sold Out</h3>
                                                    </div>

                                                    <div className="card-cnt">

                                                        <h1>Maldives Trip</h1>

                                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                                        {/* <div className="btnStyle3">

                                                            <a href="#">Prize Details</a>

                                                            <a href="#">Product Details</a>

                                                        </div> */}

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

                                                            <h6>Draw date</h6>

                                                            <h5>13 August 2021</h5>

                                                        </div>

                                                        {/* <a href="#" className="">View More</a> */}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div>
                                            <div className="card">

                                                <div className="card-img">

                                                    <div className="overlay"></div>
                                                    <div className="overlay-text">
                                                        <h3 >Sold Out</h3>
                                                    </div>

                                                    <div className="card-cnt">

                                                        <h1>Maldives Trip</h1>

                                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                                        {/* <div className="btnStyle3">

                                                            <a href="#">Prize Details</a>

                                                            <a href="#">Product Details</a>

                                                        </div> */}

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

                                                            <h6>Draw date</h6>

                                                            <h5>13 August 2021</h5>

                                                        </div>

                                                        {/* <a href="#" className="">View More</a> */}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="card">

                                                <div className="card-img">

                                                    <div className="overlay"></div>
                                                    <div className="overlay-text">
                                                        <h3 >Sold Out</h3>
                                                    </div>

                                                    <div className="card-cnt">

                                                        <h1>Maldives Trip</h1>

                                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                                        {/* <div className="btnStyle3">

                                                            <a href="#">Prize Details</a>

                                                            <a href="#">Product Details</a>

                                                        </div> */}

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

                                                            <h6>Draw date</h6>

                                                            <h5>13 August 2021</h5>

                                                        </div>

                                                        {/* <a href="#" className="">View More</a> */}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="card">

                                                <div className="card-img">

                                                    <div className="overlay"></div>
                                                    <div className="overlay-text">
                                                        <h3 >Sold Out</h3>
                                                    </div>

                                                    <div className="card-cnt">

                                                        <h1>Maldives Trip</h1>

                                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                                        {/* <div className="btnStyle3">

                                                            <a href="#">Prize Details</a>

                                                            <a href="#">Product Details</a>

                                                        </div> */}

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

                                                            <h6>Draw date</h6>

                                                            <h5>13 August 2021</h5>

                                                        </div>

                                                        {/* <a href="#">View More</a> */}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="card">

                                                <div className="card-img">

                                                    <div className="overlay"></div>

                                                    <div className="overlay-text">
                                                        <h3 >Sold Out</h3>
                                                    </div>

                                                    <div className="card-cnt">

                                                        <h1>Maldives Trip</h1>

                                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                                        {/* <div className="btnStyle3">

                                                            <a href="#">Prize Details</a>

                                                            <a href="#">Product Details</a>

                                                        </div> */}

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

                                                            <h6>Draw date</h6>

                                                            <h5>13 August 2021</h5>

                                                        </div>

                                                        {/* <a href="#">View More</a> */}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>




                                    </Slider>

                                );

                            })()}

                        </div>


                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>



                {/* <!-- Winner Testimonails --> */}

                <section className="testimonials-winners">

                    <div className="container-fluid">

                        <h1 className="headingStyle1 m-none">Testimonials & Winners</h1>

                        <h1 className="headingStyle1 m-block">Testimonials</h1>



                        <div className="testimonials container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <span className="arrow-next testimonials-carousel-next"><img src={arrowIcon} alt="" /></span>,
                                    prevArrow: <span className="arrow-prev testimonials-carousel-prev"><img src={arrowIcon} alt="" /></span>,
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

                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-1")} data-play-video="#testimonial-video-1">
                                                        <img src={pauseIcon} alt="video play button icon" className="pause d-none" />
                                                        <img src={playIcon} alt="video play button icon" className="play" />
                                                    </button>


                                                    <video loop id="testimonial-video-1">

                                                        <source src={dummyVideo} type="video/mp4" />

                                                    </video>

                                                </div>

                                                <div className="testimonial-cnt">

                                                    <div className="quote">

                                                        <img src={qouteIcon} alt="" />

                                                    </div>

                                                    <p>DREAM MAKERS you <br />guys are the best!<br /> You guys changed <br /> my life.</p>

                                                    <p>Peter Madison</p>

                                                    <p>PRO Driver in Dubai</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-2")} data-play-video="#testimonial-video-2">
                                                        <img src={pauseIcon} alt="video play button icon" className="pause d-none" />
                                                        <img src={playIcon} alt="video play button icon" className="play" />
                                                    </button>


                                                    <video loop id="testimonial-video-2">

                                                        <source src={dummyVideo} type="video/mp4" />

                                                    </video>

                                                </div>

                                                <div className="testimonial-cnt">

                                                    <div className="quote">

                                                        <img src={qouteIcon} alt="" />

                                                    </div>

                                                    <p>DREAM MAKERS you <br />guys are the best!<br /> You guys changed <br /> my life.</p>

                                                    <p>Peter Madison</p>

                                                    <p>PRO Driver in Dubai</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-3")} data-play-video="#testimonial-video-3">
                                                        <img src={pauseIcon} alt="video play button icon" className="pause d-none" />
                                                        <img src={playIcon} alt="video play button icon" className="play" />
                                                    </button>

                                                    <video loop id="testimonial-video-3">

                                                        <source src={dummyVideo} type="video/mp4" />

                                                    </video>

                                                </div>

                                                <div className="testimonial-cnt">

                                                    <div className="quote">

                                                        <img src={qouteIcon} alt="" />

                                                    </div>

                                                    <p>DREAM MAKERS you <br />guys are the best!<br /> You guys changed <br /> my life.</p>

                                                    <p>Peter Madison</p>

                                                    <p>PRO Driver in Dubai</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-4")} data-play-video="#testimonial-video-4">
                                                        <img src={pauseIcon} alt="video play button icon" className="pause d-none" />
                                                        <img src={playIcon} alt="video play button icon" className="play" />
                                                    </button>

                                                    <video loop id="testimonial-video-4">

                                                        <source src={dummyVideo} type="video/mp4" />

                                                    </video>

                                                </div>

                                                <div className="testimonial-cnt">

                                                    <div className="quote">

                                                        <img src={qouteIcon} alt="" />

                                                    </div>

                                                    <p>DREAM MAKERS you <br />guys are the best!<br /> You guys changed <br /> my life.</p>

                                                    <p>Peter Madison</p>

                                                    <p>PRO Driver in Dubai</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-5")} data-play-video="#testimonial-video-5">

                                                        <img src={pauseIcon} alt="video play button icon" className="pause d-none" />
                                                        <img src={playIcon} alt="video play button icon" className="play" />
                                                    </button>

                                                    <video loop id="testimonial-video-5">

                                                        <source src={dummyVideo} type="video/mp4" />

                                                    </video>

                                                </div>

                                                <div className="testimonial-cnt">

                                                    <div className="quote">

                                                        <img src={qouteIcon} alt="" />

                                                    </div>

                                                    <p>DREAM MAKERS you <br />guys are the best!<br /> You guys changed <br /> my life.</p>

                                                    <p>Peter Madison</p>

                                                    <p>PRO Driver in Dubai</p>

                                                </div>

                                            </div>

                                        </div>

                                    </Slider>

                                );

                            })()}

                        </div>

                    </div>


                    <div className="load-btn m-none">

                        <a href="#"><strong>+</strong> Load more</a>

                    </div>

                </section>

                {/* Charity Partners */}

                <section className="our-partner">

                    <div className="container-fluid">

                        <h1 className="headingStyle1 m-heading">Our Partner Charities</h1>

                        <div className="charities ">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <span className="arrow-next charity-next"><img src={chevronNext} alt="" /></span>,
                                    prevArrow: <span className="arrow-prev charity-prev"><img src={chevronPrev} alt="" /></span>,
                                    dots: false,
                                    responsive: [
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 1,
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

                                            <div className="image1">

                                                <img src={charity} alt="" />

                                                <div className="learn-more">

                                                    <a href="#">Learn more</a>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="image1">

                                                <img src={charity} alt="" />

                                                <div className="learn-more">

                                                    <a href="#">Learn more</a>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="image1">

                                                <img src={charity} alt="" />

                                                <div className="learn-more">

                                                    <a href="#">Learn more</a>

                                                </div>

                                            </div>

                                        </div>

                                    </Slider>

                                );

                            })()}

                        </div>

                        {/* <div className="prev-arrow">

                            <i className="fas fa-chevron-left"></i>

                        </div>

                        <div className="next-arrow">

                            <i className="fas fa-chevron-right"></i>

                        </div> */}

                    </div>

                </section>

                {/* NewsLetter */}

                <section className="forms">

                    <div className="container">

                        <div className="m-block m-img">

                            <img className="" src={appBanner} alt="" />

                        </div>

                        <div className="left text-center">

                            <h5>Get Benefits Communication Tips, <br />eBooks & More!</h5>

                            <div className="subscription-form">

                                <input type="email" />

                                <span>Email Address</span>

                                <a href="#">Sign Up</a>

                            </div>

                        </div>

                        <div className="right">

                            <div className="heart">

                                <img src={heart} alt="" />

                            </div>

                            <div className="heart-text m-none">
                                <p>Thank you for playing Dream <br />Game and raising money for our <br />wonderful partner charities</p></div>

                            <div className="heart-text m-block"><p>Thank you for playing Dream Game and raising money for our wonderful partner charities</p></div>

                        </div>

                    </div>

                </section>

                {/* Footer */}
                <section className="footer">

                    <div className="container-fluid">

                        <div className="flex">

                            <div className="quick-links">

                                <div className="image2">

                                    <img src={footerLogo} alt="" />

                                </div>

                                <div className="mobile-icons">

                                    {/* <a href="https://www.linkedin.com/" target="_blank">
                                        <img src={linked} alt="Linkedin" />

                                    </a> */}

                                    <a href="https://www.twitter.com/" target="_blank">
                                        <img src={twitterIcon} alt="Twitter" />

                                    </a>

                                    <a href="https://www.facebook.com/" target="_blank">
                                        <img src={facebookIcon} alt="Facebook" />

                                    </a>

                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src={instaIcon} alt="Instagram" />

                                    </a>

                                </div>

                                <h5 className="footerStyle">Quick links</h5>

                                <ul className="links">

                                    <li><a href="">About Dream Makers</a></li>

                                    <li><a href="">My Account</a></li>

                                    <li><a href="">Active Tickets</a></li>

                                </ul>

                            </div>

                            <div className="customer-service">

                                <h5 className="footerStyle">Customer Service</h5>

                                <ul className="links">

                                    <li><a href="">Contact Us</a></li>

                                    <li><a href="">FAQ</a></li>

                                    <li><a href="">How it Works</a></li>

                                    <li><a href="">Charities</a></li>

                                    <li><a href="">Campaign Draw Terms & Conditions</a></li>

                                </ul>

                                <div className="mb"></div>

                                <h5 className="footerStyle m-none"><a href="">User Agreement</a></h5>

                                <h5 className="footerStyle m-none"><a href="">Privacy Policy</a></h5>

                            </div>

                            <div className="footer-logo">

                                {/* <h5>Regulated By</h5> */}
                                <img src={dubaiEco} alt="" />

                            </div>

                            <div className="footer-icons">

                                <div className="m-none footer-socials">

                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <img src={linked} alt="Linkedin" />

                                    </a>

                                    <a href="https://www.twitter.com/" target="_blank">
                                        <img src={twitter} alt="Twitter" />

                                    </a>

                                    <a href="https://www.facebook.com/" target="_blank">
                                        <img src={fb} alt="Facebook" />

                                    </a>

                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src={insta} alt="Instagram" />

                                    </a>

                                </div>

                                <div className="mb"></div>

                                <p>Download Dream Makers app for the ultimate <br />  shopping experience & seamless connectivity!</p>

                                <div className="image3">

                                    <img src={appstore} alt="" />
                                    <img src={playstore} alt="" />

                                </div>

                                <div className=" m-block mt" style={{ textAlign: 'left' }}>

                                    <h5 className="footerStyle m-block"><a href="">User Agreement</a></h5>

                                    <h5 className="footerStyle m-block"><a href="">Privacy Policy</a></h5>

                                </div>

                                <div className="cards-text">

                                    <span>We accept</span>

                                    <img src={paymentOpt} alt="" />

                                </div>

                            </div>

                        </div>

                        <p className="text-center">Dream Makers Dubai © 2021. All rights reserved.</p>

                    </div>

                </section>



            </section >


            {/* Mobile How it works */}
            {showModal && (
                <div className="modal show m-block" id="worksModal">
                    <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-body">

                                <div className="header-box">
                                    <h4 className="title">HOW IT WORKS</h4>
                                    <h4 className="cross" onClick={() => setShowModal(false)}>&times;</h4>
                                </div>


                                <div className="works-item">
                                    <div className="item-wrapper">
                                        <img src={prizeIcon} />
                                        <span className="text-box">
                                            <h3 className="number-text">1.</h3>
                                            <h3 className="para-text">
                                                SELECT THE PRIZE YOU<br />
                                                WANT TO WIN <br />
                                                <span>from our website</span>
                                            </h3>
                                        </span>
                                    </div>
                                    <div className="separator-icon">
                                        <img src={separatorIcon} />
                                    </div>

                                </div>
                                <div className="works-item">
                                    <div className="item-wrapper">
                                        <img src={couponIcon} />
                                        <span className="text-box">
                                            <h3 className="number-text">2.</h3>
                                            <h3 className="para-text">
                                                BUY THE PRODUCT TO GET<br />
                                                COMPLIMENTARY ENTRY <br />
                                                <span>for a chance to win amazing prizes</span>
                                            </h3>
                                        </span>
                                    </div>
                                    <div className="separator-icon">
                                        <img src={separatorIcon} />
                                    </div>
                                </div>
                                <div className="works-item">
                                    <div className="item-wrapper">
                                        <img src={camIcon} />
                                        <span className="text-box">
                                            <h3 className="number-text">3.</h3>
                                            <h3 className="para-text">
                                                WAIT FOR LIVE DRAW<br />
                                                <span>winner will be announced <br />
                                                    during live draw
                                                </span>
                                            </h3>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export { Home };