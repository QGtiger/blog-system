// import { Ref, ComponentInternalInstance } from "vue";
// import { Store } from "vuex";

// response
export type responseDataType<T> = {
  status: number,
  success: boolean,
  tips: string | number,
  token: undefined
}

// 登录组件Data对象属性定义
export type normalDataType<T> = {
  [key: string]: any
};
