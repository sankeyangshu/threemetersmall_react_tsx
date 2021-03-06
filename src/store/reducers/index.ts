/*
 * @Description: reducer 文件
 * @Author: 王振
 * @Date: 2021-08-26 15:34:33
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 09:14:27
 */

import { initState } from '../state';
import actionTypes from '../actionTypes';

interface StoreAction {
  type: string;
  payload: any;
}

const storeData = (state = initState, { type, payload }: StoreAction): object => {
  // 判断是否修改了reducer
  if (!actionTypes[type]) {
    return state;
  }

  // 获取action方法
  const { field } = actionTypes[type];

  // 返回修改后的新的值
  return {
    ...state,
    [field]: payload,
  };
};

export default storeData;
