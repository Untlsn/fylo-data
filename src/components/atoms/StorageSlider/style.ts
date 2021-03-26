import styled from 'styled-components';

export const Slider = styled.div<{ sliderPercent: number }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  height: 1.5em;
  width: 18em;
  border-radius: 1.5em;

  &::before, &::after {
    position: absolute;
    border-radius: inherit;
  }

  &::before {
    content: '';
    left: .1em;
    top: .1em;
    height: 1.3em;
    width: calc(100% / 100 * ${({ sliderPercent }) => sliderPercent} - .2em);
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.cream} 0%,
      ${({ theme }) => theme.colors.pink} 100%
    );
  }
  &::after {
    height: 1em;
    width: 1em;
    background-color: white;
    top: .25em;
    left: calc(100% / 100 * ${({ sliderPercent }) => sliderPercent} - 1.4em);
    content: ${({ sliderPercent }) => sliderPercent < 10 ? 'none' : '""'};
  }
  @media (orientation: landscape) {
    width: 35em;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
