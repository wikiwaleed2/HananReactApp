import React, { useState } from 'react';
import './index.less';
import shareIcon from '@/_assets/images/social-share.png';
import maldives from '@/_assets/images/four-seasons-landaa-giraavaru.png';
import bottle from '@/_assets/images/bottle.png';
import cashAlt from '@/_assets/images/cash-alt.svg';
import calendar from '@/_assets/images/calendar.svg'
import couponIcon from '@/_assets/images/coupon-icon.svg';
import CounterMobile from '../../_shared/counter-mobile/index.jsx';
import { useEffect } from 'react/cjs/react.development';

const CampaignCard = () => {

    const [animateCounter, setAnimateCounter] = useState(true);
    const [soldCount1, setSoldCount1] = useState(0);
    const [randomPrice, setRandomPrice] = useState('720.00');

    let startCount = (id, value) => {
        let idNumber = id.split('-')[1];
        let el = document.getElementById(id);
        let childEl = el.children[1].children[1];
        let counterNumber = id.split('-')[1];

        if (counterNumber == 4) {
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

    useEffect(() => {
        let price = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setRandomPrice(price + ".00")
    },[])


    return (
        <div className="card" id="card-4" onClick={() => startCount("card-4", false)} key={soldCount1}>

            <div className="card-head">

                <h1 className="headingStyle5 font-fancy">win</h1>

                <CounterMobile soldCount={soldCount1} />

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

                        <h3>AED {randomPrice}</h3>

                    </div>

                    <a href="#" className="buy-now">Buy Now</a>

                </div>

                <p className="small-text">Max draw date: December 02, 2021 or when the campaign
                    is sold out. Which ever is earlier.</p>

            </div>

        </div>
    );
}

export default CampaignCard;