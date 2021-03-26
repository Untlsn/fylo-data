import React from 'react';
import * as S from './style';

const IconButton = ({ children}: { children: any }) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
};

export default IconButton;
