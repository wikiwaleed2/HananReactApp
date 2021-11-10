import React from 'react';
import './ActiveCoupons.less';

import { Card } from '@/_shared/card/card';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { CouponCard } from '../../_shared/CouponCard/CouponCard';
import { DownloadButton } from '../../_shared/DownloadButton/DownloadButton';
import { SubHeader } from '../../_components/SubHeader/SubHeader';

export const ActiveCoupons = () => {
   return (
      <div className="container-fluid">
         <div className="active-coupons-page">
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
                  <div className="d-md-none d-block">
                     <SubHeader title="Your Active Coupons" />
                  </div>
                  <H1Heading className="mt-3 d-md-block d-none">
                     Your Active Coupons
                  </H1Heading>
                  <div className="couponcard-container">
                     <span className="border-card"></span>
                     <div className="row">
                        <div className="col-lg-6 col-md-12">
                           <div className="px-2 text-center coupon-card__container">
                              <CouponCard />
                              <DownloadButton label="Download Receipt" />
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                           <div className="px-2 text-center coupon-card__container--1">
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
