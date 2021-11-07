import React from 'react';
import './profile.less';

import { Card } from '@/_shared/card/card';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { SubHeader } from '@/_components/SubHeader/SubHeader';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import {
   H1Heading,
   H5Heading,
   H2Heading,
   H6Heading,
} from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { DonationCard } from '../../_shared/DonationCard/DonationCard';

export const Profile = () => {
   return (
      <div className="container-fluid">
         <div className="profile-page">
            <div className="row">
               <div className="col-md-4 d-md-block d-none">
                  <ProfileCard />
               </div>
               <div className="col-md-8 col-sm-12 p-md-2 p-0">
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
                  <section className="donation-section container-fluid">
                     <div className="row">
                        <div className="col-md-8">
                           <div className="d-md-none d-block">
                              <SubHeader title="Your Donations" />
                              <H5Heading className="m-4 text-center">
                                 You have raised
                              </H5Heading>
                              <div className="my-5">
                                 <H5Heading
                                    textAlign="center"
                                    fontWeight="400"
                                    color="#edb200"
                                 >
                                    AED
                                 </H5Heading>
                                 <H2Heading
                                    fontSize="50"
                                    fontWeight="400"
                                    color="#edb200"
                                    textAlign="center"
                                 >
                                    20,000
                                 </H2Heading>
                              </div>
                              <H2Heading
                                 fontSize="24"
                                 textAlign="center"
                                 fontWeight="600"
                                 className="mt-3"
                              >
                                 Causes that you supported
                              </H2Heading>
                           </div>
                           <div className="d-md-block d-none">
                              <H1Heading>Your Donations</H1Heading>
                           </div>
                           <div className="p-md-0 p-2">
                              <DonationCard
                                 title="Helped built School in Africa"
                                 subTitle="Raised 1 million AED"
                              />
                              <DonationCard
                                 title="Helped built School in Africa"
                                 subTitle="Raised 1 million AED"
                              />
                           </div>
                        </div>
                        <div className="col-md-4">
                           <Card className="mt-3 d-md-block d-none">
                              <div className="helped-raise">
                                 <H5Heading fontWeight="400">
                                    You have helped raise
                                 </H5Heading>
                                 <H5Heading fontWeight="400" color="#edb200">
                                    AED
                                 </H5Heading>
                                 <H1Heading
                                    fontSize="40"
                                    fontWeight="500"
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
