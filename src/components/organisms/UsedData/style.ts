import styled from 'styled-components';
import { BlueWrapper } from '@style/reusable';

export const Wrapper = styled(BlueWrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 3em;
  max-height: 12em;
  min-width: 20em;
  max-width: 90vw;
  
  @media (orientation: landscape) {
    min-width: 40em;
  }
`;
