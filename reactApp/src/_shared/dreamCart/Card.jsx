import React, { useState } from 'react';
import './dreamCart.css';

import Bottle from '../../_assets/dreamCart/Picture1.png';
import Delete from '../../_assets/dreamCart/delete.png';
import Minus from '../../_assets/dreamCart/minus.png';
import Plus from '../../_assets/dreamCart/plus.png';
const Card = () => {
   const [count, setCount] = useState(0);
   const incrementHandler = () => {
      setCount(count + 1);
   };
   const decrementHandler = () => {
      setCount(count - 1);
   };
   return (
      <>
         <div className="container boxShadow mb-3 mt-1 containerMedium">
            <div className="row d-flex justify-content-between cardBox">
               <div className="col-7 col-sm-7 col-md-7 col-lg-5">
                  <div className="d-flex justify-content-between detamCartLeft">
                     <div className="count-DreamCart">1.</div>
                     <div className="Product-DreamCart ">
                        <img src={Bottle} alt="" />
                     </div>
                     <div className="Product-deatils-DreamCart">
                        <div className="maldivs-trip">Maldives Trip</div>
                        <p>Enter to win</p>
                        <p>
                           you will rdceived <b>720 dream coins</b> for this
                           purchase
                        </p>
                        <p>
                           In partnership with <b>ABC Tours</b>
                        </p>
                        <p className="d-flex align-items-center">
                           <img src={Delete} alt="delete" />
                           <span className="ml-1">Remove</span>
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-5 col-sm-5 col-md-4">
                  <div className="AlignRight">
                     <div className="maldivs-trip text-center">AED 720</div>
                     <div className="productCount-dreamCart mt-4 mb-2">
                        <button
                           className="decrementBtn"
                           onClick={decrementHandler}
                        >
                           <img src={Minus} alt="Decrement" />
                        </button>
                        <div className="dreamXCart-counter">{count}</div>
                        <button
                           className="incrementBtn"
                           onClick={incrementHandler}
                        >
                           <img src={Plus} alt="increment" />
                        </button>
                     </div>
                     <p className="text-center PurchaseEntries">
                        1 Purchase equals to 1 entry
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-9 col-md-8 pl-5">
                  <p className="pl-4 fontSizeNote">
                     Note: Every Product you purchase will be donated and
                     channeled through your partners to help less fortunate.
                  </p>
               </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center cardBox pb-2">
               <div className="col-8 col-sm-8 col-md-10">
                  <div className="d-flex align-items-center">
                     <div className="count-DreamCart">2.</div>

                     <div className="Product-deatils-DreamCart pl-4">
                        <div className="maldivs-trip ">Transection fee</div>
                     </div>
                  </div>
               </div>
               <div className="col-4 col-sm-4 col-md-2">
                  <div className=" AlignRight">
                     <div className="maldivs-trip">AED 1</div>
                  </div>
               </div>
            </div>
            <div className="horizonatl-line pb-2"></div>
            <div className="row d-flex  cardBox pb-4">
               <div className="col-8 col-sm-4 col-md-4 text-center order1">
                  <div className=" d-flex align-items-center justify-content-center alignLeft">
                     <div className="maldivs-trip totalFee">
                        Total <span className="font400">(Inc VAT)</span>
                     </div>
                  </div>
               </div>
               <div className="horizonatl-line pb-2 order4"></div>
               <div className="col-10 col-sm-5 col-md-5 inputContainer order3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="discount code"
                  />
                  <button className="btn buttonApply">apply</button>
               </div>
               <div className="col-4 col-sm-3 col-md-3 ml-auto order2">
                  <div className=" AlignRight">
                     <div className="maldivs-trip">AED 721</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
