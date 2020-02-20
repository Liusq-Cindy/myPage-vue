<template>
  <div>
    <header>表单校验小组---npm包与element结合方案1</header>
    <div>
      手机号码：<el-input v-model="phone"  style="width: 200px"></el-input>
      <el-button @click="lsq()">验证文本是否是手机号码</el-button>
      {{errorMsg}}
    </div>
  </div>
</template>

<script>
// 调用组件
import { Validator, reg } from '@weiyi/Validator';
export default {
  name: 'validate',
  data () {
    return {
      phone: '',
      errorMsg: ''
    };
  },
  methods: {
    lsq () {
      console.log('点击', reg.idCard);
      // 创建表单校验实例
      let validator = new Validator();
      validator.add(this.phone, [
        {
          strategy: 'mobile',
          errorMsg: '请输入正确手机号码'
        }
      ]);
      let errorMsg = validator.start();
      console.log('errorMsg', errorMsg);
      this.errorMsg = errorMsg;
    }
  }
};
</script>

<style lang="less">
</style>
