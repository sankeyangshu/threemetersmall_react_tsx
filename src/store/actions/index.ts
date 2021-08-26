/*
 * @Description: 判断action是否传入了修改类型和值
 * @Author: 王振
 * @Date: 2021-08-26 15:45:14
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-26 15:57:24
 */

import actionTypes from '../actionTypes';

export const setStoreData = (type: string, payload: any): object => {
  if (!actionTypes[type]) throw new Error('请传入修改的数据类型和值');
  return { type, payload };
};
