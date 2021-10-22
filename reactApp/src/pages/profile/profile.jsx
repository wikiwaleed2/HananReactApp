import React from 'react';
import './profile.less';

import AppBanner from '@/_assets/images/app-banner-1.svg';
import TopBanner from '@/_assets/images/top-banner-2.png';
import Heart from '@/_assets/images/heart.svg';

import { Card } from '@/_shared/card/card';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading, H5Heading } from '../../_shared/Headings/Headings';
import { NewsLetter } from '../../_shared/newsletter/newsletter';

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
            <div className="my-4">
               <div className="row">
                  <div className="col-md-6">
                     <img
                        src={AppBanner}
                        alt="banner-1"
                        className="img-fluid"
                     />
                  </div>
                  <div className="col-md-6">
                     <img
                        src={TopBanner}
                        alt="banner-2"
                        className="img-fluid"
                     />
                  </div>
               </div>
            </div>

            <NewsLetter />
         </div>
      </div>
   );
};
