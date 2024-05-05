<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
const days = 3;

const router = useRouter()

// 取得目前的路由
const route = useRoute()

const isMathPath = (day) => {
  return route.path.includes(formatRouterPath(day))
}

const formatRouterPath = (day) => {
  return `d${String(day).padStart(2, '0')}`
}

const formatDay = (day) => {
  return `day ${String(day).padStart(2, '0')}`
}

const handleChange = (e) => { 
  const path = e.target.value
  console.info("selected path", path);
  router.push(path)
}
</script>

<template>
  <nav>
    <!-- <ul>
      <li><router-link to="/d01">Day01</router-link></li>
      <li><router-link to="/d02">Day02</router-link></li>
    </ul> -->
    goto : <select @change="handleChange">
      <option 
        v-for="day in days" 
        :value="formatRouterPath(day)" 
        :selected="isMathPath(day)">{{ formatDay(day) }}</option>
    </select>
  </nav>
  <div>
    <router-view></router-view>
  </div>

  
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;

  li{
    margin-right: 5px;

    a{
      text-decoration: none;
      color: blue;
    }
  }
}
</style>
