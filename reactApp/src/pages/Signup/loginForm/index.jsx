import React from 'react';
import './index.less';
import Eye from '@/_assets/images/eye.svg';
import { GoogleLoginButton } from '../../../_shared/google-login-button/google-login-button';
import { FacebookLoginButton } from '../../../_shared/facebook-login-button/facebook-login-button';


function LoginForm({ callback }) {

    return (
        <>
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
                    <div className="remember-me">
                        <input type="radio" name="fav_language" value="CSS" />
                        <label>Remember Me</label>
                    </div>
                    <div>
                        <a href="/">Forgot Password</a>
                    </div>
                </div>
                <button className="btn btn-default signupBtn LoginBtn" onClick={() => callback('verify-screen')}>Log In</button>
            </div>

            <div className="LoginWith">

                <GoogleLoginButton mblStyle='' />
                <FacebookLoginButton mblStyle='' />

            </div>
        </>
    );
}

export { LoginForm };