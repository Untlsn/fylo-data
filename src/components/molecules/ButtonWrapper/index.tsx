import React from 'react';
import * as S from './style';
import IconButton from '@atoms/IconButton';
import * as I from '@assets/icons/fileIcons';

const ButtonWrapper = () => {
  return (
    <S.Wrapper>
      <IconButton iconSrc={I.iconDocument} />
      <IconButton iconSrc={I.iconFolder} />
      <IconButton iconSrc={I.iconUpload} />
    </S.Wrapper>
  );
};

export default ButtonWrapper;
