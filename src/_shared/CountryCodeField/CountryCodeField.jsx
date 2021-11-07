import React, { useState } from 'react';
import './CountryCodeField.less';
import { COUNTRY_CODES } from './CountryCodes';

export const CountryCodeField = ({ label }) => {
   return (
      <div className="country-input__container">
         <div className="country-input__code">
            <div className="country-input-content">
               <select className="country-select">
                  {COUNTRY_CODES.map(({ dial_code }) => (
                     <option value={dial_code}>{dial_code}</option>
                  ))}
               </select>
               <label className="country-input">{label}</label>
            </div>
         </div>
         <div className="country-input__number">
            <div className="number-label-content">
               <input className="number-input" type="number" max={10} />
               <label className="number-label">Phone Number</label>
            </div>
         </div>
      </div>
   );
};
