import React from 'react';
import './Confirmation.less';

import { CouponCard } from '@/_shared/CouponCard/CouponCard';
import { DownloadButton } from '@/_shared/DownloadButton/DownloadButton';
import flower from '@/_assets/images/flower.png';
import DreamCartSteper from '@/_shared/dreamCart/DreamCartSteper';
import { NewsLetter } from '@/_shared/newsletter/newsletter';

const Confirmation = () => {
   return (
      <>
         <DreamCartSteper />
         <div className="ConfirmationHeader">
            <h1 className="confirmation-Color-h">Thank You</h1>
            <img src={flower} alt="image" />
            <h1 className="confirmation-Color-h">Good Luck</h1>
            <p className="confirmation-Color-p">Your order has been received</p>
            <p className="confirmation-Color-p">
               Please check you email or dashboard for further details
            </p>
            <p className="confirmation-Color-h">Your Coupon</p>
            <div className="d-inline-block">
               <CouponCard />
               <p className="do_not_share__p">
                  *Please do not share your coupon or receipt
               </p>
            </div>
            <div className="con__btn__containers">
               <DownloadButton label="Download Receipt" />
               <DownloadButton
                  className="without__icon btn btn-download"
                  label="continue shopping"
               />
            </div>
         </div>
         <div className="d-md-block d-none">
            <NewsLetter />
         </div>
      </>
   );
};

export default Confirmation;
