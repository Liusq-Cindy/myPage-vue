
// 只需要用到表单校验的正则库
import { reg } from '@weiyi/Validator';
import _ from 'lodash';
export const vName = (rule, value, callback) => {
  if (value !== '') {
    var regname = reg.name;
    const lsq = 'name';
    console.log('111', _.get(reg, lsq));
    const errorMsg = regname.test(value) ? '' : '名字不对';
    if (errorMsg) {
      callback(new Error(errorMsg));
    }
  }
  callback();
};

// const validatePass = (type, msg) => {
//   return (rule, value, callback) => {
//     if (value !== '') {
//       var regname = _.get(reg, type);
//       console.log('regname', regname);
//       const errorMsg = regname.test(value) ? '' : msg;
//       if (errorMsg) {
//         callback(new Error(errorMsg));
//       }
//     }
//     callback();
//   };
// };

// export default validatePass;
