import React, { useEffect, useState } from 'react';
import './index.less';
import shareIcon from '@/_assets/images/social-share.png';
import maldives from '@/_assets/images/four-seasons-landaa-giraavaru.png';
import bottle from '@/_assets/images/bottle.png';
import cashAlt from '@/_assets/images/cash-alt.svg';
import calendar from '@/_assets/images/calendar.svg'
import couponIcon from '@/_assets/images/coupon-icon.svg';
import playIcon from '@/_assets/images/play-solid.svg';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import { Counter } from '../../_shared/counter/index.jsx';

export function FeaturedCampaign({ videoSrc }) {

    const [animateCounter, setAnimateCounter] = useState(true);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [soldCount1, setSoldCount1] = useState(0);
    const [randomPrice, setRandomPrice] = useState('720.00');

    useEffect(() => {
        showPrice();
    },[])

    let startCount = (id, value) => {
        let idNumber = id.split('-')[1];
        let el = document.getElementById(id);
        let childEl = el.children[1].children[1];
        let counterNumber = id.split('-')[1];

        if (counterNumber == 1) {
            setAnimateCounter(value);
            if (!value) {

                let current = 1;
                var startTime = new Date().getTime();
                let counter = setInterval(() => {
                    current++;

                    setSoldCount1(current);
                    if (current === 20) {
                        setAnimateCounter(true);
                        clearInterval(counter);
                        return;
                    }
                }, 200);
            }
        }
    }

    // let stopVideo = () => {
    //     setIsPlaying1(false);
    //     let videosEl = document.getElementsByClassName("feature-vid-tag");
    //     console.log("video el", videosEl);

    //     for (let i = 0; i <= videosEl.length - 1; i++) {
    //         if(!videosEl[i].paused){
    //             videosEl[i].removeAttribute('controls');
    //             videosEl[i].pause();
    //         }
    //     }

    // }

    let playVideo = (id) => {
        let number = id.split('-')[2];
        let video = document.getElementById(id);
        // stopVideo();

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


    }

    let showPrice = (id) => {
        let price = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setRandomPrice(price + ".00")
        if (id == 1) {
            setSoldCount1(0);
        }
    }

    return (
        <>
            <div className="win-card m-none" id="card-1" onClick={() => startCount("card-1", false)}>

                <h1 className="headingStyle2 m-none font-fancy">WIN</h1>

                <div className="bckg">

                    <div className="row">

                        <div className="col-sm-6">

                            <div className="image">

                                {videoSrc ?
                                    <div className="feature-video">

                                        {!isPlaying1 ?
                                            <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("feature-video-1")} data-play-video="#feature-video-1">
                                                <img src={playIcon} alt="video play button icon" className="play" />
                                            </button>
                                            :
                                            null}

                                        <video id="feature-video-1" className="feature-vid-tag">
                                            <source src={dummyVideo} type="video/mp4" />
                                        </video>

                                    </div>
                                    :
                                    <img src={maldives} alt="" />
                                }


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

                    <Counter soldCount={soldCount1} keyValue={randomPrice} />

                    {/* <div className="sold-counter" id="counter-1">
                        <Wave fill='#eabe00'
                            id=""
                            // paused={animateCounter}
                            options={{
                                height: soldCount1 === 0 ? 140 : 140 - (140 * (soldCount1 / 60)),
                                speed: 0.5,
                                points: 1
                            }}
                        />
                        <Wave fill='#ffcf00'
                            id=""
                            // paused={animateCounter}
                            options={{
                                height: soldCount1 === 0 ? 140 : 140 - (140 * (soldCount1 / 60)),
                                speed: 0.5,
                                points: 2
                            }}
                        />

                        <FadeOutUpDiv>
                            <span className="sold-cnt">{soldCount1}</span>
                        </FadeOutUpDiv>


                        <span className="text">Sold <br /> out of</span>

                        <span className="total-cnt">60</span>
                    </div> */}

                    {/* <div className="progress-box">

                        <span>1</span>

                        <span className="text">Sold <br /> out of</span>

                        <span>60</span>

                    </div> */}

                </div>

            </div>

        </>
    );

}
export const MemoizedFeaturedCampaign = React.memo(FeaturedCampaign);
// export { FeaturedCampaign };