import React, { useState } from 'react';
import CheckoutBtns from '../../_shared/dreamCart/CheckoutBtns';
import AppleStore from '../../_assets/dreamCart/AppleStore.png';
import GooglePlay from '../../_assets/dreamCart/GooglePlay.png';
import CreditCard from '../../_assets/dreamCart/CreditCard.png';
const CardBottom = () => {
   const [Buttons, setButtons] = useState(false);
   const [HideCheckout, setHideCheckout] = useState(true);

   const showButtons = () => {
      setButtons(!Buttons);
      setHideCheckout(!HideCheckout);
   };
   return (
      <>
         {Buttons ? (
            <div className="container-fluid px-0">
               <div className="row">
                  <div className="col-md-6">
                     <CheckoutBtns
                        text="Sign Up"
                        backgroundColor="#1663BE"
                        color="#FFFFFF"
                        border="1px solid #707070"
                     />
                  </div>
                  <div className="col-md-6">
                     <CheckoutBtns
                        text="Login"
                        backgroundColor="#1663BE"
                        color="#FFFFFF"
                        border="1px solid #707070"
                     />
                  </div>
               </div>
            </div>
         ) : null}
         {HideCheckout ? (
            <CheckoutBtns
               img={CreditCard}
               text="Countinue for Checkout"
               backgroundColor="#1663BE"
               color="#FFFFFF"
               border="1px solid #707070"
               toggler={showButtons}
            />
         ) : null}

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
      </>
   );
};

export default CardBottom;
