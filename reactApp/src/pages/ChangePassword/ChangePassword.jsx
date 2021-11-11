import React from 'react';
import './ChangePassword.less';

import { Card } from '@/_shared/card/card';
import { TextField } from '@/_shared/TextField/TextField';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { PButton } from '../../_shared/PButton/PButton';

export const ChangePassword = () => {
   return (
      <div className="container-fluid">
         <div className="changepassword-page">
            <div className="row">
               <div className="col-md-4 d-md-block d-none">
                  <ProfileCard />
               </div>
               <div className="col-md-8">
                  <Card className="d-md-block d-none">
                     <div className="doughnut-container">
                        <Doughnut
                           title="AED"
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
                  <div className="change-password__heading-container mt-3">
                     <H1Heading>Change Password</H1Heading>
                     <PButton label="update" />
                  </div>
                  <div className="mt-4 changepassword-container">
                     <form>
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
                        <div className="text-center d-md-none d-block">
                           <PButton label="update" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="d-md-block d-none">
               <NewsLetter />
            </div>
         </div>
      </div>
   );
};
