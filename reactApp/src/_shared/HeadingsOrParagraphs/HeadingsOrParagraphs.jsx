import styled from 'styled-components';

export const H1Heading = styled.h1`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: ${({ textAlign }) => textAlign || 'left'};
   color: ${({ color }) => color || '#104a8e'};
   font-size: ${({ fontSize }) => `${fontSize}px`};
   margin-top: ${({ marginTop }) => `${marginTop}px` || '0px'};
`;

export const H3Heading = styled.h3`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: left;
   color: ${({ color }) => color || '#104a8e'};
`;

export const H5Heading = styled.h5`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: left;
   color: ${({ color }) => color || '#104a8e'};
   margin: 0;
   font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const H6Heading = styled.h6`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: left;
   color: ${({ color }) => color || '#104a8e'};
   margin: 0;
`;

export const Paragraph = styled.p`
   font-size: ${({ fontSize }) => `${fontSize}rem` || '1.2rem'};
   font-weight: ${({ fontWeight }) => fontWeight || '400'};
   color: ${({ color }) => color || '#104a8e'};
   margin: 0;
   text-align: ${({ textAlign }) => textAlign || 'left'};
   margin-bottom: ${({ marginBottom }) => `${marginBottom}px` || '0'};
`;
