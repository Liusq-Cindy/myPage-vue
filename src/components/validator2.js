import { reg } from '@weiyi/Validator';
import { get } from 'lodash';

// 输出可供element表单组件统一调用的验证方法，type：调用的npm包的验证规则名称，msg:想要输出的错误提示
// TODO: 开发可根据具体需要修改必填、msg为空时默认报错信息等逻辑
const validatePass = (type, msg, required) => {
  // 1、返回校验回调函数
  return (rule, value, callback) => {
    if (value === '' && required === true) {
      callback(new Error('请输入此必填项'));
    }
    if (value !== '') {
      // 2、从npm包中获取type对应的正则表达式
      var regname = get(reg, type);
      // 3、进行校验,msg未填写时，显示默认文案”请输入正确值“
      msg = msg || '请输入正确值';
      let errorMsg = regname.test(value) ? '' : msg;
      // 4、如有错误，返回指定的报错信息
      if (errorMsg) {
        callback(new Error(errorMsg));
      }
    }
    callback();
  };
};

export default validatePass;
