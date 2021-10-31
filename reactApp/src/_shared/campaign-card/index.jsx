import React, { useState, useEffect } from 'react';
import './index.less';
import shareIcon from '@/_assets/images/social-share.png';
import bottle from '@/_assets/images/bottle.png';
import playIcon from '@/_assets/images/play-solid.svg';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import { CounterMobile } from '@/_shared/counter-mobile/index.jsx';
import { Link } from 'react-router-dom';

function CampaignCard({ videoSrc }) {

    // const [animateCounter, setAnimateCounter] = useState(true);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [soldCount1, setSoldCount1] = useState(0);
    const [randomPrice, setRandomPrice] = useState('720.00');

    let startCount = (id, value) => {
        let idNumber = id.split('-')[1];
        let el = document.getElementById(id);
        let childEl = el.children[1].children[1];
        let counterNumber = id.split('-')[1];

        if (counterNumber == 4) {
            // setAnimateCounter(value);
            if (!value) {

                let current = 1;
                var startTime = new Date().getTime();
                let counter = setInterval(() => {
                    current++;

                    setSoldCount1(current);
                    if (current === 20) {
                        // setAnimateCounter(true);
                        clearInterval(counter);
                        return;
                    }
                }, 200);
            }
        }

    }

    useEffect(() => {
        let price = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setRandomPrice(price + ".00")
    }, [])

    let playVideo = (id) => {
        let number = id.split('-')[2];
        let video = document.getElementById(id);
        // stopVideo();
        console.log(video);
        console.log(number);
        if (number == 1) {
            if (!!video.paused) {
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

    return (
        <div className="card" id="card-4" key={soldCount1}>

            <div className="card-head" onClick={() => startCount("card-4", false)}>

                <h1 className="headingStyle5 font-fancy">win</h1>

                <CounterMobile soldCount={soldCount1} keyvalue={randomPrice} />

            </div>

            <div className="card-img" style={videoSrc ? { backgroundImage: 'none' } : {}}>

                {videoSrc ?
                    <div className="feature-video">

                        <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo("feature-video-1")} data-play-video="#feature-video-1">
                            <img src={playIcon} alt="video play button icon" className="play" />
                        </button>

                        <video id="feature-video-1" className="testimony-vid-tag mbl-video">
                            <source src={dummyVideo} type="video/mp4" />
                        </video>

                    </div>
                    :
                    null}

                <div className="campaigns-card-overlay"></div>

                <div className="card-cnt">

                    <h1>Maldives Trip</h1>

                    <p>WIN FREE MALDIVES HOLIDAY TRIP</p>

                    <div className="btnStyle3">

                        <Link to={{ pathname: `/prize-details` }}>
                            Prize Details
                        </Link>

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

                        <h3>AED {randomPrice}</h3>

                    </div>

                    <Link className="buy-now" to={{ pathname: `/dream-cart` }}>
                        Buy now
                    </Link>

                </div>

                <p className="small-text">Max draw date: December 02, 2021 or when the campaign
                    is sold out. Which ever is earlier.</p>

            </div>

        </div>
    );
}

export { CampaignCard };