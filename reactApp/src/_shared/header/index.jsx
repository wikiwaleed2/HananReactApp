import React, { useEffect, useState } from 'react';
import './index.less';
import logo from '@/_assets/images/dream-maker-logo.svg';
import aboutIcon from '@/_assets/images/about-dream-makers.svg';
import settingsIcon from '@/_assets/images/settings-icon.svg';
import testimonialIcon from '@/_assets/images/testimonial-icon.svg';
import winnerIcon from '@/_assets/images/winners-icon.svg';
import crossIcon from '@/_assets/images/cross-icon.svg';
import chevronBlue from '@/_assets/images/chevron-right-blue.svg';
import profilePic from '@/_assets/images/blocked-profile.jpg';
import bellIcon from '@/_assets/images/Bell.svg';
import appstoreIcon from '@/_assets/images/appstore-icons.png';
import playStoreIcon from '@/_assets/images/playstore-icons.png';
import { Link } from "react-router-dom";
import { getCookie } from '../../_services/cookies.service';

function Header() {
    // const user = accountService.userValue;
    const [user, setUser] = useState(null);
    const [showNavModal, setShowNavModal] = useState(false);

    useEffect(() => {
        // let token =  getCookie("token");
        // setToken(token);
        //  const subscription = accountService.user.subscribe(x => setUser(x));
        //  console.log("user", user);
        //  return subscription.unsubscribe;
        if (!!localStorage.userDetails) {
            setUser(JSON.parse(localStorage.userDetails));
        }
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient customNavbar">

                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Dream Makers" className="d-inline-block align-text-top" />
                </a>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">How it Works</a>
                        <a className="nav-link" href="#">About Dream Makers</a>
                        <a className="nav-link" href="#">Winners</a>
                    </div>
                </div>
                <div className="login-btn navbar-nav">
                    {!!user ?
                        <>
                            <p>Hi {user.firstName}</p>
                            <img src={profilePic} className="profile-pic" />
                            <img src={bellIcon} className="notif-icon" />
                        </>
                        :
                        <>
                            <button className="navbar-toggler" type="button" onClick={() => setShowNavModal(true)} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link to={{ pathname: `/signup` }}>
                                <span className="nav-link active" aria-current="page" href="#">Login/Sign-up</span>
                            </Link>
                        </>
                    }



                </div>
            </nav>

            {showNavModal && (
                <div className="modal show m-block" id="navModal">
                    <div className="modal-dialog modal-md adjust-width" role="document">
                        <div className="modal-content">
                            <div className="modal-body">

                                <div className="header-box">
                                    <p>*New user or existing user<br />Get Started</p>
                                    <button className="btn btn-primary btn-login">Login/Sign-up</button>
                                </div>

                                <div className="nav-btns">
                                    <button className="btn btn-primary btn-page">
                                        <span>
                                            <img src={aboutIcon} />
                                            <p>About Dream Makers</p>
                                        </span>
                                        <img src={chevronBlue} />
                                    </button>

                                    <button className="btn btn-primary btn-page">
                                        <span>
                                            <img src={testimonialIcon} />
                                            <p>Testimonials</p>
                                        </span>
                                        <img src={chevronBlue} />
                                    </button>

                                    <button className="btn btn-primary btn-page">
                                        <span>
                                            <img src={winnerIcon} />
                                            <p>Winners</p>
                                        </span>
                                        <img src={chevronBlue} />
                                    </button>

                                    <button className="btn btn-primary btn-page">
                                        <span>
                                            <img src={settingsIcon} />
                                            <p>How it works</p>
                                        </span>
                                        <img src={chevronBlue} />
                                    </button>
                                </div>

                                <div className="store-icons">
                                    <a href="#" >
                                        <img src={appstoreIcon} />
                                    </a>
                                    <a href="#" >
                                        <img src={playStoreIcon} />
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export { Header };