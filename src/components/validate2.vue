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
import validatorPass from './validator2';

export default {
  name: 'validate',
  data () {
    return {
      phone: '',
      errorMsg: '',
      ruleForm: {
        name: '',
        phone: '',
        email: ''
      },
      rules: {
        // 1、调用validatorPass----接受三个参数（npm表单校验方法名（string），错误提示文案(string)，是否必填(boolean)）
        name: [
          { validator: validatorPass('name', '名字请输入纯汉字'), trigger: 'blur' }
        ],
        phone: [
          { validator: validatorPass('moblie', ''), trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validatorPass('email', '', true), trigger: 'blur' }
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
