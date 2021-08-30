/*
 * @Description: 全局的类型推断
 * @Author: 王振
 * @Date: 2021-08-27 09:37:07
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 09:39:25
 */

export type CommonObject<T = any> = Record<string, T>;

export interface ReduxProps<T> {
  storeData: T;
  setStoreData?: (type: string, payload: any) => object;
}
