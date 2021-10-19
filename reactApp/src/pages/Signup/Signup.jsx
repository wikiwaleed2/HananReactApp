import React from 'react';
import './Signup.less';
import '../../home/index.less';
import Eye from '../../_assets/images/eye.svg';
import PhoneInput from 'react-phone-input-2'
import Slider from "react-slick";
import sliderImg from '../../_assets/images/sliderImg.png';
import sliderImg2 from '../../_assets/images/sliderImg2.png';
import sliderImg3 from '../../_assets/images/sliderImg3.png';
import sliderImg4 from '../../_assets/images/sliderImg4.png';
import sliderImg5 from '../../_assets/images/sliderImg5.png';
import Facebook from '../../_assets/images/facebook.png';
import Google from '../../_assets/images/google.png';
// import 'react-phone-input-2/lib/style.css'

function Signup() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    {/* Signup Slider */}
                    <div className="signUpSlider">
                        <h1>Our Previous Winners</h1>
                        <Slider {...settings}>
                            <div>
                                <img src={sliderImg} />
                                <div className="slide__caption">
                                    <h3>Kate J.</h3>
                                    <p>Won Sky diving at Abu Dhabi</p>
                                </div>
                            </div>
                            <div>
                                <img src={sliderImg2} />
                                <div className="slide__caption">
                                    <h3>Kate J.</h3>
                                    <p>Won Sky diving at Abu Dhabi</p>
                                </div>
                            </div>
                            <div>
                                <img src={sliderImg3} />
                                <div className="slide__caption">
                                    <h3>Kate J.</h3>
                                    <p>Won Sky diving at Abu Dhabi</p>
                                </div>
                            </div>
                            <div>
                                <img src={sliderImg4} />
                                <div className="slide__caption">
                                    <h3>Kate J.</h3>
                                    <p>Won Sky diving at Abu Dhabi</p>
                                </div>
                            </div>
                            <div>
                                <img src={sliderImg5} />
                                <div className="slide__caption">
                                    <h3>Kate J.</h3>
                                    <p>Won Sky diving at Abu Dhabi</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* Signup Slider */}
                </div>
                <div className="col-md-5">
                    <div className="SignupForm">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sign Up</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Log In</a>
                            </li>
                        </ul>
                        <div className="SignUpBox">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="formCont">
                                        <div className="subscription-form">
                                            <input className="form-control" type="text" />
                                            <span>First Name</span>
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="text" />
                                            <span>Last Name</span>
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="email" />
                                            <span>Email</span>
                                        </div>
                                        <div className="forminput">
                                            <div className="subscription-form">
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span>Nationality</span>
                                            </div>
                                            <div className="subscription-form">
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span>Country of Resources</span>
                                            </div>
                                        </div>
                                        <div className="formSelect">
                                            <div>
                                                <input type="radio" name="fav_language" value="HTML" />
                                                <label>Male</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="fav_language" value="CSS" />
                                                <label>Female</label>
                                            </div>
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="password" />
                                            <span>Password</span>
                                            <img className="eyeImg" src={Eye} alt="Eye" />
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="password" />
                                            <span>Confirm Password</span>
                                            <img className="eyeImg" src={Eye} alt="Eye" />
                                        </div>
                                        <div className="subscription-form">
                                            <PhoneInput
                                                country={'us'}
                                                label="false"
                                                value=""
                                                onChange={phone => this.setState({ phone })}
                                            />
                                            <span>Phone Number</span>
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="number" />
                                            <span>Invitation Code</span>
                                        </div>
                                        <div className="terms">
                                            <div>
                                                <input type="radio" name="fav_language" value="CSS" />
                                                <label>I accept the Terms & Conditions. <a href="/">Read</a></label>
                                            </div>
                                        </div>
                                        <button className="btn btn-default signupBtn">Sign Up</button>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="formCont LoginCont">
                                        <div className="subscription-form">
                                            <input className="form-control" type="email" />
                                            <span>Email / Phone Number</span>
                                        </div>
                                        <div className="subscription-form">
                                            <input className="form-control" type="password" />
                                            <span>Password</span>
                                            <img className="eyeImg" src={Eye} alt="Eye" />
                                        </div>
                                        <div className="forgotBox">
                                            <div>
                                                <input type="radio" name="fav_language" value="CSS" />
                                                <label>Remember Me</label>
                                            </div>
                                            <div>
                                                <a href="/">Forgot Password</a>
                                            </div>
                                        </div>
                                        <button className="btn btn-default signupBtn LoginBtn">Log In</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="LoginWith">
                            <div><span><img src={Google} /></span>Log In with Google</div>
                            <div><span><img src={Facebook} /></span>Log In with Facebook</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Signup };
