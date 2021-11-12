import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   padding: 2.5rem 0;
   text-align: center;
   background: #cbd5e1;
   box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

   @media only screen and (max-width: 767px) {
      padding: 1.5rem 0;
   }
`;

const Heading = styled.h1`
   color: #104a8e;
   font-weight: 400;

   @media only screen and (max-width: 767px) {
      font-weight: 600;
      font-size: 25px;
   }
`;

export const SubHeader = ({ title }) => {
   return (
      <Container>
         <Heading>{title}</Heading>
      </Container>
   );
};
