import React from 'react';

import Card from '../../_shared/dreamCart/Card';
import CardBottom from '../../_shared/dreamCart/CardBottom';
import TermsCondition from '../../_shared/dreamCart/TermsCondition';
import DreamCartBanners from '../../_shared/dreamCart/DreamCartBanners';
import DreamCartSteper from '../../_shared/dreamCart/DreamCartSteper';
import { NewsLetter } from '../../_shared/newsletter/newsletter';

// import "./dreamCart.css";
const DreamCart = () => {
   return (
      <div>
         <DreamCartSteper />
         <Card />
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <TermsCondition />
                  <DreamCartBanners />
               </div>
               <div className="col-md-4">
                  <CardBottom />
               </div>
               <div className="col-12">
                  <NewsLetter />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DreamCart;
