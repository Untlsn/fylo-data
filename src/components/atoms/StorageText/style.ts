import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.grayishBlue};
  font-size: .9em;
  @media (orientation: landscape) {
    font-size: 1.1em;
  }
  
  b {
    color: white;
  }
`;
