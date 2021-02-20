import Request from '../axios';
import API from '../api';

// 定义参数类型
type paramsType<T = any> = {
  [key: string]: T;
};


export default {
  accountLogin (data: paramsType) {
    return Request('post', API.COMMON.AUTH.LOGIN, data)
  },
  accountRegist (data: paramsType) {
    return Request('post', API.COMMON.AUTH.REGIST, data)
  },
  accountInfo (data: paramsType) {
    return Request('get', API.COMMON.AUTH.ACCOUNT_INFO, data)
  }
}