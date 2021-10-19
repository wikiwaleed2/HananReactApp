import styled from 'styled-components';

export const H1Heading = styled.h1`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: left;
   color: ${({ color }) => color || '#104a8e'};
   font-size: ${({ fontSize }) => `${fontSize}px`};
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
`;

export const H6Heading = styled.h6`
   font-weight: ${({ fontWeight }) => fontWeight || '500'};
   text-align: left;
   color: ${({ color }) => color || '#104a8e'};
`;
