import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { accountService } from '@/_services';
import { history } from '@/_helpers';
import { Login } from './Login';
import { Register } from './Register';
import { VerifyEmail } from './VerifyEmail';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { getCookie } from '../_services/cookies.service';

function Account({ match }) {
    // const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        console.log("account page", match);
        let token =  getCookie("token");
        console.log("account page token", token);
        console.log("account page accountService.userValue", accountService.userValue);
        if (token) {
            console.log("pushing");
            history.push('/home');
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Switch>
                            <Route path={`${match}/login`} component={Login} />
                            <Route path={`${match}/register`} component={Register} />
                            <Route path={`${match}/verify-email`} component={VerifyEmail} />
                            <Route path={`${match}/forgot-password`} component={ForgotPassword} />
                            <Route path={`${match}/reset-password`} component={ResetPassword} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Account };