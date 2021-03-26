import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  
  @media (orientation: landscape) {
    align-items: flex-start;
  }
`;
