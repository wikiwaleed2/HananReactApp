import React, { useState, useEffect } from 'react';
import './index.less';
import shareIcon from '@/_assets/images/social-share.png';
import bottle from '@/_assets/images/bottle.png';
import playIcon from '@/_assets/images/play-solid.svg';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import { CounterMobile } from '@/_shared/counter-mobile/index.jsx';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { sharedService } from '@/_services/shared.service';
import { constantSrv } from '@/_services/constant.service';
import _ from 'lodash';

export function CampaignCard({ videoSrc, keyValue, item }) {

    // const [animateCounter, setAnimateCounter] = useState(true);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [soldCount1, setSoldCount1] = useState(0);
    const [randomPrice, setRandomPrice] = useState('720.00');
    const [isLoader, setIsLoader] = useState(false);
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        if (!!item?.pictures) {

            _.forEach(item?.pictures, (p) => {
                if (p.type == constantSrv.EMediaCategory.prizeDesktop) {
                    let extension = sharedService.getExtension(p.url);
                    if (extension == "video") {
                        setIsVideo(true);
                    }
                }
            });
        }
    }, [])

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
                }, 20 / 4000);
            }
        }

    }

    useEffect(() => {
        let price = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setRandomPrice(price + ".00")
    }, [])

    let playVideo = (id) => {
        let video = document.getElementById(id);
        if (video.paused) {
            video.setAttribute('controls', '');
            video.play();
            setIsPlaying1(true);
        } else {
            video.removeAttribute('controls');
            video.pause();
            setIsPlaying1(false);
        }
    }

    let shareCampaign = () => {
        setIsLoader(true);
        let shareData = {
            title: 'Maldives Trip',
            text: 'Mesmerizing Maldives With Sun Island',
            url: "https://dreammakers.ae/prize-details"
        }
        const sharePromise = navigator.share(shareData);
        setIsLoader(false);
    }

    let renderMedia = (media, type) => {
        if (!!item?.pictures) {
            let mediaUrl;
            _.forEach(item.pictures, (p) => {
                if (media == p.type) {
                    mediaUrl = p.url;
                }
            });
            return mediaUrl;
        }
    }

    return (
        <div className="card" id="card-4" key={keyValue}>

            <div className="card-head" onClick={() => startCount("card-4", false)}>

                <h1 className="headingStyle5 font-fancy">win</h1>

                <CounterMobile soldCount={soldCount1} keyValue={keyValue} />

            </div>

            <div className="card-img" style={isVideo ? { backgroundImage: 'none' } : { backgroundImage: `${renderMedia(constantSrv.EMediaCategory.prizeDesktop, 'img')} !important` }}>

                {isVideo ?
                    <div className="feature-video">

                        {!isPlaying1 ?
                            <button className="testimonialVideoPlayBtn custom-video-play-btn" onClick={() => playVideo(`feature-mvideo-${item.id}`)} data-play-video={`#feature-mvideo-${item.id}`}>
                                <img src={playIcon} alt="video play button icon" className="play" />
                            </button>
                            :
                            null
                        }

                        <video id={`feature-mvideo-${item.id}`} className="testimony-vid-tag mbl-video">
                            <source src={renderMedia(constantSrv.EMediaCategory.prizeDesktop, 'video')} type="video/mp4" />
                        </video>

                    </div>
                    :
                    null
                }

                {!isPlaying1 ?

                    <>

                        <div className="campaigns-card-overlay"></div>

                        <div className="card-cnt">

                            <h1>{item?.title}</h1>

                            <p>{item?.description}</p>

                            <div className="btnStyle3">

                                <Link to={{ pathname: `/prize-details` }}>
                                    Prize Details
                                </Link>

                                <a href="#">Product Details</a>

                            </div>

                        </div>

                        <div className="btl-img">

                            <img src={item ? renderMedia(constantSrv.EMediaCategory.productDesktop, 'img') : bottle} alt="" />

                        </div>

                        <div className="card-icon" onClick={shareCampaign}>
                            {!isLoader ?
                                <img src={shareIcon} />
                                :
                                <span className="spinner-border spinner-border-sm"></span>
                            }
                        </div>

                    </>

                    :

                    null
                }

            </div>

            <div className="card-footer">

                <div>

                    <div>

                        <p>{item?.shortTitleDescriptionDesktop}</p>

                        <h3>AED {item?.couponPrice ? (item?.couponPrice).toFixed(2) : 0.00}</h3>

                    </div>

                    <Link className="buy-now" to={{ pathname: `/dream-cart` }}>
                        Buy now
                    </Link>

                </div>

                <p className="small-text">Max draw date: {moment(item?.drawDate).format("MMMM DD, YYYY")} or when the campaign
                    is sold out. Which ever is earlier.</p>

            </div>

        </div>
    );
}
export const MemoizedCampaignCard = React.memo(CampaignCard);
// export { CampaignCard };