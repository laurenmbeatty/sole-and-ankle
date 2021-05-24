import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <WrappedButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </WrappedButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: baseline;
  padding: 0 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
  line-height: 40px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  margin-left: 24px;
  margin-right: 24px;
  &:not(:focus-visible) {
    outline: none;
  }
`;

const WrappedButton = styled(UnstyledButton)`
  align-self: center;
`

export default SuperHeader;
