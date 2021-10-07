import React from 'react';
import './index.less';
import logo from '@/_assets/images/dream-maker-logo.svg';

function Header() {
    // const user = accountService.userValue;

    return (
        // Navbar
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Dream Makers" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">How it Works</a>
                        <a className="nav-link" href="#">About Dream Makers</a>
                        <a className="nav-link" href="#">Winners</a>
                    </div>
                </div>
                <div className="login-btn navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Login/Sign-up</a>
                </div>
            </div>
        </nav>
    );
}

export { Header };