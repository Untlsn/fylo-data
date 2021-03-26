import styled from 'styled-components';

export const Wrapper = styled.button`
  height: 4em;
  width: 4em;
  border: none;
  border-radius: .5em;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: white;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    transition: opacity .3s;
    opacity: 0;
  }
  &:hover::before {
    opacity: .1;
  }
`;
export const Icon = styled.img.attrs({ alt: '' })`
  transform: scale(1.2);
`;
