<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="pages" class="flex items-center pl-1">
    <img :src="img" :alt="alt">
    <h2>{{text}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagesSideBar',
  props: {
    img: String,
    alt: String,
    text: String,
  },
});
</script>
