import React from 'react';
import './Signup.less';
import '../../home/index.less';

export default function Signup() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                    <div className="SignupForm">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sign Up</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Log In</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="formCont">
                                    <div className="subscription-form">
                                        <input type="text" />
                                        <span>First Name</span>
                                    </div>
                                    <div className="subscription-form">
                                        <input type="text" />
                                        <span>Last Name</span>
                                    </div>
                                    <div className="subscription-form">
                                        <input type="email" />
                                        <span>Email</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Signup };
