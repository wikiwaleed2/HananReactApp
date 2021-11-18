import React from 'react';
import './dreamCart.less';

const TermsCondition = ({ checkoutAsGuest, onRadioChange }) => {
   return (
      <>
         <form action="#">
            {checkoutAsGuest === 'guest' && (
               <div className="d-flex align-items-center paddingleft-sm">
                  <div className="pt-2">
                     <input type="radio" checked className="radioBtnSize" />
                  </div>
                  <div className="ml-2 termsAcceptFont">
                     I accept the Policy and Terms{' '}
                     <a href="#" style={{ color: '#104A8E' }}>
                        Read
                     </a>
                  </div>
               </div>
            )}
            <div className="d-flex align-items-center mt-3 paddingleft-sm">
               <div className="pt-2">
                  <input
                     type="radio"
                     className="radioBtnSize"
                     name="checkout-guest"
                     checked={checkoutAsGuest === 'guest'}
                     value="guest"
                     onChange={({ target: { value } }) => {
                        onRadioChange(value);
                     }}
                  />
               </div>
               <div className="ml-2 radioButttonFontSize">
                  Checkout as Guest
               </div>
            </div>
            <div className="d-flex align-items-start paddingleft-sm">
               <div className="pt-1">
                  <input
                     type="radio"
                     className="radioBtnSize"
                     name="checkout-guest"
                     checked={checkoutAsGuest === 'notGuest'}
                     value="notGuest"
                     onChange={({ target: { value } }) => {
                        onRadioChange(value);
                     }}
                  />
               </div>
               <div className="ml-2 radioButttonFontSize">
                  checkout out with Dream Makers account
                  <p style={{ fontSize: '15px' }}>
                     Save time, Track Donations and score Rewards!
                  </p>
               </div>
            </div>
         </form>
      </>
   );
};

export default TermsCondition;