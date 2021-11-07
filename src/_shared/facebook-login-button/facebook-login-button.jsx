import React from 'react';
import './facebook-login-button.less';
import Facebook from '@/_assets/images/facebook.png';

function FacebookLoginButton({mblStyle}) {

    return (
        <div className={ `facebook-btn ${mblStyle}` }>
            <span>
                <img src={Facebook} />
            </span>
            <p>Log In with Facebook</p>
        </div>
    );
}

export { FacebookLoginButton };