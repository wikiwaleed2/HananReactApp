import React from 'react';
import DreamCartHeader from '../../_shared/dreamCart/DreamCartHeader';
import './dreamCart.css';
const DreamCartSteper = () => {
   return (
      <>
         <div className="dreamCartHeading">
            <div className="dreamCartTitle">Dream Cart</div>
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
