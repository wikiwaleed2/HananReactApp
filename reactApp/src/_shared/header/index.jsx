import React, { useEffect, useState } from 'react';
import './index.less';
import logo from '@/_assets/images/dream-maker-logo.svg';
import profilePic from '@/_assets/images/blocked-profile.jpg';
import bellIcon from '@/_assets/images/Bell.svg';
import { Link } from "react-router-dom";
import { getCookie } from '../../_services/cookies.service';

function Header() {
    // const user = accountService.userValue;
    const [user, setUser] = useState(null);

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
        // Navbar
//         <nav className="navbar navbar-expand-lg navbar-light bg-light customNavbar">
//             <a className="navbar-brand" href="#">
//             <img src={logo} alt="Dream Makers" className="d-inline-block align-text-top" />
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">How it Works <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">About Dream Makers</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Winners</a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient customNavbar">
            {/* <div className="container-fluid"> */}
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {!!user ?
                    <>
                        <p>Hi {user.firstName}</p>
                        <img src={profilePic} className="profile-pic" />
                        <img src={bellIcon} />
                    </>
                    : <Link to={{ pathname: `/signup` }}>
                        <span className="nav-link active" aria-current="page" href="#">Login/Sign-up</span>
                    </Link>}



            </div>
            {/* </div> */}
        </nav>
    );
}

export { Header };