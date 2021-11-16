import React, { useState, useEffect } from 'react';

import CheckoutBtns from '@/_shared/dreamCart/CheckoutBtns';
import AppleStore from '@/_assets/dreamCart/AppleStore.png';
import GooglePlay from '@/_assets/dreamCart/GooglePlay.png';
import CreditCard from '@/_assets/dreamCart/CreditCard.png';
import CheckoutBilling from '@/_assets/dreamCart/CheckoutBilling.svg';

const CardBottom = ({ checkoutAsGuest }) => {
   const [HideCheckout, setHideCheckout] = useState(true);
   const [imageShow, setImageShow] = useState(false);

   useEffect(() => {
      window.addEventListener('resize', () => {
         if (window.innerWidth < 576) setImageShow(true);
         else setImageShow(false);
      });

      return window.removeEventListener('resize', () => {});
   }, []);

   const showButtons = () => {
      setHideCheckout(!HideCheckout);
   };

   return (
      <div className="marginTop-Sm">
         {checkoutAsGuest ? (
            <div className="container-fluid px-0 ">
               <div className="row">
                  <div
                     className="col-6 col-sm-6 col-md-6"
                     // style={{ textAlign: 'center', padding: '0', margin: '0' }}
                  >
                     <CheckoutBtns
                        text="Sign Up"
                        backgroundColor="#1663BE"
                        color="#FFFFFF"
                        border="1px solid #707070"
                     />
                  </div>
                  <div className="col-6 col-sm-6 col-md-6">
                     <CheckoutBtns
                        text="Login"
                        backgroundColor="#1663BE"
                        color="#FFFFFF"
                        border="1px solid #707070"
                     />
                  </div>
               </div>
            </div>
         ) : (
            <CheckoutBtns
               img={imageShow ? CheckoutBilling : CreditCard}
               text="Countinue for Checkout"
               backgroundColor="#1663BE"
               color="#FFFFFF"
               border="1px solid #707070"
               toggler={showButtons}
            />
         )}

         <CheckoutBtns
            img={GooglePlay}
            text="Google play store"
            border="1px solid #707070"
            color="#5A5757"
         />
         <CheckoutBtns
            img={AppleStore}
            text="Apple store"
            color="#5A5757"
            border="1px solid #707070"
         />
      </div>
   );
};

export default CardBottom;
