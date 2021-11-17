import React from 'react';
import './dreamCart.less';

import BackArrow from '../../_assets/dreamCart/BackArrow.svg';
import DreamCartHeader from '../../_shared/dreamCart/DreamCartHeader';

const DreamCartSteper = () => {
   return (
      <>
         <div className="dreamCartHeading">
            <div className="d-flex">
               <button className="btn backArrowButton">
                  <img src={BackArrow} alt="backarrow" />
               </button>
               <div className="dreamCartTitle">Dream Cart</div>
            </div>
            <div className="d-flex">
               <DreamCartHeader name="Billing" />
               <div className="DreamCart-Y-line"></div>
               <DreamCartHeader name="Information" />
               <div className="DreamCart-Y-line"></div>
               <DreamCartHeader name="Payment" />
               <div className="DreamCart-Y-line"></div>
               <DreamCartHeader name="Conformation" />
            </div>
         </div>
      </>
   );
};

export default DreamCartSteper;
