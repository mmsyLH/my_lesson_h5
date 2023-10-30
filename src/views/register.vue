<template>
  <!-- 1表单的数据主要参考http://api.jqrjq.cn/doc.html#/jqr/mobile-controller/eRegisterUsingPOST -->
  <!-- 2 数据格式
  {
      "email": "",
      "password": "",
      "userName": ""
  }

  3.问题
     图片圆角
     userName,邮箱和密码加上图标
  -->

  <el-page-header @back="() => { this.$router.go(-1); }" class="go_back">
    <template #content>
      <span class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">注册页面</span>
    </template>
  </el-page-header>
  <div class="image-preview">
    <el-image style="width: 100px;border-radius: 50%; height: 100px" :src="url" :zoom-rate="1.2"

              :initial-index="4" fit="cover"/>
  </div>


  <el-form ref="formRef" :model="registerForm" class="demo-dynamic">
    <el-form-item prop="userName" :rules="[
            {
                required: true,
                message: '请输入你的账户',
                trigger: 'blur',
            },
        ]">
      <el-input v-model="registerForm.userName" placeholder="请输入你的账户" autofocus/>
    </el-form-item>
    <!--        <el-form-item prop="email" :rules="[-->
    <!--            {-->
    <!--                required: true,-->
    <!--                message: '请输入你的邮箱',-->
    <!--                trigger: 'blur',-->
    <!--            },-->

    <!--        ]">-->
    <!--            <el-input v-model="loginForm.email" placeholder="请输入你的邮箱" />-->
    <!--        </el-form-item>-->
    <el-form-item prop="password" :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 8, max: 100, message: '密码长度在8到100之间', trigger: 'blur' }
        ]">
      <el-input v-model="registerForm.password" placeholder="请输入你的密码" show-password/>
    </el-form-item>
    <!--        <el-form-item prop="repassword" >-->
    <!--            <el-input v-model="loginForm.password" placeholder="请确认你的密码" show-password />-->
    <!--        </el-form-item>-->
    <el-form-item>
      <!--            <el-button type="primary" @click="submitForm($refs.formRef)">用户注册</el-button>-->
      <el-button type="primary" @click="register">用户注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {reactive,} from 'vue'
import router from "@/router";
import {useUserStore} from "@/store/modules/user";

const userStore = useUserStore();
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const registerForm = reactive({
  password: "",
  userName: "",
  // email: ""
})

const register = () => {
  console.log("login()执行")
  console.log("registerForm", registerForm)
  userStore.register(registerForm)
      .then(res  => {
        console.log("res", res )
        if (res .status === 200) {
          alert("注册成功，即将自动进入登录页面")
          setTimeout(() => {
            // 3秒后跳转到登录页面
            router.push('/login');
          }, 3000);
        } else {
          alert("未知错误 注册失败")
          console.log(res.msg)
        }
      })
      .catch(error => {
        console.error(error);
      });
}

</script>

<style>
.el-form-item__content {
  justify-content: center;
}

.image-preview {
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  