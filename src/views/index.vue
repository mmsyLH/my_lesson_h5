<!-- 1表单的数据主要参考http://api.jqrjq.cn/doc.html#/jqr/article-cat-controller/allUsingGET_4 -->
<!-- 2 数据格式
{
"success": true,
"code": 1,
"msg": "成功",
"data": {
    "articleCats": [
    {
        "id": 1,
        "catName": "前端",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:15:58.000+00:00",
        "updateTime": "2023-07-04T17:16:02.000+00:00",
        "deleted": 0
    },
    ...
    {
        "id": 11,
        "catName": "运维",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:22:12.000+00:00",
        "updateTime": "2023-07-04T17:22:14.000+00:00",
        "deleted": 0
    }
    ]
    }
}

3.问题
   分类占的宽度太大,如何解决
   点击添加模态框怎么解决
-->
<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in data.data.articleCats" :key="item" class="scrollbar-demo-item">
        {{ item.catName }}
      </p>
    </div>
    <div>
      <span><RouterLink to="login">登录页面</RouterLink></span>


    </div>
    <div>
      <span><RouterLink to="register">注册页面</RouterLink></span>
    </div>
    <div>
      <span><RouterLink to="user">用户中心</RouterLink></span>
    </div>
    <div>
      <span><RouterLink to="forgot">找回密码</RouterLink></span>
    </div>
    <div>

    </div>
  </el-scrollbar>
</template>
<script setup>
const data = {
  "success": true,
  "code": 1,
  "msg": "成功",
  "data": {
    "articleCats": [
      {
        "id": 1,
        "catName": "前端",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:15:58.000+00:00",
        "updateTime": "2023-07-04T17:16:02.000+00:00",
        "deleted": 0
      },
      {
        "id": 2,
        "catName": "Java",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:16:33.000+00:00",
        "updateTime": "2023-07-04T17:16:37.000+00:00",
        "deleted": 0
      },
      {
        "id": 3,
        "catName": "Python",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:16:55.000+00:00",
        "updateTime": "2023-07-04T17:16:57.000+00:00",
        "deleted": 0
      },
      {
        "id": 4,
        "catName": "人工智能",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:17:31.000+00:00",
        "updateTime": "2023-07-04T17:17:34.000+00:00",
        "deleted": 0
      },
      {
        "id": 5,
        "catName": "AIGC",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:17:54.000+00:00",
        "updateTime": "2023-07-04T17:17:56.000+00:00",
        "deleted": 0
      },
      {
        "id": 6,
        "catName": "算法",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:18:20.000+00:00",
        "updateTime": "2023-07-04T17:18:23.000+00:00",
        "deleted": 0
      },
      {
        "id": 7,
        "catName": "移动开发",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:19:33.000+00:00",
        "updateTime": "2023-07-04T17:19:35.000+00:00",
        "deleted": 0
      },
      {
        "id": 8,
        "catName": "HarmonyOS",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:20:14.000+00:00",
        "updateTime": "2023-07-04T17:20:17.000+00:00",
        "deleted": 0
      },
      {
        "id": 9,
        "catName": "推荐",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:21:09.000+00:00",
        "updateTime": "2023-07-04T17:21:12.000+00:00",
        "deleted": 0
      },
      {
        "id": 10,
        "catName": "关注",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:21:29.000+00:00",
        "updateTime": "2023-07-04T17:21:31.000+00:00",
        "deleted": 0
      },
      {
        "id": 11,
        "catName": "运维",
        "parentId": 0,
        "showInNav": true,
        "sortOrder": 50,
        "createTime": "2023-07-04T17:22:12.000+00:00",
        "updateTime": "2023-07-04T17:22:14.000+00:00",
        "deleted": 0
      }
    ]
  }
}


</script>
<style scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>


