import React from 'react';
import './dreamCart.css';
const DreamCartHeader = (props) => {
   return (
      <>
         <div className="dreamCartProcess">
            <div className="dreamCartProcess__circle">
               <div className="dreamCartProcess__circle__dot"></div>
            </div>
            <div className="mt-2 dreamCart-tags">{props.name}</div>
         </div>
      </>
   );
};

export default DreamCartHeader;
