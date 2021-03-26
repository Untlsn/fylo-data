import styled from 'styled-components';
import LogoImg from '@assets/icons/logo.inline.svg';

export const Wrapper = styled.div`
  transform: scale(.8);
  
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 3em 9em 3em 5em;
  border-radius: 1em 8em 1em 1em;
`;
export const Logo = styled.img.attrs({ src: LogoImg, alt: '' })`
  margin-bottom: 3em;
`;
