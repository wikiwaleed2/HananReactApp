import React from 'react';
import Card from '../../_shared/dreamCart/Card';
import { TextField } from '../../_shared/TextField/TextField';
import { SelectField } from '../../_shared/SelectField/SelectField';
import CheckoutBtns from '../../_shared/dreamCart/CheckoutBtns';
import CreditCard from '../../_assets/dreamCart/CreditCard.png';
import DreamCartSteper from '../../_shared/dreamCart/DreamCartSteper';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import './DreamCartInformation.css';
const DreamCartInformation = () => {
   return (
      <>
         <DreamCartSteper />
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5 py-3 px-5">
                  <div className="container px-5">
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
                        <div className="col-md-6">
                           <div className="d-flex align-items-center mb-2">
                              <div className="">
                                 <input
                                    type="radio"
                                    checked
                                    className="radioButtonCustom"
                                 />
                              </div>
                              <div className="ml-2 radioButttonFont">Male</div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="d-flex align-items-center mb-2">
                              <div className="">
                                 <input
                                    type="radio"
                                    checked
                                    className="radioButtonCustom"
                                 />
                              </div>
                              <div className="ml-2 radioButttonFont">
                                 Female
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <TextField label="Number" />
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
                              <div className="ml-2 radioButttonFont">
                                 I accept the Policy and Terms{' '}
                                 <a href="#" className="textColor">
                                    Read
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <CheckoutBtns
                              text="Countinue to Payment"
                              img={CreditCard}
                              color="#fff"
                              backgroundColor="#1663BE"
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-7">
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
