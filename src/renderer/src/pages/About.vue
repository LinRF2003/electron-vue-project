<!-- About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <el-button type="primary">111</el-button>
    <router-link to="/">Go to Home</router-link>
    {{ data }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getBlog } from '../api/homeApi'

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
</script>
