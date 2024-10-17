<!-- About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <el-button type="primary" @click="showMessage">111</el-button>
    <el-button type="primary" @click="addCounter">添加</el-button>
    <router-link to="/">Go to Home</router-link>
    {{ data }}

    <!-- 直接从 store 中访问 state -->
    <div>Current Count: {{ counter.count }}</div>
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

import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

const addCounter = () => {
  // counter.count++
  // counter.$patch({ count: counter.count + 2 })
  counter.increment()
}
// counter.count++
// // 自动补全！ ✨
// counter.$patch({ count: counter.count + 1 })
// // 或使用 action 代替
// counter.increment()
</script>
