import React from 'react';
import './EarnCoins.less';

import DreamIcon from '@/_assets/images/dream-icon.png';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import {
   H1Heading,
   Paragraph,
} from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';

export const Earncoins = () => {
   return (
      <div className="container-fluid">
         <div className="earncoins-page">
            <div className="row">
               <div className="col-md-4">
                  <ProfileCard />
               </div>
               <div className="col-md-8">
                  <div className="d-flex align-items-center">
                     <H1Heading>Dream Coins</H1Heading>
                     <img src={DreamIcon} alt="coin" />
                  </div>
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
                  <div className="text-center mt-3">
                     <Paragraph>
                        You can redeem 720 Dream Coins worth AED 7.20 at
                     </Paragraph>
                     <Paragraph>your next purchase</Paragraph>
                     <H1Heading marginTop="60" textAlign="center">
                        Earn Dream Coins
                     </H1Heading>
                  </div>
                  <div className="copy-container mt-4">
                     <input className="copy-input" value="mar12" />
                     <button className="btn copy-btn">copy</button>
                  </div>
                  <div className="text-center mt-5">
                     <Paragraph fontSize="1" fontWeight="500">
                        You can use the above reference code to invite your
                     </Paragraph>
                     <Paragraph fontSize="1" fontWeight="500">
                        friends and earn 100 Dream Coins once they make a
                     </Paragraph>
                     <Paragraph fontSize="1" fontWeight="500">
                        purchase.
                     </Paragraph>
                  </div>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
