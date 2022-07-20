/*
  TODO: 给一颗多叉堆随机添加指定数量的节点
  1. 给一颗多叉堆随机添加一个节点
  2. 生成一个随机整数
*/

import { value_level_1 } from "../constants";

// 获取随机非负整数
export const getRandomNum = (l: number, r: number): number => {
  if (l <= 0) {
    throw new Error("Number Range Error");
  }
  return Math.ceil(Math.random() * (r - l + 1) + l) - 1;
};

// 生成指定长度的非负整数数组
export const getRandomNumArray = (l: number, r: number, length: number = 20) => {
  if (length <= 0) {
    throw new Error("Length of array is incorrect");
  }
  const res: number[] = [];
  while (res.length < length) {
    const randomNum = getRandomNum(l, r);
    if (res.includes(randomNum)) continue;
    res.push(randomNum);
  }
  return res;
};

export const randomId = (): string => Math.random().toString(32).slice(3, 10);

export const randomFloor = (l: number, r: number): number => getRandomNum(l, r);

export const createCirclePackingData = () => {
  const root = {
    name: randomId(),
    children: []
  };

  (function dfs(root) {
    // const values = getRandomNumArray(value_level_1[0], value_level_1[1]);
  })(root);

}
