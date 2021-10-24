import React from 'react';
import './ActiveCoupons.less';

import { Card } from '@/_shared/card/card';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { CouponCard } from '../../_shared/CouponCard/CouponCard';
import { DownloadButton } from '../../_shared/DownloadButton/DownloadButton';

export const ActiveCoupons = () => {
   return (
      <div className="container-fluid">
         <div className="active-coupons-page">
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
                  <H1Heading className="mt-3">Your Active Coupons</H1Heading>
                  <div className="couponcard-container">
                     <span className="border-card"></span>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="px-2 text-center">
                              <CouponCard />
                              <DownloadButton label="Download Receipt" />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="px-2 text-center">
                              <CouponCard />
                              <DownloadButton label="Download Receipt" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
