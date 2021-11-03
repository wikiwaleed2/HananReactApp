import React from 'react';
import './DreamCart.css';

import Basket from '../../_assets/dreamCart/Basket.svg';
import DownErrow from '../../_assets/dreamCart/DownErrow.svg';

const OrderSummery = () => {
   return (
      <div className="OrderSummer-container">
         <div className="OrderSummery">
            <img src={Basket} alt="Basket" />
            <span>Show Order Summery</span>
         </div>
         <div className="dropErrow">
            <img src={DownErrow} alt="DownErrow" />
         </div>
      </div>
   );
};

export default OrderSummery;
