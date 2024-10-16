<!-- About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <el-button type="primary" @click="showMessage">111</el-button>
    <router-link to="/">Go to Home</router-link>
    {{ data }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getBlog } from '../api/homeApi'
import message from '../utils/Message'

const data = ref({ a: 1 })
// 获取数据
const getBlogList = async () => {
  const res = await getBlog()
  console.log(res)
}
getBlogList()
setTimeout(() => {
  getBlogList()
}, 3000)

/** 显示消息 */
const showMessage = () => {
  message.success('请求成功')
}
</script>
