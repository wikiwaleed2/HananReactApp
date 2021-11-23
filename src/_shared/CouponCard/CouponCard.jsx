import React from 'react';
import './CouponCard.css';

import CouponsCardBg from '../../_assets/images/CouponsCardBg.png';
import qrCode from '../../_assets/images/qrCode.png';
import Logo from '../../_assets/images/Logo.png';

export const CouponCard = () => {
   return (
      <>
         <div className="coupons-card">
            <img src={CouponsCardBg} alt="" width="100%" />
            <div className="header">
               <img src={Logo} alt="" />
            </div>
            <div className="EL-number">EL-74837-43211</div>
            <div className="EL-coupon">Coupons No.</div>
            <div className="price">Price</div>
            <div className="Trip-country">Maldives Trip</div>
            <div className="Qr">
               <img src={qrCode} alt="QR" style={{ width: '100%' }} />
            </div>
            <div className="dottedLine"></div>
            <div className="purchase-date">Purchase On:</div>
            <div className="date">12:00 PM, 12 June 2021</div>
            <div className="coupon-name">Name:</div>
            <div className="name">Muhammad Zeeshan</div>
         </div>
      </>
   );
};
