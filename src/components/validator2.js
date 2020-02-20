import { reg } from '@weiyi/Validator';
import { get } from 'lodash';

// 输出可供element表单组件统一调用的验证方法，type：调用的npm包的验证规则名称，msg:想要输出的错误提示
// TODO: 开发可根据具体需要修改必填、msg为空时默认报错信息等逻辑
export function validatorReg (type, msg, required) {
  // 1、返回校验回调函数
  return (rule, value, callback) => {
    if (value === '' && required === true) {
      callback(new Error('请输入此必填项'));
    }
    if (value !== '') {
      // 2、从npm包中获取type对应的正则表达式
      var regname = get(reg, type);
      // 3、进行校验,msg未填写时，显示默认文案”请输入正确值“
      let errorMsg = msg || '请输入正确值';
      // 第一种情况：该方法有对应的简单正则规则
      if (typeof regname === 'object') {
        errorMsg = regname.test(value) ? '' : errorMsg;
      // 第二种情况：该方法返回的不是简单的正则，而是一个方法
      } else if (typeof regname === 'function') {
        errorMsg = regname(value) ? '' : errorMsg;
      }
      // 4、如有错误，返回指定的报错信息
      if (errorMsg) {
        callback(new Error(errorMsg));
      }
    }
    callback();
  };
};
