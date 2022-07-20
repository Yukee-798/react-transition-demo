import React from "react";
import {
  CirclePacking as _CirclePacking,
  CirclePackingConfig,
} from "@ant-design/charts";

interface CirClePackingProps {
  data: {
    name: string;
    value?: number;
    children?: Array<CirClePackingProps["data"]>;
  };
}

const CirClePacking: React.FC<CirClePackingProps> = (props) => {
  const config: CirclePackingConfig = {
    data: props.data,
    // autoFit: true,
    width: 500,
    height: 500,
    padding: 0,
    sizeField: "r",
    // 自定义颜色
    colorField: "r",
    color: "rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)",
    // 自定义样式
    pointStyle: {
      stroke: "rgb(183, 55, 121)",
      lineWidth: 0.5,
    },
    label: false,
    legend: false,
    drilldown: {
      enabled: true,
      breadCrumb: {
        position: "top-left",
      },
    },
  };
  return <_CirclePacking {...config} />;
};

export default React.memo(CirClePacking);
