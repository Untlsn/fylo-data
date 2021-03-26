import React from 'react';
import * as S from './style';
import SliderWrapper from '@molecules/SliderWrapper';
import StorageLeft from '@atoms/StorageLeft';

const UsedData = ({ used, full, left }: { used: number, full: number, left: number }) => {
  return (
    <S.Wrapper>
      <SliderWrapper used={used} full={full} />
      <StorageLeft left={left} />
    </S.Wrapper>
  );
};

export default UsedData;
