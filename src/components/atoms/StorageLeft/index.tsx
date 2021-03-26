import React from 'react';
import * as S from './style';

const StorageLeft = ({ left }: { left: number }) => {
  return (
    <S.Wrapper>
      <S.BigText>{left}</S.BigText>
      <S.SmallText>gb left</S.SmallText>
    </S.Wrapper>
  );
};

export default StorageLeft;
