import React from "react";
import { Slider as _Slider } from "antd";

import './index.scss';

interface SliderProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = (props) => {
  const { value, defaultValue = 20, onChange } = props;
  return (
    <_Slider value={value} defaultValue={defaultValue} onChange={onChange} />
  );
};

export default React.memo(Slider);
