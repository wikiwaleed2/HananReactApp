import React from 'react';
import './profile.less';

import { Card } from '@/_shared/card/card';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import {
   H1Heading,
   H5Heading,
} from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { DonationCard } from '../../_shared/DonationCard/DonationCard';

export const Profile = () => {
   return (
      <div className="container-fluid">
         <div className="profile-page">
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
                  <section className="donation-section">
                     <div className="row">
                        <div className="col-md-8">
                           <H1Heading>Your Donations</H1Heading>
                           <DonationCard
                              title="Helped built School in Africa"
                              subTitle="Raised 1 million AED"
                           />
                           <DonationCard
                              title="Helped built School in Africa"
                              subTitle="Raised 1 million AED"
                           />
                        </div>
                        <div className="col-md-4">
                           <Card>
                              <div className="helped-raise">
                                 <H5Heading fontWeight="400">
                                    You have helped raise
                                 </H5Heading>
                                 <H5Heading fontWeight="400" color="#edb200">
                                    AED
                                 </H5Heading>
                                 <H1Heading
                                    fontSize="40"
                                    fontWeight="400"
                                    color="#edb200"
                                 >
                                    20,000
                                 </H1Heading>
                              </div>
                           </Card>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
