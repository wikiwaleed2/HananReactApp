import React, { useState } from 'react';
import './GetInTouch.less';

import styled from 'styled-components';
import InstaImage from '@/_assets/images/insta-blue.png';
import FacebookImage from '@/_assets/images/facebook-icon.svg';
import TwitterImage from '@/_assets/images/twitter-blue.png';
import LinkedInImage from '@/_assets/images/linkedin-blue.png';
import { SubHeader } from '@/_components/SubHeader/SubHeader';
import { TextField } from '@/_shared/TextField/TextField';
import { Textarea } from '@/_shared/Textarea/Textarea';
import { Paragraph } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { SocialIcon } from '../../_shared/SocialIcon/SocialIcon';
import { SendButton } from '../../_shared/SendButton/SendButton';

const ColorText = styled.span`
   display: inline-block;
   color: ${({ color }) => color || '#EDB200'};
`;

export const GetInTouch = () => {
   return (
      <div>
         <SubHeader title="Get in Touch" />
         <Paragraph className="py-3 text-center" fontWeight="500">
            Want to get in touch? Submit your quires here and we will get back
            to you as soon as possible
         </Paragraph>
         <div className="get-container">
            <div className="row">
               <div className="col-6 d-lg-block d-md-block d-sm-none d-none">
                  <div className="paragraph-fluid">
                     <div className="paragraph-container">
                        <Paragraph
                           textAlign="justify"
                           marginBottom="20"
                           fontSize="1"
                        >
                           <ColorText>Dream Makers</ColorText> is owned and
                           operated by DMG Enterprises General Trading LLC
                           (hereinafter referred to as “
                           <ColorText>Dream Makers</ColorText>”). We are a Dubai
                           based company incorporated in 2021 under the
                           Department of Economic Development in Dubai.
                        </Paragraph>

                        <Paragraph
                           textAlign="justify"
                           marginBottom="20"
                           fontSize="1"
                        >
                           Our mission is to provide people of all walks of life
                           the opportunity to win the prize of their dreams at a
                           very affordable price. Our prizes rage from holidays,
                           houses, gold, cars, electronics and lifestyle.
                        </Paragraph>

                        <Paragraph
                           textAlign="justify"
                           marginBottom="20"
                           fontSize="1"
                        >
                           In addition to helping people realize their dreams we
                           also donate all products purchased to charity so not
                           only do our customers benefit but people less
                           fortunate also benefit.
                        </Paragraph>
                     </div>
                     <SocialIcon />
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                  <form>
                     <TextField label="Name" />
                     <TextField label="Phone Number" />
                     <TextField label="Email" />
                     <Textarea label="Message" rows="6" />
                  </form>
                  <div className="text-center">
                     <SendButton />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
