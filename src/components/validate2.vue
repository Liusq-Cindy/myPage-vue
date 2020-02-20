<template>
  <div>
    <header>表单校验小组---npm包与element结合使用方案示例</header>
    <div style="width: 600px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="血压" prop="bloodPressure">
          <el-input v-model="ruleForm.bloodPressure"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 调用公共的validatorPass校验方法
import { validatorReg } from './validator2';

export default {
  name: 'validate',
  data () {
    return {
      phone: '',
      errorMsg: '',
      ruleForm: {
        name: '',
        phone: '',
        email: '',
        bloodPressure: ''
      },
      rules: {
        // validatorReg----接受三个参数（npm表单校验方法名（string），错误提示文案(string)，是否必填(boolean)）
        name: [
          { validator: validatorReg('name', '请输入正确的名字'), trigger: 'blur' }
        ],
        phone: [
          { validator: validatorReg('moblie', ''), trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validatorReg('email', '', true), trigger: 'blur' }
        ],
        // 血压对应的npm返回规则，不是一个正则，而是一个方法，这里有兼容处理
        bloodPressure: [
          { required: true, validator: validatorReg('bloodPressure', '请输入1-300正整数', true), trigger: 'blur' }
        ],
        // 2、element原本的默认校验方法
        address: [
          { required: true, message: '请输入地址', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
</style>
