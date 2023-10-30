<template>
  <!-- 1表单的数据主要参考http://api.jqrjq.cn/doc.html#/jqr/mobile-controller/eLoginUsingPOST -->
  <!-- 2 数据格式
  {
  "email": "",
  "password": ""
  }
  3.问题
     图片圆角
     表单邮箱和密码加上图标
  -->
  <el-page-header @back="() => { this.$router.go(-1); }" class="go_back">
    <template #content>
      <span class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">登录页面</span>
    </template>
  </el-page-header>
  <div class="image-preview">
    <el-image style="width: 100px;border-radius: 50%; height: 100px" :src="url" :zoom-rate="1.2"
              :initial-index="4" fit="cover"/>
  </div>

  <el-form ref="formRef" :model="loginForm" class="demo-dynamic">
<!--    <el-form-item prop="email" :rules="[
            {
                required: true,
                message: '请输入你的邮箱',
                trigger: 'blur',
            },
            {
                type: 'email',
                message: '请输入格式正确的邮箱',
                trigger: ['blur', 'change'],
            },
        ]">

      <el-input v-model="loginForm.email" placeholder="请输入你的邮箱" :suffix-icon="Message"/>
    </el-form-item>-->
    <el-form-item prop="userName" :rules="[
            {
                required: true,
                message: '账户不能为空',
                trigger: 'blur',
            },
        ]">
      <el-input v-model="loginForm.userName" placeholder="请输入你的账户" :suffix-icon="Message" />

    </el-form-item>
    <el-form-item prop="password" :rules="{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
        }">
      <el-input v-model="loginForm.password" placeholder="请输入你的密码" :suffix-icon="Unlock"  type="password">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.native.prevent="login">用户登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {reactive,} from 'vue'
import {Message, Unlock} from "@element-plus/icons-vue";
import {useUserStore} from '@/store/modules/user';
import router from "@/router";

const userStore = useUserStore();
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const loginForm = reactive({
  password: "123456789",
  email: "",
  userName:"2203840110",
})
const login = () => {
  userStore.login(loginForm)
      .then(res => {
        console.log("res:",res)
         if (res.code===1){
           console.log("res.userinfo",res.data.userinfo)
           userStore.setUser(res.data.userinfo)
          router.push("/user")
         }else {
           console.log(res.msg)
         }
      })
      .catch(error => {
        // this.loading = false;
      });
}


</script>

<style>

.el-form-item__content {
  justify-content: center;
}

</style>