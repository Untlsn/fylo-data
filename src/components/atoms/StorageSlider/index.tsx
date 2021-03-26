import React from 'react';
import * as S from './style';

const StorageSlider = ({ used, full }: { used: number, full: number }) => {
  const percent = used / full * 100;

  return (
    <div>
      <S.Slider sliderPercent={percent} />
      <S.TextWrapper>
        <span>0 GB</span>
        <span>{full} GB</span>
      </S.TextWrapper>
    </div>
  );
};

export default StorageSlider;
