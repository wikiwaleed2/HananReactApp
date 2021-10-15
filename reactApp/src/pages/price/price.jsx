import './price.less';
import '../../home/index.less';
import React, { useEffect, useState } from 'react';
// import { accountService } from '@/_services';
import sliderImg from '@/_assets/images/top-banner.svg';
import couponIcon from '@/_assets/images/coupon-icon.svg';
import cashAlt from '@/_assets/images/cash-alt.svg';
import calendar from '@/_assets/images/calendar.svg';
import appBanner from '../../_assets/images/app-banner-1.svg';
import topBanner from '../../_assets/images/top-banner-2.png';
import heart from '../../_assets/images/heart.svg';
import angleRight from '@/_assets/images/angle-double-right-solid.svg';
import angleLeft from '@/_assets/images/angle-double-left-solid.svg';
import TabsImg from "../../_assets/images/tabsImg.png";
import TabsImg2 from "../../_assets/images/tabsImg2.png";
import Slider from 'react-slick';
import { SilderComponent } from '../../_components/silder/silder';


function Price() {
    const [slideCounter, setSlideCounter] = useState('01');
    const [showModal, setShowModal] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    let calculateSlideCounter = (currentSlide) => {
        // console.log(e, slick, currentSlide);
        let counter = currentSlide + 1;
        setSlideCounter('0' + counter)
    }
    return (
        <>
        <div className="priceMobileSec">
            <div className="priceSec">
                <div className="priceCont">
                    <p>Price</p>
                    <h3>AED 720.00</h3>
                </div>
                <div className="priceSecbtn">
                    <button className="btn btn-default">Buy Now</button>
                </div>
            </div>
        </div>
            <div className="container-fluid">
                <div className="priceMain">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="price-slider">
                                <div className="progressMain">
                                    <p>522 ENTRIES SOLD OUT OF 985</p>
                                    <div className="progress customProgress">
                                        <div className="progress-bar" role="progressbar" style={{ width: (522 / 985) * 100 + "%" }}></div>
                                    </div>
                                </div>
                                {/* Slider */}
                                <div>
                                    <Slider className="priceSlider" {...settings}>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                    </Slider>
                                    <div className="h-prev">
                                        <img src={angleLeft} />
                                    </div>

                                    <div className="h-next">
                                        <img src={angleRight} />
                                    </div>

                                    <span className="m-block">
                                        Swipe for more
                                    </span>
                                </div>

                                {/* Slider */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="priceCont">
                                <h1>MALDIVES TRIP</h1>
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
                                <p>What if we told you that you can travel to the Maldives for holidays with a cup of coffee worth of spend, would you be interested?</p>
                                <p className="listText">You Will win:</p>
                                <ul className="pointList">
                                    <li>Point A</li>
                                    <li>Point B</li>
                                    <li>Point C</li>
                                    <li>Point D</li>
                                    <li>Point E</li>
                                    <li>Point F</li>
                                    <li>Point G</li>
                                    <li>Point H</li>
                                </ul>
                                <div className="buySec">
                                    <p>Buy a water Bottle and make it yours!</p>
                                    <h1>AED 720.00</h1>
                                    <button className="btn btn-default buyBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="priceDescription">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Description</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="priceSlide">
                        <h1 className="headingStyle1">You may be interested in</h1>
                        <SilderComponent />
                        <div className="load-btn">
                            <a href="#"><strong>+</strong> Load more</a>
                        </div>
                    </div>

                    {/* ADS Section */}

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
                </div>

                {/*PricePage Mobile Version*/}
                <div className="priceMainMobile">
                    <div className="row">
                        <div className="col-md-8 pr-0 pl-0">
                            <div className="price-slider">
                                <div className="sliderProgress">
                                    <div className="progressMain">
                                        <h2>Free Maldives trip</h2>
                                        <p>522 ENTRIES SOLD OUT OF 985</p>
                                        <div className="progress customProgress">
                                            <div className="progress-bar" role="progressbar" style={{ width: (522 / 985) * 100 + "%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slider */}
                                <div>
                                    <Slider className="priceSlider" {...settings}>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                        <div>
                                            <img className="img-fluid" src={sliderImg} />
                                        </div>
                                    </Slider>
                                    <div className="swipe">
                                        <div className="s-prev">
                                            <img src={angleLeft} />
                                        </div>
                                        <span className="m-block">
                                            Swipe for more
                                        </span>
                                        <div className="s-next">
                                            <img src={angleRight} />
                                        </div>
                                    </div>
                                </div>

                                {/* Slider */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="priceCont">
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
                                <h1>Free Maldives trip</h1>
                                <p>What if we told you that you can travel to the Maldives for holidays with a cup of coffee worth of spend, would you be interested?</p>
                            </div>
                        </div>
                    </div>
                    {/* Tahs */}
                    <div className="customTabs">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
                                <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Highlihgts</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat.</p>
                                <img className="img-fluid w-100" src={TabsImg} alt="TabsImg" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. </p>
                                <p>Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis. Proin dignissim turpis nunc, sed interdum justo iaculis et. Cras dui nisl, ultricies at hendrerit vel, tempus in nisi. Aenean in erat mauris. Aliquam arcu nulla, convallis vel vehicula id, mattis non erat</p>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim lacus at felis sagittis, in sollicitudin augue iaculis. Mauris placerat consequat neque, sit amet placerat nisi elementum sed. Aenean sed facilisis felis. Morbi bibendum erat ac eros imperdiet dignissim. Proin nisi augue, venenatis non tempor sed, scelerisque quis tellus. Fusce semper consectetur justo, at mollis diam porttitor quis.</p>
                                <img className="img-fluid w-100 mb-0" src={TabsImg2} alt="TabsImg" />
                            </div>
                        </div>
                    </div>
                    {/* Tabs */}

                    <div className="priceSlide">
                        <h1 className="headingStyle1 mobileHeading">You may be interested in</h1>
                        <div className="InterestedBox">
                            <div className="InterestedBoxCont">
                                <p>Won In Prizes</p>
                                <h4>AED 200,000</h4>
                            </div>
                            <div className="InterestedBoxCont">
                                <p>Winners</p>
                                <h4>4,110</h4>
                            </div>
                        </div>
                        <SilderComponent />
                        <div className="load-btn">
                            <a href="#"><strong>+</strong> Load more</a>
                        </div>
                    </div>

                    {/* ADS Section */}

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



                </div>
                {/*PricePage Mobile Version*/}

            </div>
        </>
    )
}

export { Price };
