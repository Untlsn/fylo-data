import React from 'react';
import * as S from './style';
import StorageText from '@atoms/StorageText';
import StorageSlider from '@atoms/StorageSlider';

const SliderWrapper = ({ used, full }: { used: number, full: number }) => {
  return (
    <S.Wrapper>
      <StorageText used={used} />
      <StorageSlider used={used} full={full} />
    </S.Wrapper>
  );
};

export default SliderWrapper;
