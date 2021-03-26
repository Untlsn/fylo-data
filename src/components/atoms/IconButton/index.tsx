import React from 'react';
import * as S from './style';

const IconButton = ({ iconSrc }: { iconSrc: string }) => {
  return (
    <S.Wrapper>
      <S.Icon src={iconSrc} />
    </S.Wrapper>
  );
};

export default IconButton;
