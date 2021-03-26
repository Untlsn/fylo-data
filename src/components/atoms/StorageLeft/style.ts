import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paleBlue};
  height: 6em;
  width: 14em;
  border-radius: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: .9em;
  
  position: absolute;
  @media (orientation: portrait) {
    bottom: -3em;
  }
  @media (orientation: landscape) {
    top: -4em;
    right: 2em;
    
    &::after {
      content: '';
      top: 4em;
      right: 0;
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 2em solid transparent;
      border-bottom: 2em solid transparent;
      border-right: 2em solid ${({ theme }) => theme.colors.paleBlue};
    }
  }
`;

export const BigText = styled.div`
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  font-size: 3em;
`;
export const SmallText = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;
