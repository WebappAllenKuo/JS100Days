<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/d01">Day01</router-link></li>
      <li><router-link to="/d02">Day02</router-link></li>
    </ul>
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
