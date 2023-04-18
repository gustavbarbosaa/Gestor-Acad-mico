<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="pages">
    <a href="/">
      <!-- p-3 mx-1 my-3 pl-3 -->
      <div class="flex items-center justify-start gap-2 w-full h-12 px-2 my-3 font-bold text-sm text-font-sidebar-color rounded-md hover:bg-gray-700 hover:text-gray-300">
        <img :src="img" alt="img">
        <h2>{{text}}</h2>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagesSideBar',
  props: {
    img: String,
    text: String,
  },
});
</script>

<style scoped>
  #pages img{
    width: 20px;
    height: 20px;
  }
</style>
