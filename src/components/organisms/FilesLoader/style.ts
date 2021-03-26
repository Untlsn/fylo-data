import styled from 'styled-components';
import LogoImg from '@assets/icons/logo.inline.svg';
import { BlueWrapper } from '@style/reusable';

export const Wrapper = styled(BlueWrapper)`
  border-top-right-radius: 8em;
  padding-right: 9em;
  max-height: 12em;
  min-width: 20em;
  max-width: 90vw;
`;
export const Logo = styled.img.attrs({ src: LogoImg, alt: '' })`
  margin-bottom: 1em;
`;
