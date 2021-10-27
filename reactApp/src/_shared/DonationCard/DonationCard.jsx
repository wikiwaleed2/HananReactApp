import React from 'react';
import styled from 'styled-components';

import CardImage from '@/_assets/images/card-image.png';
import {
   H5Heading,
   H6Heading,
} from '../HeadingsOrParagraphs/HeadingsOrParagraphs';

const CardContainer = styled.div`
   display: flex;
   align-items: flex-start;
   height: 105px;
   margin-top: 20px;
`;

const ImageContainer = styled.div`
   width: 100px;
   height: 100px;
`;

const ReadMoreBtn = styled.span`
   display: inline-block;
   font-weight: 500;
   font-size: 14px;
   color: #edb200;
`;

export const DonationCard = ({ image = CardImage, title, subTitle }) => {
   return (
      <CardContainer>
         <ImageContainer>
            <img src={image} alt="card-image" className="img-fluid" />
         </ImageContainer>
         <div className="d-flex justify-content-between flex-column h-100">
            <div>
               <H5Heading fontWeight="600" fontSize="22">
                  {title}
               </H5Heading>
               <H6Heading>{subTitle}</H6Heading>
            </div>
            <ReadMoreBtn>Read more</ReadMoreBtn>
         </div>
      </CardContainer>
   );
};
