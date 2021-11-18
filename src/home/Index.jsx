import './index.less';
import React, { useEffect, useState } from 'react';
import { accountService } from '@/_services';
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
import chevronNextGold from '@/_assets/images/chevron-right-gold.svg';
import chevronPrevGold from '@/_assets/images/chevron-left-gold.svg';
import heart from '@/_assets/images/heart.svg';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import Slider from 'react-slick';
import Wave from 'react-wavify';
import styled, { keyframes } from 'styled-components';
import { fadeOutUp } from 'react-animations';
import { getCookie, setCookie } from '../_services/cookies.service';
import { FeaturedCampaign } from '../_shared/featured-campaign/index.jsx';
import { CampaignCard } from '../_shared/campaign-card/index.jsx';
import { CounterMobile } from '../_shared/counter-mobile';
import { SoldCampaign } from '../_shared/sold-campaign/index.jsx';
import { Link } from 'react-router-dom';
import { campaignsService } from '@/_services/campaigns.service';

// import Message from '../components/message';
// import MessageContainer from '../components/messagesContainer';

const fadeOutUpAnimation = keyframes`${fadeOutUp}`;
const FadeOutUpDiv = styled.div`animation: 0.5s ${fadeOutUpAnimation};`;


export function Home() {

    const [slideCounter, setSlideCounter] = useState('01');
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
    const [isPlaying4, setIsPlaying4] = useState(false);
    const [isPlaying5, setIsPlaying5] = useState(false);
    const [soldCount7, setSoldCount7] = useState(0);
    const [soldCount13, setSoldCount13] = useState(0);
    const [soldCount18, setSoldCount18] = useState(0);
    const [randomPrice, setRandomPrice] = useState('720.00');
    const [showModal, setShowModal] = useState(false);
    const [animateCounter, setAnimateCounter] = useState('');
    const [campaigns, setCampaigns] = useState([])
    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const subscription = accountService.user.subscribe(x => setUser(x));
    //     return subscription.unsubscribe;
    // }, []);

    useEffect(() => {

        let obj = {
            "limit": 3,
            "offset": 0,
            "order": [["id", "DESC"]],
            "where": { "id": { "$gt": 0 } }
        }
        campaignsService.getAll(obj).then((x) => {
            console.log(x);
            // setTotalCount(x.count)
            setCampaigns(x.rows)
        });

        let modal = getCookie("modal");
        if (!modal) {
            setCookie("modal", true, 7);
            setShowModal(true)
        }

    }, [])

    useEffect(() => {



    }, [randomPrice]);

    let calculateSlideCounter = (currentSlide) => {
        let counter = currentSlide + 1;
        setSlideCounter('0' + counter)
    }

    let stopVideo = () => {
        setIsPlaying1(false);
        setIsPlaying2(false);
        setIsPlaying3(false);
        setIsPlaying4(false);
        setIsPlaying5(false);
        let videosEl = document.getElementsByClassName("testimony-vid-tag");

        for (let i = 0; i <= videosEl.length - 1; i++) {
            if (!videosEl[i].paused) {
                videosEl[i].removeAttribute('controls');
                videosEl[i].pause();
            }
        }

    }

    let playVideo = (id) => {
        let number = id.split('-')[2];
        let video = document.getElementById(id);
        stopVideo();

        if (number == 1) {
            if (video.paused) {
                setIsPlaying1(true);
                video.setAttribute('controls', '');
                video.play();
            } else {
                setIsPlaying1(false);
                video.removeAttribute('controls');
                video.pause();
            }
        }
        else if (number == 2) {
            if (video.paused) {
                setIsPlaying2(true);
                video.setAttribute('controls', '');
                video.play();
            } else {
                setIsPlaying2(false);
                video.removeAttribute('controls');
                video.pause();
            }
        }
        else if (number == 3) {
            if (video.paused) {
                setIsPlaying3(true);
                video.setAttribute('controls', '');
                video.play();
            } else {
                setIsPlaying3(false);
                video.removeAttribute('controls');
                video.pause();
            }
        }
        else if (number == 4) {
            if (video.paused) {
                setIsPlaying4(true);
                video.setAttribute('controls', '');
                video.play();
            } else {
                setIsPlaying4(false);
                video.removeAttribute('controls');
                video.pause();
            }
        }
        else if (number == 5) {
            if (video.paused) {
                setIsPlaying5(true);
                video.setAttribute('controls', '');
                video.play();
            } else {
                setIsPlaying5(false);
                video.removeAttribute('controls');
                video.pause();
            }
        }


    }

    let startCount = (id, value) => {
        let el = document.getElementById(id);
        let counterNumber = id.split('-')[1];

        if (counterNumber == 7) {
            setAnimateCounter(value);
            if (!value) {

                let current = 1;
                let counter = setInterval(() => {
                    current++;

                    setSoldCount7(current);
                    if (current === 20) {
                        setAnimateCounter(true);
                        clearInterval(counter);
                        return;
                    }
                }, 20 / 4000);
            }
        }
        else if (counterNumber == 13) {
            setAnimateCounter(value);
            if (!value) {

                let current = 1;
                let counter = setInterval(() => {
                    current++;

                    setSoldCount13(current);
                    if (current === 20) {
                        setAnimateCounter(true);
                        clearInterval(counter);
                        return;
                    }
                }, 20 / 4000);
            }
        }
        else if (counterNumber == 18) {
            setAnimateCounter(value);
            if (!value) {

                let current = 1;
                let counter = setInterval(() => {
                    current++;

                    setSoldCount18(current);
                    if (current === 20) {
                        setAnimateCounter(true);
                        clearInterval(counter);
                        return;
                    }
                }, 20 / 4000);
            }
        }

    }


    let showPrice = (id) => {
        let price = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setRandomPrice(price + ".00")
        if (id == 7) {
            setSoldCount7(0);
        }
        else if (id == 13) {
            setSoldCount13(0);
        }
        else if (id == 18) {
            setSoldCount18(0);
        }
    }

    function SampleNextArrow(props) {
        const { className, style, onClick, src } = props;
        return (
            <div className={className} onClick={onClick}>
                <img src={src ? src : arrowIcon} alt="" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick, src } = props;
        return (
            <div className={className} onClick={onClick}>
                <img src={src ? src : arrowIcon} alt="" />
            </div>
        );
    }

    return (
        <>


            <section className="home-page">

                {(() => {

                    let settings = {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 500,
                        arrows: false,
                        customPaging: function (i) {
                            return (
                                <span></span>
                            );
                        },
                        dots: true,
                        dotsClass: "slick-dots slick-thumb",
                        infinite: true,
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

                        <section className="carousel-section home-slider">

                            <div className="header-carousel" id="main-carousel">


                                <Slider {...settings} afterChange={(current) => calculateSlideCounter(current)}>
                                    <div className="images ">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>


                                        <div className="carousel-cnt">

                                            <h1>Maldives </h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">
                                                <Link to={{ pathname: `/dream-cart` }}>
                                                    Buy now
                                                </Link>

                                                <a href="#">learn more</a>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="images">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>


                                        <div className="carousel-cnt">

                                            <h1>Maldives</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <Link to={{ pathname: `/dream-cart` }}>
                                                    Buy now
                                                </Link>

                                                <a href="#">learn more</a>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="images">

                                        <div className="c-overlay"></div>

                                        <div className="slider-img" style={{ backgroundImage: `url(${sliderImg})` }}></div>


                                        <div className="carousel-cnt">

                                            <h1>Maldives</h1>

                                            <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                                            <div className="btnStyle3">

                                                <Link to={{ pathname: `/dream-cart` }}>
                                                    Buy now
                                                </Link>

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
                                <p id="currentslider">{slideCounter}</p>&nbsp;/&nbsp;
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

                        {campaigns.length > 0 ?

                            campaigns.map((c) => {
                                if (c.whereToShow == 'explore') {
                                    return (
                                        <FeaturedCampaign videoSrc={false} item={c} keyvalue={randomPrice} />
                                    )
                                }

                            })

                            :

                            null
                        }



                        {/* <FeaturedCampaign videoSrc={false} keyvalue={randomPrice} />

                        <FeaturedCampaign videoSrc={true} keyvalue={randomPrice} /> */}

                        {/* <!-- For Mobile --> */}

                        <div className="row m-block">
                            {campaigns.length > 0 ?

                                campaigns.map((c) => {
                                    if (c.whereToShow == 'explore') {
                                        return (
                                            <div className="col-sm-12">
                                                <CampaignCard videoSrc={false} item={c} />
                                            </div>
                                        )
                                    }

                                })

                                :

                                null
                            }

                        </div>

                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>

                <section className="other sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Other Campaigns</h1>

                        <div className="card-head static-card-header" id="card-7" onClick={() => startCount("card-7", false)}>

                            <h1 className="headingStyle5 font-fancy">win</h1>

                            <CounterMobile soldCount={soldCount7} keyvalue={randomPrice} />

                        </div>



                        <div className="other-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
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
                                                centerPadding: '10%',
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
                                    <Slider {...settings} afterChange={() => showPrice("7")}>

                                        <div>
                                            <CampaignCard videoSrc={false} keyValue={randomPrice} />

                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} keyValue={randomPrice} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} keyValue={randomPrice} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} keyValue={randomPrice} />
                                        </div>


                                    </Slider>

                                );

                            })()}

                        </div>



                        <div className="card-footer static-card-footer" key={randomPrice}>

                            <div>

                                <div>

                                    <p>Buy a water Bottle</p>

                                    <FadeOutUpDiv>
                                        <h3>AED {randomPrice}</h3>
                                    </FadeOutUpDiv>

                                </div>

                                <Link className="buy-now" to={{ pathname: `/dream-cart` }}>
                                    Buy now
                                </Link>

                            </div>

                            <p>Max draw date: December 02, 2021 or when the campaign <br />is sold out.Which ever is earlier.</p>

                        </div>

                        <div className="load-btn">

                            <a href="#"><strong>+</strong> Load more</a>

                        </div>

                    </div>

                </section>


                <section className="lifestyle sliderStyle1">

                    <div className="container-fluid">

                        <h1 className="headingStyle1">Lifestyle Compaigns</h1>

                        <div className="card-head static-card-header" id="card-13" onClick={() => startCount("card-13", false)}>

                            <h1 className="headingStyle5 font-fancy">win</h1>

                            <CounterMobile soldCount={soldCount13} keyvalue={randomPrice} />

                        </div>



                        <div className="lifestyle-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    // nextArrow: <div className="arrow-next lifestyle-compaigns-arrow-next"><img src={arrowIcon} alt="" /></div>,
                                    // prevArrow: <div className="arrow-prev lifestyle-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></div>,
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
                                                centerPadding: '10%',
                                                // prevArrow: '.h-prev',
                                                // nextArrow: '.h-next',
                                                dots: false,
                                            }
                                        }


                                    ]
                                }

                                return (
                                    <Slider {...settings} afterChange={() => showPrice("13")}>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>


                                    </Slider>

                                );

                            })()}

                        </div>



                        <div className="card-footer static-card-footer" key={randomPrice}>

                            <div>

                                <div>

                                    <p>Buy a water Bottle</p>

                                    <FadeOutUpDiv>
                                        <h3>AED {randomPrice}</h3>
                                    </FadeOutUpDiv>

                                </div>

                                <Link className="buy-now" to={{ pathname: `/dream-cart` }}>
                                    Buy now
                                </Link>

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

                        <div className="card-head static-card-header" id="card-18" onClick={() => startCount("card-18", false)}>

                            <h1 className="headingStyle5 font-fancy">win</h1>

                            <CounterMobile soldCount={soldCount18} keyvalue={randomPrice} />

                        </div>



                        <div className="trip-compaigns container">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    // nextArrow: <div className="arrow-next trip-compaigns-arrow-next"><img src={arrowIcon} alt="" /></div>,
                                    // prevArrow: <div className="arrow-prev trip-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></div>,
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
                                                centerPadding: '10%',
                                                // prevArrow: '.h-prev',
                                                // nextArrow: '.h-next',
                                                dots: false,
                                            }
                                        }


                                    ]
                                }

                                return (
                                    <Slider {...settings} afterChange={() => showPrice("18")}>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>

                                        <div>
                                            <CampaignCard videoSrc={false} />
                                        </div>


                                    </Slider>

                                );

                            })()}

                        </div>



                        <div className="card-footer static-card-footer" key={randomPrice}>

                            <div>

                                <div>

                                    <p>Buy a water Bottle</p>

                                    <FadeOutUpDiv>
                                        <h3>AED {randomPrice}</h3>
                                    </FadeOutUpDiv>

                                </div>

                                <Link className="buy-now" to={{ pathname: `/dream-cart` }}>
                                    Buy now
                                </Link>

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
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    // nextArrow: <div className="arrow-next sold-out-compaigns-arrow-next"><img src={arrowIcon} alt="" /></div>,
                                    // prevArrow: <div className="arrow-prev sold-out-compaigns-arrow-prev"><img src={arrowIcon} alt="" /></div>,
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
                                                centerPadding: '10%',
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
                                            <SoldCampaign />
                                        </div>

                                        <div>
                                            <SoldCampaign />
                                        </div>

                                        <div>
                                            <SoldCampaign />
                                        </div>

                                        <div>
                                            <SoldCampaign />
                                        </div>

                                        <div>
                                            <SoldCampaign />
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
                                    infinite: false,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: true,
                                    nextArrow: <SampleNextArrow />,
                                    prevArrow: <SamplePrevArrow />,
                                    // nextArrow: <div className="arrow-next testimonials-carousel-next"><img src={arrowIcon} alt="" /></div>,
                                    // prevArrow: <div className="arrow-prev testimonials-carousel-prev"><img src={arrowIcon} alt="" /></div>,
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
                                                // arrows: true,
                                                nextArrow: <SampleNextArrow src={chevronNextGold} />,
                                                prevArrow: <SamplePrevArrow src={chevronPrevGold} />,
                                                // nextArrow: <div className="arrow-next testimonials-carousel-next"><img src={chevronNextGold} alt="" /></div>,
                                                // prevArrow: <div className="arrow-prev testimonials-carousel-prev"><img src={chevronPrevGold} alt="" /></div>,
                                                dots: false,
                                            }
                                        }


                                    ]
                                }

                                return (
                                    <Slider {...settings} beforeChange={() => stopVideo()} >


                                        <div>
                                            <div className="testimonial">

                                                <h5 className="text-center">Won Free Trips to Maldives</h5>

                                                <div className="testimonial-img testimonial-video">

                                                    {!isPlaying1 ?
                                                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-1")} data-play-video="#testimonial-video-1">
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                        </button>
                                                        :
                                                        null}

                                                    <video id="testimonial-video-1" className="testimony-vid-tag">
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

                                                    {!isPlaying2 ?
                                                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-2")} data-play-video="#testimonial-video-2">
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                        </button>
                                                        :
                                                        null}

                                                    <video id="testimonial-video-2" className="testimony-vid-tag">
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

                                                    {!isPlaying3 ?
                                                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-3")} data-play-video="#testimonial-video-3">
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                        </button>
                                                        :
                                                        null}

                                                    <video id="testimonial-video-3" className="testimony-vid-tag">
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

                                                    {!isPlaying4 ?
                                                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-4")} data-play-video="#testimonial-video-4">
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                        </button>
                                                        :
                                                        null}

                                                    <video id="testimonial-video-4" className="testimony-vid-tag">
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

                                                    {!isPlaying5 ?
                                                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("testimonial-video-5")} data-play-video="#testimonial-video-5">
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                        </button>
                                                        :
                                                        null}

                                                    <video id="testimonial-video-5" className="testimony-vid-tag">
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

                        <h1 className="headingStyle1 m-heading">Our Charity Partner</h1>

                        <div className="charities ">

                            {(() => {

                                let settings = {
                                    infinite: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    // arrows: false,
                                    nextArrow: <SampleNextArrow src={chevronNext} />,
                                    prevArrow: <SamplePrevArrow src={chevronPrev} />,
                                    // nextArrow: <div className="arrow-next charity-next"><img src={chevronNext} alt="" /></div>,
                                    // prevArrow: <div className="arrow-prev charity-prev"><img src={chevronPrev} alt="" /></div>,
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
            {/* <Message />,
            <MessageContainer />, */}
        </>
    );
}

export const MemoizedHome = React.memo(Home);
// export { Home };