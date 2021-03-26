import React from 'react';
import * as S from './style';

const StorageText = ({ used }: { used: number }) => {
  return (
    <S.Wrapper>
      You&apos;ve used <b>{used} GB</b> of your storage
    </S.Wrapper>
  );
};

export default StorageText;
