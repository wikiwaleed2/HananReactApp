import React from 'react';
import './AllWinners.less';
import AllWinners from '../../components/WinnerCard/AllWinners';

import Slider from 'react-slick';
import sliderImg from '@/_assets/images/sliderImg.png';
import sliderImg2 from '@/_assets/images/sliderImg2.png';
import sliderImg3 from '@/_assets/images/sliderImg3.png';
import sliderImg4 from '@/_assets/images/sliderImg4.png';
import sliderImg5 from '@/_assets/images/sliderImg5.png';
import { NewsLetter } from '@/_shared/newsletter/newsletter';

const Winners = () => {
   const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
   };
   return (
      <>
         <div className="container">
            <Slider {...settings} className="slider__winner">
               <div>
                  <img src={sliderImg} />
                  <div className="slide__caption">
                     <h3>Kate J.</h3>
                     <p>Won Sky diving at Abu Dhabi</p>
                  </div>
               </div>
               <div>
                  <img src={sliderImg2} />
                  <div className="slide__caption">
                     <h3>Kate J.</h3>
                     <p>Won Sky diving at Abu Dhabi</p>
                  </div>
               </div>
               <div>
                  <img src={sliderImg3} />
                  <div className="slide__caption">
                     <h3>Kate J.</h3>
                     <p>Won Sky diving at Abu Dhabi</p>
                  </div>
               </div>
               <div>
                  <img src={sliderImg4} />
                  <div className="slide__caption">
                     <h3>Kate J.</h3>
                     <p>Won Sky diving at Abu Dhabi</p>
                  </div>
               </div>
               <div>
                  <img src={sliderImg5} />
                  <div className="slide__caption">
                     <h3>Kate J.</h3>
                     <p>Won Sky diving at Abu Dhabi</p>
                  </div>
               </div>
            </Slider>
         </div>
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="AllWinners">All Winners</div>
               </div>
            </div>
            <div className="row">
               {[1, 2, 4, 5, 6, 7].map((item) => (
                  <div key={item} className="col-md-4">
                     <AllWinners />
                  </div>
               ))}
            </div>
         </div>
         <NewsLetter />
      </>
   );
};

export default Winners;
