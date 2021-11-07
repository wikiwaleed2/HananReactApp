import React from 'react';
import './index.less';
import PhoneInput from 'react-phone-input-2';
import Eye from '@/_assets/images/eye.svg';

function SignUpForm({ callback }) {


    return (
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
                    label={"false"}
                    value=""
                    // onChange={phone => callback(phone)}
                />
                <span>Phone Number</span>
            </div>
            <div className="subscription-form">
                <input className="form-control" type="number" />
                <span>Invitation Code</span>
            </div>
            <div className="terms">
                {/* <div> */}
                    <input type="radio" name="fav_language" value="CSS" />
                    <label>I accept the Terms & Conditions. <a href="/">Read</a></label>
                {/* </div> */}
            </div>
            <button className="btn btn-default signupBtn">Sign Up</button>
        </div>
    );
}

export { SignUpForm };