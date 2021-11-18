import React, { useState, useEffect } from 'react';
import './DreamCartInformation.css';

import Card from '@/_shared/dreamCart/Card';
import { TextField } from '@/_shared/TextField/TextField';
import { SelectField } from '@/_shared/SelectField/SelectField';
import CheckoutBtns from '@/_shared/dreamCart/CheckoutBtns';
import CreditCard from '@/_assets/dreamCart/CreditCard.png';
import DreamCartSteper from '@/_shared/dreamCart/DreamCartSteper';
import { NewsLetter } from '@/_shared/newsletter/newsletter';
import { CountryCodeField } from '@/_shared/CountryCodeField/CountryCodeField';
import OrderSummery from '@/_shared/dreamCart/OrderSummery';
import CheckoutBilling from '@/_assets/dreamCart/CheckoutBilling.svg';
import GoogleIcon from '@/_assets/icons/google-sm.png';
import FacebookIcon from '@/_assets/icons/facebook-sm.png';
import AppleIcon from '@/_assets/icons/apple-sm.png';

const DreamCartInformation = () => {
   const [imageShow, setImageShow] = useState(false);

   useEffect(() => {
      if (window.innerWidth < 576) setImageShow(true);
      window.addEventListener('resize', () => {
         if (window.innerWidth < 576) setImageShow(true);
         else setImageShow(false);
      });

      return window.removeEventListener('resize', () => {});
   }, []);

   return (
      <>
         <DreamCartSteper />
         <div className="container-fluid">
            <div className="row">
               <div className="col-12 p-0">
                  <OrderSummery />
               </div>
               <div className="col-md-12 col-lg-5 py-md-5 py-3 px-md-3 px-1">
                  <div className="container px-md-5 px-4">
                     <div className="row">
                        <div className="col-md-12">
                           <TextField label="First Name" />
                        </div>
                        <div className="col-md-12">
                           <TextField label="Last Name" />
                        </div>
                        <div className="col-md-12">
                           <TextField label="Email" />
                        </div>
                        <div className="col-md-6">
                           <SelectField label="Nationality" />
                        </div>
                        <div className="col-md-6">
                           <SelectField label="City" />
                        </div>
                        <div className="col-6 col-md-6">
                           <div className="d-flex align-items-center mb-2">
                              <div className="">
                                 <input
                                    type="radio"
                                    checked
                                    className="radioButtonCustom"
                                 />
                              </div>
                              <div className="ml-2 radioButttonFont font-16">
                                 Male
                              </div>
                           </div>
                        </div>
                        <div className="col-6 col-md-6">
                           <div className="d-flex align-items-center mb-2">
                              <div className="">
                                 <input
                                    type="radio"
                                    checked
                                    className="radioButtonCustom"
                                 />
                              </div>
                              <div className="ml-2 radioButttonFont font-16">
                                 Female
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <CountryCodeField label="Country Code" />
                        </div>
                        <div className="col-md-12">
                           <TextField label="Invitation Code" />
                        </div>
                        <div className="col-md-12">
                           <div className="d-flex align-items-center mb-2">
                              <div className="pt-2">
                                 <input
                                    type="radio"
                                    checked
                                    className="radioButtonCustom"
                                 />
                              </div>
                              <div className="ml-2 radioButttonFont font-16">
                                 I accept the Policy and Terms{' '}
                                 <a href="#" className="textColor">
                                    Read
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className="mt-5">
                              <CheckoutBtns
                                 text="Countinue to Payment"
                                 img={imageShow ? CheckoutBilling : CreditCard}
                                 color="#fff"
                                 backgroundColor="#1663BE"
                                 border="1px solid #707070"
                              />
                           </div>
                        </div>
                     </div>

                     <div className="d-flex align-items-center justify-content-center flex-column dream-cart__social-container">
                        <h6>Sign in with</h6>
                        <ul className="dream-cart__social">
                           <li>
                              <a href="#">
                                 <img src={GoogleIcon} alt="google" />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={FacebookIcon} alt="facebook" />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={AppleIcon} alt="apple" />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-12 col-lg-7 cardNoShowLess768">
                  <Card />
               </div>
               <div className="col-12">
                  <NewsLetter />
               </div>
            </div>
         </div>
      </>
   );
};

export default DreamCartInformation;