import React from 'react';
import './ChangePassword.less';

import { Card } from '@/_shared/card/card';
import { TextField } from '@/_shared/TextField/TextField';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';

export const ChangePassword = () => {
   return (
      <div className="container-fluid">
         <div className="changepassword-page">
            <div className="row">
               <div className="col-md-4">
                  <ProfileCard />
               </div>
               <div className="col-md-8">
                  <Card>
                     <div className="doughnut-container">
                        <Doughnut
                           value="7.20"
                           footerTitle="Your available balance"
                        />
                        <Doughnut
                           color="#03DAC5"
                           value="7.20"
                           footerTitle="Your available dream coins"
                        />
                     </div>
                  </Card>
                  <div className="d-flex align-items-start mt-3">
                     <H1Heading>Change Password</H1Heading>
                     <button className="btn btn-primary password-btn">
                        update
                     </button>
                  </div>
                  <div className="mt-4 changepassword-container">
                     <TextField
                        label="Old Passowrd"
                        showPasswordIcon
                        type="password"
                     />
                     <TextField
                        label="New Password"
                        showPasswordIcon
                        type="password"
                     />
                     <TextField
                        label="Confirm Password"
                        showPasswordIcon
                        type="password"
                     />
                  </div>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
