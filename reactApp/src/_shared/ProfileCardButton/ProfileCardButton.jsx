import React from 'react';
import './ProfileCardButton.less';

import RightArrow from '@/_assets/icons/right-arrow.svg';

export const ProfileCardButton = ({ leftIcon, label }) => {
   return (
      <div className="btn-block">
         <div className="d-flex align-items-center">
            <img src={leftIcon} alt="icon" className="img-fluid btn-image" />
            <span className="btn-text">{label}</span>
         </div>
         <img src={RightArrow} alt="right-arrow" />
      </div>
   );
};
