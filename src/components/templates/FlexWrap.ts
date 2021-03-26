import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  flex-wrap: wrap;
  height: 100vh;
  padding-bottom: 40vh;
  
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export default FlexWrap;
