<template>

    <el-page-header @back="() => { this.$router.go(-1); }" class="go_back">
      <template #content>
        <span class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">用户中心页面</span>
      </template>
    </el-page-header>
  <Header/>

  <div class="container">
    <div class="user-info">
      <p>状态：{{ userState }}</p>
      <p>用户ID：{{ userId }}</p>
      <p>用户名：{{ userName }}</p>
      <p>用户类型：{{ userTypeText }}</p>
<!--      <p>Token：{{ userToken }}</p>-->
<!--      <p>用户类型：{{ userType }}</p>-->
<!--      <p>绑定：{{ userBinding }}</p>-->
<!--      <p>创建时间：{{ userCreateTime }}</p>-->
<!--      <p>更新时间：{{ userUpdateTime }}</p>-->
    </div>
  </div>
  <el-main class="my_container">
    <el-collapse  class="collapse">
      <el-collapse-item name="2" >
        <template #title>
          <el-icon :size="20" style="margin-right: 20px">
            <Operation/>
          </el-icon>
          <el-text>  我的订单</el-text>
        </template>
      </el-collapse-item>
      <el-collapse-item title="收货地址" name="3" >
        <template #title>
          <el-icon :size="20" style="margin-right: 20px">
            <Operation/>
          </el-icon>
          <el-text>  收货地址</el-text>

        </template>
      </el-collapse-item>
      <el-collapse-item title="个人信息" name="4" >
        <template #title>
          <el-icon :size="20" style="margin-right: 20px">
            <Operation/>
          </el-icon>
          <el-text>个人信息</el-text>
        </template>
      </el-collapse-item>
    </el-collapse>

  </el-main>
</template>

<script>
import { useUserStore } from '@/store/modules/user';
import { computed, onMounted } from 'vue';
import {getToken, getUser} from '@/utils/auth';
import {Operation} from "@element-plus/icons-vue";

export default {
  components: {Operation},
  setup() {
    const userStore = useUserStore();
    const userState = computed(() => userStore.user.state);
    const userId = computed(() => userStore.user.id);
    const userName = computed(() => userStore.user.userName);
    const userType = computed(() => userStore.user.userType);
    const userToken = computed(() => userStore.user.token);
    const userCreateTime = computed(() => userStore.user.createTime);
    const userUpdateTime = computed(() => userStore.user.updateTime);
    let userTypeText = "";

    // 在组件挂载时，调用 getUser 函数获取用户信息并设置到 userStore 中
    onMounted(async () => {
      // const userinfoStr = await getUser(getToken());
      // const userinfo = JSON.parse(userinfoStr);
      // console.log("userinfo", userinfo);
      // userStore.setUser(userinfo);
    });

    // 根据用户类型设置用户类型文本
    if (userType.value === 1) {
      userTypeText = '普通用户';
    } else {
      userTypeText = '其他类型';
    }

    return {
      userState,
      userId,
      userName,
      userType,
      userToken,
      userCreateTime,
      userUpdateTime,
      userTypeText,
    };
  },
};
</script>
<style scoped>


* {
  font-size: 20px;
}

.my_center {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

}

el-header {
  height: 200px;
}

.my_info {
  background-color: #62a8ea;
  display: flex;
  height: 15vh;
  min-height: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.el-text {
  font-size: 20px;
}


</style>