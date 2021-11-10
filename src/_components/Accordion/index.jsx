import React, { useState } from 'react';
import { Paragraph } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { CouponCard } from '../../_shared/CouponCard/CouponCard';
import { AccordionItem } from './AccordionItem/AccordionItem';
import dummyVideo from '@/_assets/images/dummy-video.mp4';
import playIcon from '@/_assets/images/play-icon.svg';
import qouteIcon from '@/_assets/images/qoute-icon.svg';
import samplePic from '@/_assets/images/sample-pic-3.jpg';

const Accordion = ({ items, isWinners }) => {

   let isArrange = false;
   const [activeItem, setActiveItem] = useState(0);
   const [activeChildItem, setActiveChildItem] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);

   if (window.innerWidth < 992) {
      isArrange = true;
   }

   const activeItemHandler = (id) => {
      if (activeItem == id) {
         setActiveItem(null);
         setActiveChildItem(null);
      }
      else {
         setActiveItem(id);
         setActiveChildItem(null);
      }
      setIsPlaying(false);
   };

   const activeChildItemHandler = (id) => {
      if (activeChildItem == id) {
         setActiveChildItem(null);
      }
      else {
         setActiveChildItem(id);
      }
      setIsPlaying(false);
   };

   let playVideo = (id) => {
      let video = document.getElementById(id);
      if (video.paused) {
         setIsPlaying(true);
         video.setAttribute('controls', '');
         video.play();
      } else {
         setIsPlaying(false);
         video.removeAttribute('controls');
         video.pause();
      }
   }

   return (
      <div>
         {items &&
            items.map((item) => (
               <div key={item.id}>
                  <AccordionItem
                     title={item.title}
                     iconHandler={() => {
                        activeItemHandler(item.id);
                     }}
                     showMinusIcon={item.id === activeItem}
                  />
                  {item.id === activeItem && (
                     <div className="ml-5">
                        {item.childs.map((item) => (
                           <div key={item.id}>
                              <AccordionItem
                                 smallFont
                                 title={item.title}
                                 iconHandler={() => {
                                    activeChildItemHandler(item.id);
                                 }}
                                 showMinusIcon={item.id === activeChildItem}
                              />
                              {activeChildItem === item.id && (

                                 <>
                                    {isWinners ?
                                       <div className="winners-experience">

                                          <div className="row">
                                             {!isArrange ?

                                                <div className="col-md-8 col-sm-12 m-none">
                                                   <div className="feature-video">

                                                      {!isPlaying ?
                                                         <button className="play-btn" onClick={() => playVideo(`trip-video-${item.id}`)} data-play-video={`#trip-video-${item.id}`}>
                                                            <img src={playIcon} alt="video play button icon" className="play" />
                                                         </button>
                                                         :
                                                         null}
                                                      <video className="trip-vid" id={`trip-video-${item.id}`}>
                                                         <source src={dummyVideo} type="video/mp4" />
                                                      </video>
                                                   </div>
                                                </div>

                                                : null
                                             }

                                             <div className="col-md-4 col-sm-12">
                                                <div className="details">
                                                   <img src={samplePic} className="prof-img" alt="" />
                                                   <div className="text-box">
                                                      <img src={qouteIcon} className="qoute-icon" alt="" />
                                                      <div className="text-wrapper">
                                                         <p className="text">Finally I will be able to relax
                                                            with my family somewhere
                                                            nice without worrying about
                                                         </p>
                                                         <p className="user-name">Muhammad Zubair</p>
                                                         <small>Safety Engineer in Dubai</small>
                                                      </div>
                                                   </div>

                                                   {isArrange ?
                                                      <div className="feature-video m-block">

                                                         {!isPlaying ?
                                                            <button className="play-btn" onClick={() => playVideo(`trip-video-${item.id}`)} data-play-video={`#trip-video-${item.id}`}>
                                                               <img src={playIcon} alt="video play button icon" className="play" />
                                                            </button>
                                                            :
                                                            null}
                                                         <video className="trip-vid" id={`trip-video-${item.id}`}>
                                                            <source src={dummyVideo} type="video/mp4" />
                                                         </video>
                                                      </div>
                                                      :
                                                      null
                                                   }


                                                   <CouponCard isWinners={true} />

                                                </div>
                                             </div>
                                          </div>



                                       </div>
                                       :
                                       <Paragraph color="#3d70ab">
                                          {item.description}
                                       </Paragraph>
                                    }

                                 </>


                              )}
                           </div>
                        ))}
                     </div>
                  )
                  }
               </div >
            ))}
      </div >
   );
};

export default Accordion;
