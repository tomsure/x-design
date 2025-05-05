<script setup lang="ts">
import { onMounted } from 'vue';
import {fnConfig} from '@x-design/configs'
import HelloWorld from './components/HelloWorld.vue';
import Table from './components/table.vue'
onMounted(()=>{
   fnConfig()
})
</script>

<template>
  <div>
    <!-- <Button></Button>
    <Input></Input>
    <HelloWorld></HelloWorld>
    <el-button type="primary">主要按钮</el-button> -->
    <Table></Table>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app {
  width: 100%;
}
</style>
