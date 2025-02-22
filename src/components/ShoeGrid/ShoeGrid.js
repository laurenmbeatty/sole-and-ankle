import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug} >
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const ShoeWrapper = styled.div`
  flex: 1;
  flex-basis: 275px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export default ShoeGrid;
