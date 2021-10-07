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
import Slider from 'react-slick';

function Home() {
    // const user = accountService.userValue;

    const [slideCounter, setSlideCounter] = useState('01');


    let calculateSlideCounter = (currentSlide) => {
        // console.log(e, slick, currentSlide);
        let counter = currentSlide + 1;
        setSlideCounter('0' + counter)
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
                                    <div className="images">

                                        <div className="c-overlay"></div>

                                        <img src={sliderImg} alt="" />

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

                                        <img src={sliderImg} alt="" />

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

                                        <img src={sliderImg} alt="" />

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


                            <div className="slide-counter">
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

                            <span className="m-block">Swipe for more</span>

                        </section>
                    );

                })()}

                {/* How it works */}
                <section id="how-it-works" className="d-lg-flex d-md-flex d-sm-none">
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

                            <div className="col-md-6 col-sm-6">

                                <div className="left-ad-1">

                                    <img src={appBanner} alt="" />

                                </div>

                            </div>

                            <div className="col-md-6 col-sm-6">

                                <div className="right-ad-1 m-none">

                                    <img src={topBanner} alt="" />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="explore">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Explore Compaigns</h1>

                        {/* <!-- For Desktop --> */}

                        <div className="win-card">

                            <h1 className="headingStyle2 m-none">WIN</h1>

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

                        <div className="win-card">

                            <h1 className="headingStyle2 m-none">WIN</h1>

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

                        <div className="win-card">

                            <h1 className="headingStyle2 m-none">WIN</h1>

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

                        <div className="row d-none">
                            <div className="col-sm-12">
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5">win</h1>

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

                                        <p>Max draw date: December 02, 2021 or when the campaign <br />
                                            is sold out. Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5">win</h1>

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

                                        <p>Max draw date: December 02, 2021 or when the campaign <br />
                                            is sold out. Which ever is earlier.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="card">

                                    <div className="card-head">

                                        <h1 className="headingStyle5">win</h1>

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

                                        <p>Max draw date: December 02, 2021 or when the campaign <br />
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

                <section class="other sliderStyle1">

                    <div class="container-fluid">

                        <h1 class="headingStyle1">Other Compaigns</h1>



                        <div class="card-head static-card-header">

                            <h1 class="headingStyle5">win</h1>

                            <div class="box">

                                <h5 class="sold-items">1</h5>

                                <p>SOLD</p>

                                <p>OUT OF</p>

                                <h5 class="total-items">60</h5>

                            </div>

                        </div>



                        <div class="other-compaigns container">

                            <div class="card">

                                <div class="card-head">

                                    <h1 class="headingStyle5">win</h1>

                                    <div class="box">

                                        <h5>1</h5>

                                        <p>SOLD</p>

                                        <p>OUT OF</p>

                                        <h5>60</h5>

                                    </div>

                                </div>

                                <div class="card-img">

                                    <div class="campaigns-card-overlay"></div>

                                    <div class="card-cnt">

                                        <h1>Maldives Trip</h1>

                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                        <div class="btnStyle3">

                                            <a href="#">Prize Details</a>

                                            <a href="#">Product Details</a>

                                        </div>

                                    </div>

                                    <div class="btl-img">

                                        <img src={bottle} alt="" />

                                    </div>

                                    <div class="card-icon">
                                        <img src={shareIcon} alt="" />
                                    </div>

                                </div>

                                <div class="card-footer">

                                    <div>

                                        <div>

                                            <p>Buy a water Bottle</p>

                                            <h3>AED 720.00</h3>

                                        </div>

                                        <a href="#" class="buy-now">Buy Now</a>

                                    </div>

                                    <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                </div>

                            </div>

                            <div class="card">

                                <div class="card-head">

                                    <h1 class="headingStyle5">win</h1>

                                    <div class="box">

                                        <h5>1</h5>

                                        <p>SOLD</p>

                                        <p>OUT OF</p>

                                        <h5>60</h5>

                                    </div>

                                </div>

                                <div class="card-img">

                                    <div class="campaigns-card-overlay"></div>

                                    <div class="card-cnt">

                                        <h1>Maldives Trip</h1>

                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                        <div class="btnStyle3">

                                            <a href="#">Prize Details</a>

                                            <a href="#">Product Details</a>

                                        </div>

                                    </div>

                                    <div class="btl-img">

                                        <img src={bottle} alt="" />

                                    </div>

                                    <div class="card-icon">

                                        <img src={shareIcon} alt="" />

                                    </div>

                                </div>

                                <div class="card-footer">

                                    <div>

                                        <div>

                                            <p>Buy a water Bottle</p>

                                            <h3>AED 720.00</h3>

                                        </div>

                                        <a href="#" class="buy-now">Buy Now</a>

                                    </div>

                                    <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                </div>

                            </div>

                            <div class="card">

                                <div class="card-head">

                                    <h1 class="headingStyle5">win</h1>

                                    <div class="box">

                                        <h5>1</h5>

                                        <p>SOLD</p>

                                        <p>OUT OF</p>

                                        <h5>60</h5>

                                    </div>

                                </div>

                                <div class="card-img">

                                    <div class="campaigns-card-overlay"></div>

                                    <div class="card-cnt">

                                        <h1>Maldives Trip</h1>

                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                        <div class="btnStyle3">

                                            <a href="#">Prize Details</a>

                                            <a href="#">Product Details</a>

                                        </div>

                                    </div>

                                    <div class="btl-img">

                                        <img src={bottle} alt="" />
                                    </div>

                                    <div class="card-icon">

                                    <img src={shareIcon} alt="" />

                                    </div>

                                </div>

                                <div class="card-footer">

                                    <div>

                                        <div>

                                            <p>Buy a water Bottle</p>

                                            <h3>AED 720.00</h3>

                                        </div>

                                        <a href="#" class="buy-now">Buy Now</a>

                                    </div>

                                    <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                </div>

                            </div>

                            <div class="card">

                                <div class="card-head">

                                    <h1 class="headingStyle5">win</h1>

                                    <div class="box">

                                        <h5>1</h5>

                                        <p>SOLD</p>

                                        <p>OUT OF</p>

                                        <h5>60</h5>

                                    </div>

                                </div>

                                <div class="card-img">

                                    <div class="campaigns-card-overlay"></div>

                                    <div class="card-cnt">

                                        <h1>Maldives Trip</h1>

                                        <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                        <div class="btnStyle3">

                                            <a href="#">Prize Details</a>

                                            <a href="#">Product Details</a>

                                        </div>

                                    </div>

                                    <div class="btl-img">

                                    <img src={bottle} alt="" />

                                    </div>

                                    <div class="card-icon">

                                    <img src={shareIcon} alt="" />

                                    </div>

                                </div>

                                <div class="card-footer">

                                    <div>

                                        <div>

                                            <p>Buy a water Bottle</p>

                                            <h3>AED 720.00</h3>

                                        </div>

                                        <a href="#" class="buy-now">Buy Now</a>

                                    </div>

                                    <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                                </div>

                            </div>

                        </div>



                        <div class="card-footer static-card-footer">

                            <div>

                                <div>

                                    <p>Buy a water Bottle</p>

                                    <h3>AED 720.00</h3>

                                </div>

                                <a href="#" class="buy-now">Buy Now</a>

                            </div>

                            <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                        </div>



                        <div class="arrow-prev other-compaigns-arrow-prev">

                            <i class="fas fa-arrow-left"></i>

                        </div>

                        <div class="arrow-next other-compaigns-arrow-next">

                            <i class="fas fa-arrow-right"></i>

                        </div>

                        <div class="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>




                {/* <div className="p-4">
                <div className="container">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React & JWT!!</p>
                </div>
            </div> */}
            </section>

        </>
    );
}

export { Home };