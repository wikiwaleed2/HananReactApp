import React from 'react';
import './CouponCard.less';

import CardHeader from '@/_assets/images/card-header-img.png';
import BarcodeImage from '@/_assets/images/barcode.png';
import { H5Heading } from '../HeadingsOrParagraphs/HeadingsOrParagraphs';

export const CouponCard = () => {
   return (
      <div className="coupon-card">
         <div className="d-flex align-items-center justify-content-between section-1">
            <img src={CardHeader} alt="logo" className="img-fluid" />
            <div>
               <div className="header-number">
                  <H5Heading fontSize="18" fontWeight="900">
                     EL-00495-00164
                  </H5Heading>
               </div>
               <div className="subtitle">Coupon No.</div>
            </div>
         </div>
         <div className="section-2">
            <div className="mt-2">
               <div className="title">Prize</div>
               <div className="prize-name">Maldives Trip</div>
            </div>
            <img src={BarcodeImage} alt="barcode" className="img-fluid" />
         </div>
         <div className="section-3">
            <div>
               <div className="title">Purchased on:</div>
               <div className="description">12:48 PM 25 March,2021</div>
            </div>
            <div>
               <div className="title">Name:</div>
               <div className="description">Maria Andrejczyk</div>
            </div>
         </div>
      </div>
   );
};
