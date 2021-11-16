import React, { useState } from 'react';

import Card from '../../_shared/dreamCart/Card';
import CardBottom from '../../_shared/dreamCart/CardBottom';
import TermsCondition from '../../_shared/dreamCart/TermsCondition';
import DreamCartBanners from '../../_shared/dreamCart/DreamCartBanners';
import DreamCartSteper from '../../_shared/dreamCart/DreamCartSteper';
import { NewsLetter } from '../../_shared/newsletter/newsletter';

// import "./dreamCart.css";
const DreamCart = () => {
   const [checkoutAsGuest, setCheckoutAsGuest] = useState('guest');

   return (
      <div>
         <DreamCartSteper />
         <Card />
         <div className="container containerMedium">
            <div className="row">
               <div className="col-md-8 reverseOrder">
                  <TermsCondition
                     checkoutAsGuest={checkoutAsGuest}
                     onRadioChange={(value) => {
                        setCheckoutAsGuest(value);
                     }}
                  />
                  <DreamCartBanners />
               </div>
               <div className="col-md-4 U-marginX-25">
                  <CardBottom
                     checkoutAsGuest={checkoutAsGuest === 'notGuest'}
                  />
               </div>
               <div className="col-12 d-md-block d-none">
                  <NewsLetter />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DreamCart;
