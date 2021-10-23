import React from 'react';
import './google-login-button.less';
import Google from '@/_assets/images/google.png';

function GoogleLoginButton({mblStyle}) {

    return (
        <div className={ `google-btn ${mblStyle}` }>
            <span>
                <img src={Google} />
            </span>
            <p>Log In with Google</p>
        </div>
    );
}

export { GoogleLoginButton };